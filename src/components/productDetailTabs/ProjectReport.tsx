import React from 'react';
import LoadingContent from '../../common/LoadingContent';

interface ProjectReportProps {
  productInfo: any[];
  loading?: boolean;
}

const ProjectReport: React.FC<ProjectReportProps> = (({ productInfo, loading }) => {

  return (
    <>
      {loading ? <LoadingContent/> : (
            <div className=" flex mt-7 h-[660px] rounded-lg border-2 border-dashed border-gray-300">
        <div className="w-full  bg-gray-50  flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Project Report Cards</h3>
            <p className="text-sm">Future project report content will appear here</p>
          </div>
        </div>
      </div>
      )}
   
    </>
  );
});

export default ProjectReport;