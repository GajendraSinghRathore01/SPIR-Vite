import { useNavigate } from "react-router-dom";
import Category from "../../pages/IndustrialSloution";

type Category = {
  _id: string;
  category_name: string;
};

type Props = {
  data: Category[];
  selectedCategoryId: string;
};

const OtherSector = ({ data, selectedCategoryId }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="my-16 p-5 select-none">
      <div className="mx-auto w-[90%] flex flex-col justify-center items-center">
        <h3 className="font-semibold text-xl">Other Sectors</h3>
        <div className="w-full mt-5">
          <ul className="list-disc w-full grid grid-cols-3 gap-y-4 gap-x-6">
            {data?.map((category) => {
              if (category?._id !== selectedCategoryId) {
                return (
                  <li key={category?._id}>
                    <p
                      className="hover:text-[#f46442] inline-block cursor-pointer "
                      onClick={() =>
                        navigate("/products", {
                          state: { categoryId: category?._id },
                        })
                      }
                    >
                      {category?.category_name?.toUpperCase()}
                    </p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherSector;
