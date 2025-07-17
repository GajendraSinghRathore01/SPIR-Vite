import React from 'react';
import LoadingContent from '../../common/LoadingContent';

interface ServiceProps {
  productInfo: any[];
  loading?: boolean;
}

const Service: React.FC<ServiceProps> = (({ productInfo, loading }) => {

  return (
    <>
    {loading ? <LoadingContent/> : (
   <div className="flex mt-7 h-[660px] rounded-lg border-2 border-dashed border-lightGray">
        <div className="w-full  bg-lightGray  flex items-center justify-center">
          <div className="text-center text-[gray]">
            <div className="text-6xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Service Cards</h3>
            <p className="text-sm">Future service content will appear here</p>
          </div>
        </div>
      </div>
    )}
     
    </>
  );
});

export default Service;