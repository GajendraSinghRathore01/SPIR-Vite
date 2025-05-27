
interface RelatedIndustriesCardProps {
    title: string;
    description: string;
}

const RelatedIndustriesCard: React.FC<RelatedIndustriesCardProps> = ({title, description}) => {
  return (
    <div className="flex justify-between items-center border-[1px] border-[#E4E7E9] rounded-md p-3">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p>
          {description}
        </p>
      </div>
      <div className="flex items-center gap-6 text-lg">
        <p>View</p>
        <button className="border-[#5089FF] border-[1px] rounded-full py-1 px-8 text-[#5089FF] cursor-pointer">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default RelatedIndustriesCard
