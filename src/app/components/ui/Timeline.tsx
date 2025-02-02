"use client";
import Image from "next/image";
import "animate.css";

export default function Timeline() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-10 mb-60">
      <div className="">
        <Image src="/misa.webp" alt="Jadwal Misa" width={900} height={900} className="animate__animated animate__fadeInLeft" />
      </div>
      <div className="animate__animated animate__fadeInRight">
        <p className="font-bold mb-5  text-xl mt-5 ">Misa Hari Minggu</p>
        {/* <div className="h-5 border-b-2 border-black text-sm text-center mb-5"></div> */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
              <time className=" italic font-normal">06:00 WIB</time>
              <div className="text-lg  font-normal">Misa Pertama</div>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
              <time className="font-normal italic">09:00 WIB</time>
              <div className="text-lg font-normal">Misa Kedua</div>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
              <time className="font-normal italic">17.30 WIB</time>
              <div className="text-lg font-normal">Misa Ketiga</div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}
