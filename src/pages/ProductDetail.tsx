import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className="p-6 grid grid-cols-4">
      {product ? (
        <div className="bg-gray-200 p-4 rounded-3xl">
          <div className="w-40 p-2 h-40 border-2"> <img src={product?.category_logo} /> </div>
           <p className="mt-2 text-xl">Product ID: {product?._id}</p>
           <p className="mt-2 text-xl">Product Name: {product?.product_name}</p>
          <p className="mt-2 text-xl">Product Description: {product?.product_description}</p>
        </div>
      ) : (
        <p>No category selected.</p>
      )}
    </div>
  );
};

export default ProductDetail;
