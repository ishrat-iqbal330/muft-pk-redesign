import React, { useState } from "react"; // Importing React and useState hook

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to manage active FAQ

  // Function to toggle the FAQ answers
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white flex flex-col md:flex-row md:justify-between md:px-20 justify-center items-center py-20">
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
        <p className="text-gray-500 text-lg lg:text-xl">Most Questions</p>
        <h3 className="text-3xl font-semibold text-black lg:text-4xl lg:font-bold">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <button className="bg-black text-white px-5 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
          Any Question
        </button>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 w-11/12 max-w-xl flex flex-col p-6">
        {/* Individual FAQ Items */}
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFaq(0)} // Toggle for FAQ item 1
          >
            <p className="text-black text-lg ">
              What is the duration of the courses?
            </p>
            <span className="text-purple-500 text-2xl">
              {activeIndex === 0 ? "-" : "+"} {/* Indicator */}
            </span>
          </div>
          {activeIndex === 0 && ( // Conditional rendering for answer
            <p className="mt-2 text-sm text-gray-600">
              The duration of the courses depends on the course complexity, the
              amount of material covered, and the format in which it is
              delivered.
            </p>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFaq(1)} // Toggle for FAQ item 2
          >
            <p className="text-black text-lg ">
              What kind of support is available in the free course?
            </p>
            <span className="text-purple-500 text-2xl">
              {activeIndex === 1 ? "-" : "+"} {/* Indicator for item 2 */}
            </span>
          </div>
          {activeIndex === 1 && ( // Conditional rendering for answer 2
            <p className="mt-2 text-sm text-gray-600">
              The courses are designed for students interested in learning and
              exploring. We provide comprehensive support for each course.
            </p>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="border-b border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFaq(2)} // Toggle for FAQ item 3
          >
            <p className="text-black text-lg ">
              What if I want to buy an advanced course?
            </p>
            <span className="text-purple-500 text-2xl">
              {activeIndex === 2 ? "-" : "+"} {/* Indicator for item 3 */}
            </span>
          </div>
          {activeIndex === 2 && ( // Conditional rendering for answer 3
            <p className="mt-2 text-sm text-gray-600">
              If you want to buy advanced courses, you can contact us. We will
              help you with your payment.
            </p>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFaq(3)} // Toggle for FAQ item 4
          >
            <p className="text-black text-lg ">
              What if my questions are not answered in the course?
            </p>
            <span className="text-purple-500 text-2xl">
              {activeIndex === 3 ? "-" : "+"} {/* Indicator for item 4 */}
            </span>
          </div>
          {activeIndex === 3 && ( // Conditional rendering for answer 4
            <p className="mt-2 text-sm text-gray-600">
              If you have any questions that are not answered in the course, you
              can contact us. We will respond to you as soon as possible.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQS; // Exporting the FAQS component
