import React, { useState } from "react";

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white flex flex-col md:flex-row md:justify-between md:px-20 justify-center items-center py-20">
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
        <p className="text-gray-500 text-lg lg:text-xl">Most Questions</p>
        <h3 className="text-3xl font-semibold text-black lg:text-6xl lg:font-bolder leading-tight tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <button className="bg-black text-white px-5 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-800 active:scale-95 mt-5">
          Any Question
        </button>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 w-11/12 max-w-xl flex flex-col p-6">
        {/* FAQ Items */}
        {[
          "What is the duration of the courses?",
          "What kind of support is available in the free course?",
          "What if I want to buy an advanced course?",
          "What if my questions are not answered in the course?"
        ].map((question, index) => (
          <div key={index} className={`border-b border-gray-200 py-4 ${index === 3 ? 'border-b-0' : ''}`}>
            <div
              className="flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-500"
              onClick={() => toggleFaq(index)}
            >
              <p className="text-black text-lg transition-colors duration-300">{question}</p>
              <span className={`text-purple-500 text-2xl transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className={`mt-2 text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="py-2">
                {index === 0 && "The duration of the courses depends on the course complexity, the amount of material covered, and the format in which it is delivered."}
                {index === 1 && "The courses are designed for students interested in learning and exploring. We provide comprehensive support for each course."}
                {index === 2 && "If you want to buy advanced courses, you can contact us. We will help you with your payment."}
                {index === 3 && "If you have any questions that are not answered in the course, you can contact us. We will respond to you as soon as possible."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;