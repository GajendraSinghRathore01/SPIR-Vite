import React from "react";
import { BASE_URL } from "../services/apiConnector";
import CommonButton from "./CommonButton";

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
      className={`${styleCard} p-4 w-64 min-h-96 flex flex-col items-center space-y-4 bg-white border  border-[lightGray] rounded-lg cursor-pointer shadow-xl hover:-translate-y-2 duration-300`}
    >
      <div className="w-full h-40  flex items-center justify-center overflow-hidden">
        <img
          src={`${BASE_URL}/${imageUrl}`}
          alt={title}
          className="w-full h-full rounded-lg object-cover "
        />
      </div>
      {/* <div className="flex flex-col space-y-4"> */}
      <h2 className="text-lg font-semibold capitalize">{title}</h2>
      <p className="text-md   line-clamp-2 ">{description}</p>
      <CommonButton
        label={label}
        type="button"
        styleButton="border-2 border-cardBtnBorder text-cardBtn rounded-lg py-1 px-2  hover:cursor-pointer"
      />
      {/* </div> */}
    </div>
  );
};

export default CommonCard;
