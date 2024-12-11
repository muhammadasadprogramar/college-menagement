import React from "react";
import { Link } from "react-router-dom";

const ApplyForms = () => {
  return (
    <div className="w-full h-[45vh] sm:h-[65vh] bg-[#F2F2F2] flex items-center flex-col">
      <Link to="/itct" className="w-[90%] max-w-[360px]">
        <button className="w-full mt-5 sm:mt-10 btn-shadow py-2 rounded-md text-white bg-[#009879] hover:bg-[#008069] text-sm sm:text-base">
          APPLY FOR ITCT
        </button>
      </Link>

      <Link to="/biomatric" className="w-[90%] max-w-[360px]">
        <button className="w-full mt-5 sm:mt-10 btn-shadow py-2 rounded-md text-white bg-[#009879] hover:bg-[#008069] text-sm sm:text-base">
          GET BIOMETRIC ENROLMENT CERTIFICATE
        </button>
      </Link>

      <a
        className="w-[90%] max-w-[360px]"
        target="_blank"
        href="https://www.dgcs.gos.pk/udocs/#/pdffiles"
      >
        <button className="w-full mt-5 sm:mt-10 btn-shadow py-2 rounded-md text-white bg-[#009879] hover:bg-[#008069] text-sm sm:text-base">
          Download Promotions List/Seniorty Lists
        </button>
      </a>
    </div>
  );
};

export default ApplyForms;
