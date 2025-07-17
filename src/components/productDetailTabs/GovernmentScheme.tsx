import React from "react";
import CommonCard from "../../common/CommonCard";
import LoadingContent from "../../common/LoadingContent";

interface GovernmentSchemeProps {
  governmentData?: any[]; // Changed from productInfo to governmentData
  loading?: boolean;
}

const GovernmentScheme: React.FC<GovernmentSchemeProps> = ({
  governmentData,
  loading,
}) => {

  return (
    <>
      {loading ? (
        <LoadingContent />
      ) : !governmentData || governmentData.length === 0 ? (
        <div className="flex gap-5 mt-7 border-2 border-lightGray border-dashed rounded-lg">
        <div className="w-full h-[690px] bg-lightGray flex items-center justify-center">
          <div className="text-center  text-[gray]">
            <div className="text-6xl mb-4">🏛</div>
            <p className="text-lg font-semibold">Government Schemes Cards</p>
            <p className="text-sm mt-2">
              Future government scheme content will appear here
            </p>
          </div>
        </div>
      </div>
      ) : (
        <div className="border-2 border-dashed border-[gray]-300 mt-7 h-[660px] ">
          <div className="w-full">
            {/* Map through government scheme data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  rounded-lg  bg-[gray]-50  p-5 ">
              {governmentData?.map((item) => (
                <CommonCard
                  key={item?._id}
                  imageUrl={item?.scheme_logo}
                  title={item?.scheme_name}
                  label="SUBSCRIBE TO VIEW"
                  // You can add more props if CommonCard supports them
                  // url={scheme.url || scheme.link}
                  // onClick={() => handleSchemeClick(scheme)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GovernmentScheme;
