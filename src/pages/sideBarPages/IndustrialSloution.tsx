import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../../common/Searchbar";
import PageBreadcrumb from "../../common/PageBreadCrumb";
import CommonCard from "../../common/CommonCard";
import { useAppDispatch } from "../../redux/hooks";
import { getCategory } from "../../redux/slice/getCategorySlice";
import { useDebounce } from "../../common/Debounce";
import LoadingContent from "../../common/LoadingContent";
// import { useToast } from "../common/ToastNotification";

const IndustrialSolution = () => {
  // const { showToast } = useToast();
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getCategoryList = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getCategory()).unwrap();
      console.log("🔥 API response:", response);
      setData(response?.data?.category || []);
    } catch (error) {
      console.log("error in api", error);
      // showToast("something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleCardClick = (item: any) => {
    navigate(`/products`, { state: { categoryId: item?._id } });
  };

  const filteredData = data?.filter((item) => {
    return item?.category_name
      ?.toLowerCase()
      ?.includes(debouncedSearch?.toLowerCase());
  });

  return (
    <div className="pb-4">
      <PageBreadcrumb pageTitle="Industrial Solution" />
      <div className="w-[90%] mx-auto  p-2">
        <h2 className="text-xl font-bold mt-6 mb-4 ">
          Industrial Solutions Your Gateway to 1500+ Business Opportunities!
        </h2>

        <div >
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search category"
          />
          <div className=" mt-12 flex flex-wrap items-center gap-6 ">
            {loading ? (
              <LoadingContent />
            ) : filteredData?.length > 0 ? (
              filteredData?.map((item: any) => (
                <CommonCard
                  key={item?._id}
                  imageUrl={item?.category_logo}
                  title={item?.category_name}
                  description={item?.category_description}
                  label="READ MORE"
                  onClick={() => handleCardClick(item)}
                />
              ))
            ) : (
              <div className="col-span-4 h-screen text-center text-[gray]">
                {loading
                  ? ""
                  : searchTerm
                  ? "No products found matching your search."
                  : "Something went wrong."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSolution;
