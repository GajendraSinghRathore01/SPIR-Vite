import React from "react";

interface AccordianProps {
  question: string;
  answer: string;
}

const Accordian: React.FC<AccordianProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen); // my approach 
    // setIsOpen((prev) => !prev); // toggle the isOpen state
  } 
  return (
    <div
      className="border-[1px] border-[#E4E7E9] rounded-lg p-4 flex flex-col w-full select-none cursor-pointer text-lg"
      onClick={onToggle} // trigger the onToggle function when clicked
    >
      <div className="flex justify-between items-center">
        <h5 className="font-semibold text-justify">{question}</h5>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? ( 
              ""
            ) : (
              <path
                d="M12 5V19"
                stroke="#172026"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <path
              d="M5 12H19"
              stroke="#172026"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* <div className="bg-red-500">x</div> */}
      </div>
      <div className={`${isOpen ? "inline-block" : "hidden"} w-[95%] pt-4`}>
        <p className="text-justify">{answer}</p>
      </div>
    </div>
  );
};

export default Accordian;
