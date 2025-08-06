import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import SearchBar from "../../../common/Searchbar";
import PageBreadcrumb from "../../../common/PageBreadCrumb";
import CommonCard from "../../../common/CommonCard";
import { useAppDispatch } from "../../../redux/hooks";
import { getProduct } from "../../../redux/slice/getProductSlice";
import { getCategory } from "../../../redux/slice/getCategorySlice";
import { useDebounce } from "../../../common/Debounce";
import LoadingContent from "../../../common/LoadingContent";
// import { useToast } from "../common/ToastNotification";

const Products = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location = useLocation();
  // const {showToast} = useToast();
  const { categoryId = "" } = location?.state ?? {};

  const getProductList = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getProduct(categoryId)).unwrap();
      setProductList(response?.data?.product || []);
    } catch (error) {
      console.log("error in api", error);
    } finally {
      setLoading(false);
    }
  };
  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getCategory()).unwrap();
      setCategoryList(response?.data?.category);
    } catch (error) {
      console.log("error in get api", error);
      // showToast("Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categoryId) {
      getProductList();
    } else {
      console.log("No category ID provided");
    }
  }, [categoryId]);

  const handleCardClick = (item: any) => {
    navigate(`/industryDocumentary`, {
      state: { productId: item?._id, categoryId: item?.category?._id },
    });
  };

  const filteredData = productList?.filter((item) => {
    return item?.product_name
      .toLowerCase()
      .includes(debouncedSearch?.toLowerCase());
  });
  return (
    <div className="pb-4 bg-gray-20">
      <PageBreadcrumb pageTitle="food supplies" />
      <div className="w-[90%] mx-auto mt-8 p-2 select-none">
        {loading ? (
          <LoadingContent />
        ) : (
          <div className="flex gap-6 ">
            <div className="w-[15%] h-96 bg-white  p-4 border-2 border-gray-200 rounded-lg mt-11">
              <h2 className="text-xl mb-4">CATEGORY</h2>
              <div className="space-y-2">
                {categoryList?.map((item) => {
                  const isActive = item?._id === categoryId;
                  return (
                    <div
                      key={item?._id}
                      className={`flex items-center space-x-2 ${
                        isActive
                          ? "text-[#fa8232] text-sm "
                          : "text-gray-500 text-sm"
                      }`}
                      onClick={() =>
                        navigate("/products", {
                          state: { categoryId: item?._id },
                        })
                      }
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={isActive}
                        readOnly
                        className="accent-[#f86541] hover:cursor-pointer"
                      />
                      <p className="cursor-pointer capitalize overflow-hidden">
                        {item?.category_name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-[85%]">
              <h2 className="text-xl font-bold mb-4 ">
                Industrial Solutions Your Gateway to 1500+ Business
                Opportunities!
              </h2>
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search Product"
              />
              <div className="mt-12 flex flex-wrap  items-center gap-6">
                {filteredData?.length > 0 ? (
                  filteredData?.map(
                    (item) => (
                      // console.log("my data", item),
                      (
                        <CommonCard
                          key={item?._id}
                          imageUrl={item?.product_logo}
                          title={item?.product_name}
                          description={item?.product_description}
                          label="READ MORE"
                          onClick={() => handleCardClick(item)}
                        />
                      )
                    )
                  )
                ) : (
                  <div className="col-span-4 text-center text-gray">
                    {loading
                      ? ""
                      : searchTerm
                      ? "No products found matching your search."
                      : "No products available."}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
