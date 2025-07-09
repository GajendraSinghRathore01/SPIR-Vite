import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../common/Searchbar";
import PageBreadcrumb from "../common/PageBreadCrumb";
import CommonCard from "../common/CommonCard";
import { useAppDispatch } from "../redux/hooks";
import { getCategory } from "../redux/slice/getCategorySlice";
import { useDebounce } from "../common/Debounce";

const Category = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300); 
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();   

  const getCategoryList = async () => {
    setLoading(true)
    try {
      const response = await dispatch(getCategory()).unwrap();
      console.log("🔥 API response:", response?.data?.category);
      setData(response?.data?.category || []);
    } catch (error) {
      console.log("error in api", error);
    }finally {
      setLoading(false);
      // setTimeout(() => setLoading(false), 500);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

const handleCardClick = (item: any) => {
    navigate(`/products`, {state: {categoryId: item?._id}});
  };

  const filteredData = data.filter((item) => {
   return item?.category_name
      ?.toLowerCase() 
      .includes(debouncedSearch?.toLowerCase());
});

  return (
    <div className="pb-4">
      <PageBreadcrumb pageTitle="Industrial Solution" />
      <div className="w-[90%] mx-auto  p-2">
        <h2 className="text-xl font-bold mt-6 mb-4 ">
          Industrial Solutions Your Gateway to 1500+ Business Opportunities!
        </h2>
        <div className="flex gap-4">
          <div className="w-[80%]">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search category"
            />
            <div className=" mt-12 flex flex-wrap items-center gap-6  ">
              {loading && <div className=" flex justify-center w-full h-screen "><p className="text-2xl font-bold italic text-gray-400">Loading for the data...</p></div>}
              {filteredData.length > 0 ? (
                 filteredData.map((item: any) => (
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
                <div className="col-span-4 h-screen text-center text-gray-500">
                  {loading ? ("") : searchTerm ? "No products found matching your search." : "Network Error."}
                  
              </div>
              )}
             
            </div>
          </div>
          <div className="w-[20%] bg-[#FFF3EB] border-2 border-gray-200 p-4 h-full ">
            ADDS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;



