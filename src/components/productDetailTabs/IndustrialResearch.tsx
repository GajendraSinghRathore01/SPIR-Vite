
import LoadingContent from "../../common/LoadingContent";

interface IndustrialResearchProps {
  productInfo: any[];
  loading?: boolean;
}

const IndustrialResearch: React.FC<IndustrialResearchProps> = (
  ({ productInfo, loading }) => {
    return (
      <>
        {loading ? (
          <LoadingContent />
        ) : (
          <div className=" flex mt-7 h-[660px] rounded-lg border-2 border-dashed border-lightGray ">
            <div className="w-full  bg-lightGray  flex items-center justify-center">
              <div className="text-center text-[gray]">
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-2">
                  Industrial Research Cards
                </h3>
                <p className="text-sm">
                  Future research content will appear here
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default IndustrialResearch;
