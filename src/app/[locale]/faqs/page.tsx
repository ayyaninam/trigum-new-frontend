import Accordian from "@/components/Accordian";
import Faqs from "@/components/Faqs";
import React from "react";

const faqs = () => {
  return (
    <div className="mx-auto container my-16">
      <div className="py-8 bg-gradient-to-r from-transparent via-orange-400 to-transparent">
        <div className="text-center font-bold text-3xl lg:text-5xl  text-white">
          Frequently Asked Questions
        </div>
      </div>
      <Accordian />
    </div>
  );
};

export default faqs;
