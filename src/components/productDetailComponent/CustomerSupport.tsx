import type { FC } from "react";
import {customer_support} from "../../assets"; // adjust path as needed
import CommonButton from "../../common/CommonButton";
          
type CustomerSupportProps = {
  onSubscribe?: () => void;
  onEnquiry?: () => void;
};

const CustomerSupport: FC<CustomerSupportProps> = ({ onSubscribe, onEnquiry }) => {
  return (

    <div className="space-y-5 ">
      {/* Subscribe and Enquiry Section */}
      <div className="space-y-5 border-[1px] border-[#E4E7E9] p-5 rounded-lg">
        <CommonButton label="Subscribe Now" styleButton="text-xl cursor-pointer bg-[#FA8232] text-white rounded-lg py-2 w-full" onClick={onSubscribe}/>
        <CommonButton label="Enquiry Now" styleButton="text-xl cursor-pointer border-2 font-semibold rounded-lg py-2 w-full" onClick={onEnquiry}/>
      </div>

      {/* Customer Support Section */}
      <div className="border-[1px] border-[#E4E7E9] p-5 rounded-lg flex flex-col justify-center items-center gap-6">
        <h4 className="font-bold text-3xl">Customer Support</h4>
        <p className="text-xl text-center">
          We are available 24X7 for grievance redressal
        </p>
        <img src={customer_support} alt="Customer Support" className="mt-5" />
      </div>
    </div>
  
  );
};

export default CustomerSupport;
