import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getCategory } from "../redux/slice/getCategorySlice";
import { useLocation, useNavigate} from "react-router";
import { getFaq } from "../redux/slice/getFaqSlice";
import { getProduct } from "../redux/slice/getProductSlice";
import { getSingleProduct } from "../redux/slice/getSingleProduct";
import CommonNavbar from "../common/CommonNavbar";
import { Faq, RelatedIndustries, OtherSector, CustomerSupport } from "../components/product";
import PageBreadcrumb from "../common/PageBreadCrumb";


const ProductsDetail = () => {
  const navigate = useNavigate();
   const location = useLocation();
  let { productId, categoryId } = location.state;

const popularTabs = [
  { label: "Industrial Documentary", onClick: () => navigate("/industrydocumentry", { state: { productId, categoryId } }) },
  { label: "Expert Talk", onClick: () => {} },
  { label: "Industrial Research", onClick: () => navigate("/industrialresearch") },
  { label: "Project Report", onClick: () => navigate("/projectreport", { state: { productId, categoryId } }) },
  { label: "Supplier / Expert Connect", onClick: () => {} },
  { label: "Government Scheme", onClick: () => navigate("/governmentscheme") },
  { label: "Service", onClick: () => {} },
];

  const [productInfo, setProductInfo] = useState<any[]>([]);
  const [otherSector, setOtherSector] = useState<any[]>([]);
  const [industryData, setIndustryData] = useState<any[]>([]);
  const [faq, setFaq] = useState<any[]>([]); 
  const dispatch = useAppDispatch(); 

  const videoDescription = async () => {
    try {
      const response = await dispatch(getSingleProduct(productId)).unwrap();
      setProductInfo(response?.data?.Product);
    } catch (error) {
      console.log("error in single product api", error);
    }
  };

  const getOtherSector = async () => {
    try {
      const response = await dispatch(getCategory()).unwrap();
      setOtherSector(response?.data?.category || []);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  const getFaqs = async () => {
    try {
      const response = await dispatch(getFaq(productId)).unwrap();
      setFaq(response?.data);
    } catch (error) {
      console.log("error in getFaq", error);
    }
  };
  const getRelatedIndustry = async () => {
    if (!categoryId) {
      console.log("No categoryId found!");
      return;
    }
    try {
      const response = await dispatch(getProduct(categoryId)).unwrap();
      setIndustryData(response?.data?.product || []);
    } catch (error) {
      console.log("Error in API", error);
    }
  };
  useEffect(() => {
    getOtherSector();
    getRelatedIndustry();
    getFaqs();
    videoDescription();
  }, []);
  return (
    <div>
      {productInfo.map((item) => (
        <PageBreadcrumb key={item?._id} pageTitle={item?.product_name} />
      ))}
      <div className="w-[90%] mx-auto mt-4">
        {/* popular tags */}
        <div className="space-y-3">
          <h6 className="font-semibold text-xl select-none">POPULAR TAG</h6>
          <CommonNavbar
            tabs={popularTabs}
            containerClassName="px-0"
            listClassName="flex space-x-2 "
            itemClassName="border-[1px] border-[#E4E7E9] hover:border-[#FA8232] px-2 py-1 hover:rounded-xl hover:text-[#FA8232] hover:bg-[#FFF3EB] cursor-pointer text-sm"
          />
        </div>
        {/* images and videos section */}
        {productInfo.map((item, index) => (
          <div className="flex gap-5 mt-7" key={`productInfo-${index}`}>
            <div className="w-[70%] rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={item?.product_video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-[30%] flex flex-col gap-5">
              <div className="bg-[#D49A28] h-52 rounded-lg p-2">{item?.product_image1}</div>
              <div className="bg-[#D49A28] h-52 rounded-lg p-2">{item?.product_image2}</div>
              <div className="bg-[#D49A28] h-52 rounded-lg p-2">{item?.product_image3}</div>
            </div>
          </div>
        ))}

        {/* other information */}
        <div className="flex gap-5 mt-7">
          {/* left part of page */}
          <div className="w-[70%] space-y-16">
            {/* Industry Overview */}
            {productInfo.map((item) => (
              <div className="space-y-5" key={item?._id}>
                <h3 className="font-bold text-3xl">{item?.product_name}</h3>
                <p className="text-lg">{item?.product_description}</p>
              </div>
            ))}

            {/* Frequently asked questions */}
            <Faq Faqs={faq} />

            {/* Related Industries */}
            <RelatedIndustries data={industryData} />
          </div>

          {/* right part of page */}
          <CustomerSupport onSubscribe={() => console.log("Subscribe Successfully")} onEnquiry={() => console.log("What is your Enquiry")} />
        </div>
      </div>
 
      {/* Other Sectors */}
      <OtherSector data={otherSector} />
    </div>
  );
};

export default ProductsDetail;
