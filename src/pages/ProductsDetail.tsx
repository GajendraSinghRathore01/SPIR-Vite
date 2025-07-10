import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getCategory } from "../redux/slice/getCategorySlice";
import { useLocation } from "react-router";
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

// Import all tab components
import {
  IndustrialDocumentary,
  ExpertTalk,
  IndustrialResearch,
  ProjectReport,
  SupplierExpertConnect,
  GovernmentScheme,
  Service,
} from "../components/productDetailTabs";
import { getGovernment } from "../redux/slice/getGovernmentSlice";
import { useToast } from "../common/ToastNotification";

// Memoized components
const MemoizedFaq = memo(Faq);
const MemoizedRelatedIndustries = memo(RelatedIndustries);
const MemoizedOtherSector = memo(OtherSector);
const MemoizedCustomerSupport = memo(CustomerSupport);
const MemoizedPageBreadcrumb = memo(PageBreadcrumb);

// Static content component
const StaticContent = memo(
  ({
    faq,
    industryData,
    otherSector,
    onSubscribe,
    onEnquiry,
    showCustomerSupport,
    selectedProductId,
    selectedCategoryId,
  }: {
    faq: any[];
    industryData: any[];
    otherSector: any[];
    onSubscribe: () => void;
    onEnquiry: () => void;
    showCustomerSupport: boolean;
    selectedProductId: string;
    selectedCategoryId: string;
  }) => (
    <>
      <div className="flex justify-between gap-5 mt-7">
        <div className="w-[70%] space-y-16">
          <MemoizedFaq Faqs={faq} />
          <MemoizedRelatedIndustries
            data={industryData}
            selectedCategoryId={selectedCategoryId}
            selectedProductId={selectedProductId}
          />
        </div>
        {showCustomerSupport && (
          <MemoizedCustomerSupport
            onSubscribe={onSubscribe}
            onEnquiry={onEnquiry}
          />
        )}
      </div>
      <MemoizedOtherSector
        data={otherSector}
        selectedCategoryId={selectedCategoryId}
      />
    </>
  )
);

// Define available tabs - all 7 tabs should be available
const AVAILABLE_TABS = [
  "Industrial Documentary",
  "Expert Talk",
  "Industrial Research",
  "Project Report",
  "Supplier / Expert Connect",
  "Government Scheme",
  "Service",
] as const;

type TabType = (typeof AVAILABLE_TABS)[number];

