import { useNavigate } from "react-router";
import RelatedIndustriesCard from "../../common/RelatedIndustriesCard";

type Industry = {  
  _id: string;
  product_name: string | undefined;
  product_description: string | undefined;
  category: {
    _id: string;
    category_name?: string;
  };  
};


type Props = {
  data: Industry[];
  selectedProductId: string;
  selectedCategoryId: string;
};

const RelatedIndustries = ({
  data,
  selectedProductId,
  selectedCategoryId,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-3xl">Related Industries</h3>

      {data.length === 0 ? (
        <p className="text-center py-8 text-gray-500">
          No related industries found
        </p>
      ) : (
        <div className="space-y-3">
          {data.map((product, index) => {
            if (product?._id !== selectedProductId && index <= 5 ) {
              return (
                <RelatedIndustriesCard
                  key={product?._id}
                  product={product}
                 
                />
              );        
            }
          })}             

          <button
            className="border-[1px] cursor-pointer hover:bg-[#FFF3EB] border-[#FA8232] text-[#FA8232] py-2 px-4"
            onClick={() =>
              navigate("/products", {
                state: { categoryId: selectedCategoryId },
              })
            }
          >
            VIEW MORE INDUSTRIES
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedIndustries;
