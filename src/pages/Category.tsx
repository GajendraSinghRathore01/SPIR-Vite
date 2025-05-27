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
     setData(response?.data?.data?.category || []);

    } catch (error) {
      console.log("error in api", error);
    }
  };
  
  useEffect(() => {
    getCategoryList();
  }, []);

  const handleCardClick = () => {
    navigate("/products" );
  };

    const filteredData = data.filter((item) =>
    item.category_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageBreadcrumb pageTitle="Industrial Solution" />
      <div className="w-[90%] mx-auto  p-2">
        <h2 className="text-xl font-bold mt-6 mb-4 " >Industrial Solutions Your Gateway to 1500+ Business Opportunities!</h2>
     <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search category"
        />

        <div className=" mt-12 grid grid-cols-4 gap-6  ">
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
    </div>
  );
};

export default Category;