const ProductsDetail = () => {
  const {showToast} = useToast();
  const location = useLocation();
  const { productId = '', categoryId='' } = location?.state ?? {};

  // Active tab state
  const [activeTab, setActiveTab] = useState<TabType>("Industrial Documentary");
  const [loading, setLoading] = useState(false);

  // Current tab content - only store what's needed
  const [currentTabContent, setCurrentTabContent] = useState<any[]>([]);

  // Static data

  const [productInfo, setProductInfo] = useState<any[]>([]);
  const [otherSector, setOtherSector] = useState<any[]>([]);
  const [industryData, setIndustryData] = useState<any[]>([]);
  const [faq, setFaq] = useState<any[]>([]);
  const [governmentScheme, setGovernmentScheme] = useState<any[]>([]);

  const dispatch = useAppDispatch();

  // Memoized callbacks
  const handleSubscribe = useCallback(() => {
    console.log("Subscribe Successfully");
    // Add your subscription logic here
  }, []);

  const handleEnquiry = useCallback(() => {
    console.log("What is your Enquiry");
    // Add your enquiry logic here
  }, []);

  // Load static content once
  const loadStaticContent = useCallback(async () => {
    setLoading(true);
    try {
      const [
        productResponse,
        categoryResponse,
        faqResponse,
        industryResponse,
        governmentResponse,
      ] = await Promise.all([
        dispatch(getSingleProduct(productId)).unwrap(),
        dispatch(getCategory()).unwrap(),
        dispatch(getFaq(productId)).unwrap(),
        categoryId
          ? dispatch(getProduct(categoryId)).unwrap()
          : Promise.resolve({ data: { product: [] } }),
        dispatch(getGovernment(productId)).unwrap(),
      ]);

      const productData = productResponse?.data?.Product || [];

      setProductInfo(productData);
      setOtherSector(categoryResponse?.data?.category || []);
      setFaq(faqResponse?.data || []);
      setIndustryData(industryResponse?.data?.product || []);
      setGovernmentScheme(governmentResponse?.data || []);

      // Set initial tab content
      setCurrentTabContent(productData);
    } catch (error) {
      console.log("Error loading static content:", error);
      // showToast("Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  }, [dispatch, productId, categoryId]);

  // Handle tab content - only Industrial Documentary has images/video
  const loadTabContent = useCallback(
    (tabName: TabType) => {
      if (tabName === "Industrial Documentary") {
        // Use already loaded product info with images/video
        setCurrentTabContent(productInfo);
      } else {
        // Other tabs don't need images/video - just empty content or basic info
        setCurrentTabContent([]);
      }
    },
    [productInfo]
  );

  // Handle tab change
  const handleTabChange = useCallback(
    (tabName: TabType) => {
      setActiveTab(tabName);
      loadTabContent(tabName);
    },
    [loadTabContent]
  );

  // Memoized tab configuration - only for available tabs
  const popularTabs = useMemo(
    () =>
      AVAILABLE_TABS.map((tab) => ({
        label: tab,
        onClick: () => handleTabChange(tab),
        isActive: activeTab === tab,
      })),
    [handleTabChange, activeTab]
  );

  // Initial load
  useEffect(() => {
    loadStaticContent();
  }, [loadStaticContent]);

  // Render tab content - all tabs available but only Industrial Documentary has images/video
 const renderTabContent = () => {
  const commonProps = {
    productInfo: currentTabContent,
    loading: loading
  };

    const governmentProps = {
      governmentData: governmentScheme, // Pass the actual government scheme data
      loading: loading,
    };

    switch (activeTab) {
      case "Industrial Documentary":
        return <IndustrialDocumentary {...commonProps} />;
      case "Expert Talk":
        return <ExpertTalk {...commonProps} />;
      case "Industrial Research":
        return <IndustrialResearch {...commonProps} />;
      case "Project Report":
        return <ProjectReport {...commonProps} />;
      case "Supplier / Expert Connect":
        return <SupplierExpertConnect {...commonProps} />;
      case "Government Scheme":
        return <GovernmentScheme {...governmentProps} />; // Use special props
      case "Service":
        return <Service {...commonProps} />;
      default:
        return <IndustrialDocumentary {...commonProps} />;
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      {productInfo?.map((item) => (
        <MemoizedPageBreadcrumb
          key={item?._id}
          pageTitle={item?.product_name}
        />
      ))}

      {/* Popular tags */}
      <div className="w-[90%] mx-auto mt-4">
        <div className="flex justify-between items-start">
          <div className="flex-2 space-y-3">
            <h6 className="font-semibold text-xl select-none">POPULAR TAG</h6>
            <CommonNavbar
              tabs={popularTabs}
              // activeTab={activeTab}
              containerClassName="px-0"
              listClassName="flex space-x-2"
              itemClassName="border-[1px] border-[#E4E7E9] hover:border-[#FA8232] px-2 py-1 hover:rounded-xl hover:text-[#FA8232] hover:bg-[#FFF3EB] cursor-pointer text-sm"
              // activeClassName="border-[#FA8232] rounded-xl text-[#FA8232] bg-[#FFF3EB]"
            />
          </div>
        </div>

        {/* Tab content with conditional layout */}
        {activeTab === "Industrial Documentary" ? (
          // Industrial Documentary - full width layout
          <div className="mt-4">{renderTabContent()}</div>
        ) : (
          // Other tabs - tab content takes 70% width like FAQ section, CustomerSupport on right
          <div className="flex justify-between mt-4 gap-5">
            <div className="w-full">{renderTabContent()}</div>
            <MemoizedCustomerSupport
              onSubscribe={handleSubscribe}
              onEnquiry={handleEnquiry}
            />
          </div>
        )}

        {/* Static content */}
        <StaticContent
          faq={faq}
          industryData={industryData}
          otherSector={otherSector}
          onSubscribe={handleSubscribe}
          onEnquiry={handleEnquiry}
          showCustomerSupport={activeTab === "Industrial Documentary"}
          selectedProductId={productId}
          selectedCategoryId={categoryId}
        />
      </div>
    </div>
  );
};

export default ProductsDetail;
export { StaticContent };
