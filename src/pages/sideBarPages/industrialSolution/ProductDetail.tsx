import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { getCategory } from "../../../redux/slice/getCategorySlice";
import { useLocation } from "react-router";
import { getFaq } from "../../../redux/slice/getFaqSlice";
import { getProduct } from "../../../redux/slice/getProductSlice";
import { getSingleProduct } from "../../../redux/slice/getSingleProduct";
import CommonNavbar from "../../../common/CommonNavbar";
import {
  Faq,
  RelatedIndustries,
  OtherSector,
  CustomerSupport,
} from "../../../components/productDetailComponent";
import PageBreadcrumb from "../../../common/PageBreadCrumb";
import { ExpertTalk, GovernmentScheme, IndustrialDocumentary, IndustrialResearch, ProjectReport, Service, SupplierExpertConnect } from "../../../components/productDetailTabs";
import { useToast } from "../../../common/ToastNotification";

const ProductDetail = () => {
  const {showToast} = useToast();
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
  ].map((tab) => ({
    ...tab,
    isActive: tab.label === activeTab,
    onClick: () => setActiveTab(tab?.label),
  }));

  const [productInfo, setProductInfo] = useState<any[]>([]);
  const [otherSector, setOtherSector] = useState<any[]>([]);
  const [industryData, setIndustryData] = useState<any[]>([]);
  const [faq, setFaq] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const renderContent = () => {
    switch (activeTab) {
      case "Industrial Documentary":
        return <IndustrialDocumentary productInfo={productInfo}   />
      case "Expert Talk":
        return <ExpertTalk productInfo={productInfo}/>
      case "Industrial Research":
        return <IndustrialResearch productInfo={productInfo}/>
      case "Project Report":
        return <ProjectReport productInfo={productInfo}/>
      case "Supplier / Expert Connect":
        return <SupplierExpertConnect productInfo={productInfo}/>
      case "Government Scheme":
        return <GovernmentScheme  />
      case "Service":
        return <Service productInfo={productInfo} />
      default:
        return <div>Tab not found</div>;
    }
  };
  const fetchAllData = async () => {
    try {
      // Trigger all API calls in parallel
      const [singleProductRes, categoryRes, faqRes, relatedIndustryRes] =
        await Promise.all([
          dispatch(getSingleProduct(productId)).unwrap(),
          dispatch(getCategory()).unwrap(),
          dispatch(getFaq(productId)).unwrap(),
          categoryId
            ? dispatch(getProduct(categoryId)).unwrap()
            : Promise.resolve(null),
        ]);

      setProductInfo(singleProductRes?.data?.Product || []);
      setOtherSector(categoryRes?.data?.category || []);
      setFaq(faqRes?.data || []);
      if (relatedIndustryRes) {
        setIndustryData(relatedIndustryRes?.data?.product || []);
      }
    } catch (error) {
      showToast("something went wrong", "error");

    }
  };
  useEffect(() => {
    fetchAllData();
  }, [productId]);


console.log("details of product",productInfo);

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
          </div>
          <div>
            {renderContent()}
          </div>
          <div className="space-y-16 mt-16">
            {/* Frequently asked questions */}
            <Faq Faqs={faq} />
            {/* Related Industries */}
            <RelatedIndustries
              selectedCategoryId={categoryId}
              selectedProductId={productId}
              data={industryData}
            />
          </div>
        </div>

        {/* right part of the page */}
        <div className="w-[25%]  mt-28 space-y-10 ">
          { activeTab === "Industrial Documentary" && (
               productInfo.map((item, index) => (
            <div key={`productInfo-${index}`} className="flex flex-col gap-5">
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
          ))
          )} 

          <CustomerSupport
            onSubscribe={() => console.log("Subscribe Successfully")}
            onEnquiry={() => console.log("What is your Enquiry")}
          />
        </div>
      </div>
      <div className="bg-white">
        {/* Other Sectors */}
        <OtherSector selectedCategoryId={categoryId} data={otherSector} />
      </div>
    </div>
  );
};

export default ProductDetail;