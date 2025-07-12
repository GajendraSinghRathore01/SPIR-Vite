import React, { memo } from 'react';


interface SupplierExpertConnectProps {
  productInfo: any[];
  loading?: boolean;
}

const SupplierExpertConnect: React.FC<SupplierExpertConnectProps> = memo(({ productInfo, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-7 p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FA8232]"></div>
        <span className="ml-2 text-[#FA8232]">Loading Supplier / Expert Connect...</span>
      </div>
    );
  }

  return (
    <>
      {/* Vacant div for future cards - parallel to CustomerSupport */}
      <div className="flex mt-7 h-[660px]  rounded-lg border-2 border-dashed border-gray-300">
        <div className="w-full  bg-gray-50 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Supplier Connect Cards</h3>
            <p className="text-sm">Future supplier and expert connect content will appear here</p>
          </div>
        </div>
      </div>
    </>
  );
});

export default SupplierExpertConnect;