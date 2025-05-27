import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import SearchBar from "../common/Searchbar";
import PageBreadcrumb from "../common/PageBreadCrumb";
import CommonCard from "../common/CommonCard";
import { useAppDispatch } from "../redux/hooks";
import { getCategory } from "../redux/slice/getCategorySlice";

const Category = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getCategoryList = async () => {
    try {
      const response = await dispatch(getCategory()).unwrap();
      console.log("🔥 API response:", response);
      setData(response?.data?.category || []);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleCardClick = () => {
    navigate("/products");
  };

  const filteredData = data.filter((item) => {
    return item?.category_name
      ?.toLowerCase()
      .includes(searchTerm?.toLowerCase());
  });

  return (
    <div>
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
              {filteredData.map((item: any, index: any) => (
                <CommonCard
                  key={index}
                  imageUrl={item.category_logo}
                  title={item.category_name}
                  description={item.category_description}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
          <div className="w-[20%] border-2 border-gray-200 rounded-2xl p-4 ">
            ADDS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
