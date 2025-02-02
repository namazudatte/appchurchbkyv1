"use client";

import React from "react";
// import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const WaButton = () => {
  //   const router = useRouter();

  const handleclick = async () => {
    if (navigator.userAgent.includes("WhatsApp")) {
      window.open(`whatsapp://send?phone=+6285822377415`);
    } else {
      window.open("https://web.whatsapp.com/send?phone=+6285822377415", "_blank");
    }
  };

  return (
    <div className="bg-green-500 w-min p-2 rounded-full fixed cursor-pointer md:right-8  z-50 bottom-10 right-4 " onClick={handleclick}>
      <FaWhatsapp color="white" className="w-7 md:w-10 md:h-10 " />
    </div>
  );
};

export default WaButton;
