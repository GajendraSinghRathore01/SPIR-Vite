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
            <th className="px-4 py-2 text-lg font-semibold  border bg-primaryBlue text-white border-l-0 border-[lightGray] w-[65%]">
              Scheme Name
            </th>
            <th className="px-4 py-2 text-lg font-semibold  border bg-primaryBlue text-white border-[lightGray]">
              Highlights
            </th>
            <th className="px-4 py-2 text-lg font-semibold  border bg-primaryBlue text-white border-[lightGray]">
              Documents
            </th>
            <th className="px-4 py-2 text-lg font-semibold  border bg-primaryBlue text-white border-r-0  border-[lightGray]">
              Videos
            </th>
          </tr>
        </thead>

        <tbody>
          {tableData?.map((item) => (
            <tr key={item?._id}>
              <td className="px-4 py-2 border border-[lightGray]">
                {item?.scheme_name}
              </td>
              <td className="px-4 py-2 border border-[lightGray]">
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
              <td className="px-4 py-2 border border-[lightGray]">
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
              <td className="px-4 py-2 border border-[lightGray]">
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
