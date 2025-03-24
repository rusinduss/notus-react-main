import EstimationForm from "components/Forms/EstimationForm";
import React from "react";

export default function c() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <EstimationForm />
            
          </div>
        </div>
      </div>
    </>
  );
}
