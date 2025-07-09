import { useNavigate } from "react-router";

// interface productDetail {
//   _id:string
//  product_name: string;
//     product_description: string;
// }
interface RelatedIndustriesCardProps {
  product:{
     _id:string
 product_name: string | undefined;
    product_description: string | undefined;
    category : {
      _id:string;
    }
  },  
}

const RelatedIndustriesCard: React.FC<RelatedIndustriesCardProps> = ({product}) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center border-[1px] border-[#E4E7E9] cursor-pointer rounded-md p-3" onClick={() =>navigate("/industrydocumentry", {state: {productId: product?._id, categoryId: product?.category?._id} } )}>
      <div className="space-y-2">
        <h3 className="font-semibold text-xl">{product?.product_name ?? "-"}</h3>
        <p className="line-clamp-2 text-sm  text-justify">
          {product?.product_description ?? "-"}
        </p>
      </div>
      <div className="flex items-center gap-6 text-lg ml-6">
        <button className="border-[#5089FF] border-[1px] rounded-full py-1 px-8 text-sm text-[#5089FF] cursor-pointer" onClick={() => console.log("Subscribe successfully")}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default RelatedIndustriesCard
