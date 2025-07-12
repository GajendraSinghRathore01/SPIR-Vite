import React  from "react";
import LoadingContent from "./../../common/LoadingContent";

interface IndustrialDocumentaryProps {
  productInfo: any[];
  loading?: boolean;
}

const IndustrialDocumentary: React.FC<IndustrialDocumentaryProps> = (
  ({ productInfo, loading }) => {
    return (
      <>
        {loading ? (
          <LoadingContent />
        ) : (
          <div className="mt-7 min-h-[660px]">
            {productInfo?.map(
              (item, index) => (
                console.log("item", item),
                (
                  <div key={`industrial-documentary-${index}`}>
                    <div className=" rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="660"
                        src={
                          item?.product_video ||
                          "https://www.youtube.com/embed/dQw4w9WgXcQ"
                        }
                        title="Industrial Documentary video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )
              )
            )}

            {/* Industry description section */}
            <div className="flex justify-between gap-5 mt-7">
              <div>
                {productInfo.map((item) => (
                  <div className="space-y-5" key={item?._id}>
                    <h3 className="font-bold text-3xl">{item?.product_name}</h3>
                    <p className="text-lg text-justify ">
                      {item?.product_description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default IndustrialDocumentary;
