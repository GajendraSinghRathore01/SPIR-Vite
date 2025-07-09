import type { FC } from "react";
import {customer_support} from "../../assets"; // adjust path as needed
          
type CustomerSupportProps = {
  onSubscribe?: () => void;
  onEnquiry?: () => void;
};

const CustomerSupport: FC<CustomerSupportProps> = ({ onSubscribe, onEnquiry }) => {
  return (

    <div className="space-y-5 w-[420px]">
      {/* Subscribe and Enquiry Section */}
      <div className="space-y-5 border-[1px] border-[#E4E7E9] p-5 rounded-lg">
        <button
          className="text-xl cursor-pointer bg-[#FA8232] text-white rounded-lg py-2 w-full"
          onClick={onSubscribe}
        >
          Subscribe Now
        </button>
        <button
          className="text-xl cursor-pointer border-2 font-semibold rounded-lg py-2 w-full"
          onClick={onEnquiry}
        >
          Enquiry Now
        </button>
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
