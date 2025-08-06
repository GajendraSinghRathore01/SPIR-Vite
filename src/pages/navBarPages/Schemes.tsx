import { useEffect, useState } from "react";
import PageBreadcrumb from "../../common/PageBreadCrumb";
import { SchemesCard, SchemeTable } from "../../components/schemes";
import { useAppDispatch } from "../../redux/hooks";
import { getSchemes } from "../../redux/slice/getSchemeSlice";
import { networkError } from "../../assets";
import { useToast } from "../../common/ToastNotification";
import LoadingContent from "../../common/LoadingContent";

interface SubScheme {
  _id: string;
  scheme_name: string;
  scheme_highlights?: string[];
  scheme_documents?: string[];
  scheme_video?: string[];
}
interface Scheme {
  _id: string;
  name: string;
  thumbnail: string;
  background_color: string;
  description: string;
  schemes: SubScheme[];
}
const Schemes = () => {
  const { showToast } = useToast();
  const [schemeData, setSchemeData] = useState<Scheme[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const dispatch = useAppDispatch();

  const getSchemeData = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getSchemes()).unwrap();
      setSchemeData(response?.data);
    } catch (error) {
      console.log("error in scheme api", error);
      showToast(error, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSchemeData();
  }, []);

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="pb-8">
      <PageBreadcrumb pageTitle="Schemes" />  

      <div className="w-[90%] mx-auto pt-12 space-y-24">
        {loading ? (
          <LoadingContent />
        ) : schemeData ? (
          <>
            <div className="flex justify-evenly flex-wrap gap-8 ">
              {schemeData?.map((item) => (
                <SchemesCard
                  key={item?._id}
                  title={item?.name}
                  imageUrl={item?.thumbnail}
                  styleCard={item?.background_color}
                  onClick={() => handleClick(item?._id)}
                />
              ))}
            </div>

            {schemeData?.map((item) => (
              <div
                key={item?._id}
                id={item?._id}
                className={`flex flex-col items-center space-y-2 p-5 rounded-xl `}
              >
                <h2 className="text-3xl font-bold text-center">{item?.name}</h2>
                <div className="flex  w-[60%]">
                  <span className={`text-justify w-[90%]`}>
                    {open[item?._id] ? (
                      <span>
                        {item?.description}
                        <span
                          className="text-xs text-primaryBlue cursor-pointer ml-2"
                          onClick={() => toggle(item?._id)}
                        >
                          show less
                        </span>
                      </span>
                    ) : (
                      <span
                        className="line-clamp-1"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item?.description}
                      </span>
                    )}
                  </span>

                  {!open[item?._id] && (
                    <span
                      className="text-xs text-primaryBlue pt-2 cursor-pointer w-16"
                      onClick={() => toggle(item?._id)}
                    >
                      Read more
                    </span>
                  )}
                </div>

                {item?.schemes?.length > 0 && (
                  <SchemeTable tableData={item?.schemes} />
                )}
              </div>
            ))}
          </>
        ) : (
          <div className="flex justify-center items-center">
            <img className="rounded-2xl h-96" src={networkError} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Schemes;
