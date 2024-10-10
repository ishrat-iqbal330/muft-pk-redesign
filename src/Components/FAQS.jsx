import React from "react";

const FAQS = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between items-center py-20">
      <div className="left flex gap-3 flex-col items-start ">
        <p className="text-gray-400 text-lg">Most Questions</p>
        <h3 className="text-3xl text-blackfont-semibold w-[93vw]">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <button className="bg-black  text-white px-5 py-3 lg:py-3 lg:px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 ">
          Any Question
        </button>
      </div>

      <div className="right mt-16 flex flex-col gap-4 items-start justify-start ">
        <div className="1st question">
          <p className="text-black text-xl font-semibold">What is the duration of the courses?</p>
          <button>
            the duration of the courses depend on the course complaxity , the
            amount of material covered and the format in which it deleivered
          </button>
        </div>

        <div className="2nd question">
          <p>What Kind of support is available in the free course?</p>
          <button>
            The courses are designed for students who are interested in learning
            and exploring. We provide comprehensive support for each course.
          </button>
        </div>

        <div className="3rd question">
          <p>What if I want to buy advanced course?</p>
          <button>
            If you want to buy advanced courses, you can contact us. We will
            help you with your payment.
          </button>
        </div>

        <div className="4th question">
          <p>If any other questions are not answered in the course?</p>
          <button>
            If you have any questions that are not answered in the course, you
            can contact us. We will respond to you as soon as possible.
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
