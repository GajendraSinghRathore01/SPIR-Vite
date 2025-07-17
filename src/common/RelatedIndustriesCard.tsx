import { useNavigate } from "react-router";
import CommonButton from "./CommonButton";

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
    <div className="flex justify-between items-center border-[1px] border-[lightGray] cursor-pointer rounded-md p-3" onClick={() =>navigate("/industryDocumentary", {state: {productId: product?._id, categoryId: product?.category?._id} } )}>
      <div className="space-y-2 w-full">
        <h3 className="font-semibold text-xl">{product?.product_name ?? "-"}</h3>
        <p className="line-clamp-1 text-sm text-justify w-[90%]  ">
          {product?.product_description ?? "-"}
        </p>
      </div>
      <div className="flex items-center gap-6 text-lg ml-6">
        <CommonButton label="Subscribe Now" styleButton="border-[#5089FF] w-42 border-[1px] rounded-full py-2 px-2 text-md   text-[#5089FF] cursor-pointer" 
         onClick={() => console.log("Subscribe Successfully")}  />
      </div>
    </div>
  );
}

export default RelatedIndustriesCard
