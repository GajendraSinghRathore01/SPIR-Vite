import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import SearchBar from "../common/Searchbar";
import Category from "./Category";
import PageBreadcrumb from "../common/PageBreadCrumb";
import CommonCard from "../common/CommonCard";

const Products = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getProductList = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.13:5000/api/v1/product/?page=1&limit=10&category_id=682d9debc1ac203470ab58b2"
      );
      console.log(response?.data?.data?.product);
      setData(response?.data?.data?.product);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
  const handleCardClick = (item: any) => {
    navigate("/productdetail", { state: { product: item } });
  };

  const filteredData = data.filter((item) =>
    (item?.category?.category_name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageBreadcrumb pageTitle="food supplies" />
      <div className="w-[90%] mx-auto mt-20 p-2 ">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search Product"
        />
        <div className=" mt-12 grid grid-cols-4 gap-6 ">
          {filteredData.map((item: any, index: any) => (
            <CommonCard
              key={index}
              imageUrl={item?.category?.category_logo}
              title={item?.category?._id}
              description={item?.category?.category_name}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
