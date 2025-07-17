import React from "react";
import LoadingContent from "../../common/LoadingContent";

interface ExpertTalkProps {
  productInfo: any[];
  loading?: boolean;
}

const ExpertTalk: React.FC<ExpertTalkProps> = ({ productInfo, loading }) => {
  return (
    <>
      {loading ? (
        <LoadingContent />
      ) : (
        <div className="flex h-[660px] mt-7 w-full  rounded-lg border-2 border-dashed border-lightGray ">
          <div className="w-full  bg-lightGray flex items-center justify-center">
            <div className="text-center text-[gray]">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Expert Talk Cards</h3>
              <p className="text-sm">
                Future expert talk content will appear here
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpertTalk;
