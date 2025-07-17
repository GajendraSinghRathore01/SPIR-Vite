import { check } from "../../assets";
import CommonButton from "../../common/CommonButton";

const MembershipCard = () => {
  return (
    <>
      <div className="flex  flex-col border border-[lightGray]  space-y-4 p-4 bg-white">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-1">
            <h2 className="text-xl text-primaryBlue font-bold">EXECUTIVE</h2>
            <p className="text-md ">Valid for 365 days</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-baseline">
              <span>₹</span>
              <p className="text-3xl font-bold">5900 </p>
              <span className="text-[gray] text-sm">/GST inclusive</span>
            </div>
            <CommonButton
              label="BUY NOW"
              styleLabel="text-white text-md font-bold text-center"
              styleButton=" bg-primaryBlue px-2 py-3"
            />
          </div>
        </div>
        <hr className="text-[lightGray]"></hr>
        <div className="flex space-x-2 items-center">
          <img src={check} className="w-4" />
          <p className="text-sm ">
            Online Access To any 5 Industry in a Sector
          </p>
        </div>
      </div>
    </>
  );
};

export default MembershipCard;
