const BASE_URL = import.meta.env.VITE_BASE_URL;

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
      className={` flex flex-col items-center space-y-4 w-72 border-2 border-white rounded-xl cursor-pointer shadow-xl p-6 `}
    >
      <div className="w-full  flex items-center justify-center overflow-hidden">
        <img
          src={`${BASE_URL}/${imageUrl}`}
          alt={title}
          className="object-contain h-full"
        />
      </div>
      <div>
        <h1 className="text-xl text-center text-white ">{title}</h1>
      </div>
    </div>
  );
};

export default SchemesCard;
