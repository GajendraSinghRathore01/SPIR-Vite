import { BASE_URL } from "../../services/apiConnector";

interface SchemeCard {
  title: string;
  imageUrl?: string;
  styleCard?: string;
  onClick?: () => void;
}
const SchemesCard: React.FC<SchemeCard> = ({ title, imageUrl, styleCard, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: styleCard }}
      className={` flex flex-col items-center space-y-4 w-72 rounded-xl cursor-pointer border-2 border-white border-dashed  p-6  hover:-translate-y-2 duration-300`}
    >
      <div className="   p-6  flex items-center justify-center overflow-hidden">
        <img
          src={`${BASE_URL}/${imageUrl}`}
          alt={title}
          className="object-contain h-full "
        />
      </div>
      <div>
        <h1 className="text-xl text-center text-white ">{title}</h1>
      </div>
    </div>
  );
};

export default SchemesCard;
