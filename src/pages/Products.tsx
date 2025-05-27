import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../common/Searchbar";
import PageBreadcrumb from "../common/PageBreadCrumb";
import CommonCard from "../common/CommonCard";
import { useAppDispatch } from "../redux/hooks";
import { getProduct } from "../redux/slice/geetProductSlice";

const Products = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getProductList = async () => {
    try {
      const response = await dispatch(getProduct()).unwrap();
      setData(response?.data?.product);
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

  const filteredData = Array.isArray(data)
    ? data.filter((item) =>
        (item?.category?.category_name || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <PageBreadcrumb pageTitle="food supplies" />
      <div className="w-[90%] mx-auto mt-20 p-2 ">
        <div className="flex gap-6">
        <div className="w-[80%]">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search Product"
          />
          <div className="mt-12 flex flex-wrap  items-center gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((item: any, index: any) => (
                <CommonCard
                  key={item?._id || index} // Use item ID if available, fallback to index
                  imageUrl={item?.category?.category_logo}
                  title={item?.category?._id}
                  description={item?.category?.category_name}
                  onClick={() => handleCardClick(item)}
                />
              ))
            ) : (
              <div className="col-span-4 text-center text-gray-500">
                {searchTerm
                  ? "No products found matching your search."
                  : "No products available."}
              </div>
            )}
          </div>
        </div>
        <div className="w-[20%] p-4 border-2 border-gray-200 rounded-2xl">ADDS</div>
      </div>
      </div>
    </div>
  );
};

export default Products;
