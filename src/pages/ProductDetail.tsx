import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getCategory } from "../redux/slice/getCategorySlice";
import { useLocation, useNavigate } from "react-router";
import { getFaq } from "../redux/slice/getFaqSlice";
import { getProduct } from "../redux/slice/getProductSlice";
import { getSingleProduct } from "../redux/slice/getSingleProduct";
import CommonNavbar from "../common/CommonNavbar";
import {
  Faq,
  RelatedIndustries,
  OtherSector,
  CustomerSupport,
} from "../components/product";
import PageBreadcrumb from "../common/PageBreadCrumb";
import CommonButton from "../common/CommonButton";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("Industrial Documentary");
  const location = useLocation();
  let { productId, categoryId } = location.state;

  const popularTabs = [
    { label: "Industrial Documentary" },
    { label: "Expert Talk" },
    { label: "Industrial Research" },
    { label: "Project Report" },
    { label: "Supplier / Expert Connect" },
    { label: "Government Scheme" },
    { label: "Service" },
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
    <div className="bg-gray-50">
      {productInfo.map((item) => (
        <PageBreadcrumb key={item?._id} pageTitle={item?.product_name} />
      ))}
      <div className="w-[90%]  mx-auto mt-4 flex gap-6">
        {/* popular tags */}
        <div className="w-[75%]">
          <div className="space-y-3">
            <h6 className="font-semibold text-xl select-none">POPULAR TAG</h6>
            <CommonNavbar
              tabs={popularTabs}
              containerClassName="px-0"
              listClassName="flex space-x-2 "
              itemClassName="border-[1px] border-[#E4E7E9] hover:border-[#FA8232] px-2 py-1 hover:rounded-xl hover:text-[#FA8232] hover:bg-[#FFF3EB] cursor-pointer text-sm"
            />
            {/* <div className="flex space-x-6">
            {popularTabs.map((tab) => (
              <CommonButton
                type="button"
                styleButton="border-[1px] border-[#E4E7E9] hover:border-[#FA8232] px-2 py-1 hover:rounded-xl hover:text-[#FA8232] hover:bg-[#FFF3EB] cursor-pointer text-sm"
                styleLabel="text-sm"
                onClick={() => setActiveTab(tab.label)}
                label={tab.label}
              />
            ))}
          </div> */}
          </div>
          {productInfo.map((item, index) => (
            <div
              className=" mt-7 rounded-lg overflow-hidden"
              key={`productInfo-${index}`}
            >
              <iframe
                width="100%"
                height="660px"
                src={item?.product_video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}

          <div className="mt-7 space-y-16">
            {/* Industry Overview */}
            {productInfo.map((item) => (
              <div className="space-y-5" key={item?._id}>
                <h3 className="font-bold text-3xl">{item?.product_name}</h3>
                <p className="text-lg text-justify">
                  {item?.product_description}
                </p>
              </div>
            ))}

            {/* Frequently asked questions */}
            <Faq Faqs={faq} />

            {/* Related Industries */}
            <RelatedIndustries data={industryData} />
          </div>
        </div>

        {/* right part of the page */}
        <div className="w-[25%]  mt-28 space-y-12 ">
          {productInfo.map((item, index) => (
            <div  key={`productInfo-${index}`} className="flex flex-col gap-5">
              <div className="bg-[#D49A28] h-52 rounded-lg p-2">
                {item?.product_image1}
              </div>
              <div className="bg-[#D49A28] h-52 rounded-lg p-2">
                {item?.product_image2}
              </div>
              <div className="bg-[#D49A28] h-52 rounded-lg p-2">
                {item?.product_image3}
              </div>
            </div>
          ))}

          <CustomerSupport
            onSubscribe={() => console.log("Subscribe Successfully")}
            onEnquiry={() => console.log("What is your Enquiry")}
          />
        </div>
      </div>
      <div className="bg-white">
        {/* Other Sectors */}
        <OtherSector data={otherSector} />
      </div>
    </div>
  );
};

export default ProductDetail;
