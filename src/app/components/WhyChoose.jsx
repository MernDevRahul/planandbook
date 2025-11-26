import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhyChoose = () => {
  return (
    <div className="px-4 sm:pt-8 md:px-10 lg:px-[260px] py-2.5 mt-2">
      <div className="w-full flex p-2.5 flex-col justify-center items-center gap-2.5 ">
        <h2 className="text-black text-[24px] font-semibold leading-9 items-center">
          Why Plan and book Trip?
        </h2>
      </div>
      <div className="mt-[30px]">
        <div>
          <ChevronLeft size={18} className="block lg:hidden" />
          <div className="w-full flex">
            <div className="grid grid-cols-4 gap-5">
                <div className="h-[350px] z-2 flex flex-col items-start gap-4 pt-[25px] pe-[18px] pb-[25px] ps-[25px] shadow-lg border border-[#01AFD1] relative rounded-2xl">
                    <div className="font-bold text-[26px] leading-[30px] items-center my-2 text-[#01AFD1]">
                        No Third Party Mess
                    </div>
                    <div className="font-normal leading-5 text-black items-center">100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!</div>
                    <img src="https://wanderon.in/assets/images/sauceBg1.svg" alt="any" className="absolute h-full w-full left-0 top-0 right-0 bottom-0 -z-1 rounded-2xl object-cover"/>
                </div>
                <div className="h-[350px] z-2 flex flex-col items-start gap-4 pt-[25px] pe-[18px] pb-[25px] ps-[25px] shadow-lg border border-[#01AFD1] relative rounded-2xl">
                    <div className="font-bold text-[26px] leading-[30px] items-center my-2 text-[#01AFD1]">
                        No Third Party Mess
                    </div>
                    <div className="font-normal leading-5 text-black items-center">100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!</div>
                    <img src="https://wanderon.in/assets/images/sauceBg1.svg" alt="any" className="absolute h-full w-full left-0 top-0 right-0 bottom-0 -z-1 rounded-2xl object-cover"/>
                </div>
                <div className="h-[350px] z-2 flex flex-col items-start gap-4 pt-[25px] pe-[18px] pb-[25px] ps-[25px] shadow-lg border border-[#01AFD1] relative rounded-2xl">
                    <div className="font-bold text-[26px] leading-[30px] items-center my-2 text-[#01AFD1]">
                        No Third Party Mess
                    </div>
                    <div className="font-normal leading-5 text-black items-center">100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!</div>
                    <img src="https://wanderon.in/assets/images/sauceBg1.svg" alt="any" className="absolute h-full w-full left-0 top-0 right-0 bottom-0 -z-1 rounded-2xl object-cover"/>
                </div>
                <div className="h-[350px] z-2 flex flex-col items-start gap-4 pt-[25px] pe-[18px] pb-[25px] ps-[25px] shadow-lg border border-[#01AFD1] relative rounded-2xl">
                    <div className="font-bold text-[26px] leading-[30px] items-center my-2 text-[#01AFD1]">
                        No Third Party Mess
                    </div>
                    <div className="font-normal leading-5 text-black items-center">100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!</div>
                    <img src="https://wanderon.in/assets/images/sauceBg1.svg" alt="any" className="absolute h-full w-full left-0 top-0 right-0 bottom-0 -z-1 rounded-2xl object-cover"/>
                </div>
            </div>
          </div>
        </div>





        <div></div>
      </div>
    </div>
  );
};

export default WhyChoose;
