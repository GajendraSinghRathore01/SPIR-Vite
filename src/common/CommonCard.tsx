import React from "react";
 const BASE_URL = import.meta.env.VITE_BASE_URL;

 console.log(BASE_URL, "this is base url for the image");
interface CommonCardProps {
  imageUrl: string;
  title: string;
  description: string;
  onClick: () => void;
}

const CommonCard: React.FC<CommonCardProps> = ({
  imageUrl,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="p-2 w-72 flex flex-col items-center space-y-4 border border-gray-100 rounded-lg hover:cursor-pointer shadow-xl"
    >
      <div className="w-full p-2 h-40 border-2 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={`${BASE_URL}/${imageUrl}`} alt={title} className="object-contain h-full" />
      </div>
      <h2 className="text-xl">{title}</h2>
      <p className="text-md text-center">{description}</p>
      <button
        type="button"
        className="border-2 border-[#ffe7d6] text-[#fa8232] rounded-lg p-2 w-32"
      >
        READ MORE
      </button>
    </div>
  );
};

export default CommonCard;
