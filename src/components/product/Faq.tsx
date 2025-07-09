import React from 'react';
import Accordian from '../../common/Accordian';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  Faqs: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ Faqs }) => {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-3xl">Frequently Asked Questions</h3>
      {Faqs?.length ? (
        Faqs.map((item, index) => (
          <Accordian key={`faq-${index}`} question={item?.question} answer={item?.answer} />
        ))
      ) : (
        <p>No FAQs available.</p>
      )}
    </div>
  );
};

export default Faq;
