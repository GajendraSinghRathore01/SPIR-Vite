import React from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

//  console.log(BASE_URL, "this is base url for the image");
interface CommonCardProps {
  imageUrl?: string;
  title: string;
  description?: string;
  label?: string;
  styleCard?: string;
  onClick?: () => void;
}

const CommonCard: React.FC<CommonCardProps> = ({
  imageUrl,
  title,
  description,
  label,
  styleCard,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styleCard} p-4 w-72 min-h-96  flex flex-col items-center space-y-4 border  border-gray-300 rounded-lg hover:cursor-pointer shadow-xl`}
    >
      <div className="w-full h-40 flex items-center justify-center overflow-hidden ">
        <img src={`${BASE_URL}/${imageUrl}`} alt={title} className="w-full h-full rounded-lg object-cover" />
      </div>

      <h2 className="text-xl ">{title}</h2>
      <p className="text-md line-clamp-2 text-center">{description}</p>
      <button
        type="button"
        className="border-2 border-[#ffe7d6] text-[#fa8232] rounded-lg py-1 px-2  hover:cursor-pointer"
      >
        {label}
      </button>
    </div>
  );
};

export default CommonCard;
