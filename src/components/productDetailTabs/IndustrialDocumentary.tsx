import React, { memo } from 'react';
import { CustomerSupport } from '../product';

interface IndustrialDocumentaryProps {
  productInfo: any[];
  loading: boolean;
}

const IndustrialDocumentary: React.FC<IndustrialDocumentaryProps> = memo(({ productInfo, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-7 p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FA8232]"></div>
        <span className="ml-2 text-[#FA8232]">Loading Industrial Documentary...</span>
      </div>
    );
  }

  return (
    <>
      {productInfo?.map((item, index) => (
        console.log("item", item),
        <div className="flex gap-5 mt-7" key={`industrial-documentary-${index}`}>
          <div className="w-[75%] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="570"
              src={item?.product_video || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
              title="Industrial Documentary video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-[25%] flex flex-col gap-5">
            <div className="bg-[#D49A28] h-44 rounded-lg p-2 flex items-center justify-center text-white font-semibold">
              {item?.product_image1 || "Industrial Documentary Image 1"}
            </div>
            <div className="bg-[#D49A28] h-44 rounded-lg p-2 flex items-center justify-center text-white font-semibold">
              {item?.product_image2 || "Industrial Documentary Image 2"}
            </div>
            <div className="bg-[#D49A28] h-44 rounded-lg p-2 flex items-center justify-center text-white font-semibold">
              {item?.product_image3 || "Industrial Documentary Image 3"}
            </div>
          </div>
        </div>
      ))}
      
      {/* Industry description section */}
      <div className="flex justify-between gap-5 mt-7">
        <div className="w-[70%] space-y-16">
          {productInfo.map((item) => (
            <div className="space-y-5" key={item?._id}>
              <h3 className="font-bold text-3xl">{item?.product_name}</h3>
              <p className="text-lg text-justify ">{item?.product_description}</p>
            </div>
          ))}
          
        </div>
        {/* <CustomerSupport/> */}
      </div>
    </>
  );
});

export default IndustrialDocumentary;