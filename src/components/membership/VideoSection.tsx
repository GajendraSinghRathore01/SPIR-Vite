import { check } from "../../assets";
import CommonButton from "../../common/CommonButton";

const VideoSection = () => {
  return (
    <div className="flex gap-5 ">
      <div className="w-[50%]  aspect-video flex items-center">
        <iframe
          width="950"
          height="415"
          src="https://www.youtube.com/embed/OHz0xIR8uwI?si=mTQXEVZr9bV92Y1n"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="w-[50%] flex flex-col p-4">
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl">--- DETAILED PROJECT REPORT</h1>
          <p className="text-3xl ">
            A Detailed Project Report Is A Complete Document Which Provides
            Details On...
          </p>
        </div>
        <div className="flex justify-between items-center p-5 ">
          <div className="flex flex-col space-y-4">
            <div className=" flex space-x-2">
              <img src={check} className="w-4" />
              <p>FOOD PROCESSING</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>HORTICULTURE-ORGANIC FARMING</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>CEMENT & ALLIED PRODUCTS</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>DAIRY & MILK PRODUCTS</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>PAPER & ALLIED PRODUCTS</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>PLASTIC & ALLIED PRODUCTS</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>ANIMAL HUSBANDRY</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>SMALL BUSINESS MODELS</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>COLD STORAGE SOLUTION</p>
            </div>
            <div className="flex space-x-2">
              <img src={check} className="w-4" />
              <p>AGRI FOOD PROCESSING</p>
            </div>
            <CommonButton
              label="VIEW MORE"
              styleButton="px-2 py-1 w-28 border"
              styleLabel="text-md font-bold"
            />
          </div>
          <CommonButton
            label="All Project Report"
            styleLabel="text-md font-bold text-center"
            styleButton="w-42 border p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
