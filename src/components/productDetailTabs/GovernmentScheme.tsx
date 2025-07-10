import React, { memo } from 'react';
import CommonCard from '../../common/CommonCard';

interface GovernmentSchemeProps {
  governmentData: any[]; // Changed from productInfo to governmentData
  loading: boolean;
}

const GovernmentScheme: React.FC<GovernmentSchemeProps> = memo(({ governmentData, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-7 p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FA8232]"></div>
        <span className="ml-2 text-[#FA8232]">Loading Government Scheme...</span>
      </div>
    );
  }

  // Handle empty data
  if (!governmentData || governmentData.length === 0) {
    return (
      <div className="flex gap-5">
        <div className="w-full min-h-[580px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center  text-gray-500">
            <p className="text-lg font-semibold">No Government Schemes Available</p>
            <p className="text-sm mt-2">Government schemes data is not available for this product.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-5">
        <div className="w-full min-h-[580px] ">
          {/* Map through government scheme data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 border-dashed rounded-lg  bg-gray-50 border-gray-300 p-5 ">
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
    </>
  );
});

export default GovernmentScheme;