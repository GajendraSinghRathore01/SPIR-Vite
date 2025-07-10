import { pdf, video } from "../../assets";
import { BASE_URL } from "../../services/apiConnector";
type Scheme = {
  _id: string;
  scheme_name: string;
  scheme_highlights?: string[];
  scheme_documents?: string[];
  scheme_video?: string[];
};

interface SchemeTableProps {
  tableData: Scheme[];
}

const SchemeTable: React.FC<SchemeTableProps> = ({ tableData }) => {
  const makeUrl = (path: string) =>
    path?.startsWith("http") ? path : `${BASE_URL}/${path}`;

  return (
    <div className="w-full">
      <table className="w-full ">
        <thead>
          <tr>
            <th className="px-4 py-2 text-lg font-semibold bg-blue-500 text-white border border-l-0 border-gray-300 w-[65%]">
              Scheme Name
            </th>
            <th className="px-4 py-2 text-lg font-semibold bg-blue-500 text-white border border-gray-300">
              Highlights
            </th>
            <th className="px-4 py-2 text-lg font-semibold bg-blue-500 text-white border border-gray-300">
              Documents
            </th>
            <th className="px-4 py-2 text-lg font-semibold bg-blue-500 text-white border border-r-0 border-gray-300">
              Videos
            </th>
          </tr>
        </thead>

        <tbody>
          {tableData?.map((item) => (
            <tr key={item?._id}>
              <td className="px-4 py-2 border border-gray-300">
                {item?.scheme_name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {item?.scheme_highlights?.length ? (
                  <div className="flex justify-evenly gap-2">
                    {item?.scheme_highlights?.map(
                      (item, index) => (
                        <a
                          key={index}
                          href={makeUrl(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <img
                            src={pdf}
                            alt="highlight_icon"
                            className="w-5"
                          />
                        </a>
                      )
                    )}
                  </div>
                ) : (
                  "--"
                )}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {item?.scheme_documents?.length ? (
                  <div className="flex justify-evenly">
                    {item?.scheme_documents?.map((item, index) => (
                      <a
                        key={index}
                        href={makeUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <img src={pdf} alt="document_icon" className="w-5" />
                      </a>
                    ))}
                  </div>
                ) : (
                  "--"
                )}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {item?.scheme_video?.length ? (
                  <div className="flex justify-evenly">
                    {item?.scheme_video?.map((item, index) => (
                      <a
                        key={index}
                        href={item}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={video} alt="video_icon" className="w-5" />
                      </a>
                    ))}
                  </div>
                ) : (
                  "--"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchemeTable;
