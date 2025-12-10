import Link from "next/link";
import React from "react";

const DestinationTwo = () => {
  const loading = false;
  return (
    <>
      <div className="flex flex-col flex-start items-center mt-[30px] mb-5 lg:mt-[70px] lg:mb-[30px]">
        <h2 className="xl:mb-2 text-(--primary) text-2xl lg:text-5xl font-bold lg:leading-[47px] text-shadow-md text-shadow-black/35">
          Destinations
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 px-[5%] lg:gap-15 translate-x-[0%] lg:px-[10%] pb-4">
        {[1,2,3,4,5,6,7,8,9].map((item)=>(
            <Link href="/" key={item}>
  <div className="pt-[1vw]"> {/* extra space for rotated bg */}
   {loading? (
     <div
      className="skeleton mx-auto lg:mx-4 cursor-pointer w-[35vw] h-[45vw] lg:w-[18.08vw] lg:h-[21.96vw] relative bg-center  lg:mr-4 rounded-[10px] object-cover -mt-[1vw] overflow-visible"
    >
      <div className="absolute xl:bottom-[1vw] xl:left-[1.5vw] flex flex-col-reverse"></div>
      <div className="absolute top-0 right-0 w-full h-full object-cover rounded-[1vw] -z-10 bg-[linear-gradient(#FF7C5B_0%,#FF5BAE_100%)] origin-center rotate-3"></div>
    </div>
   ): (
     <div
      className="mx-auto lg:mx-4 cursor-pointer w-[35vw] h-[45vw] lg:w-[18.08vw] lg:h-[21.96vw] relative bg-center bg-no-repeat bg-cover lg:mr-4 rounded-[10px] object-cover -mt-[1vw] overflow-visible"
      style={{ backgroundImage: "url('https://wanderon-images.gumlet.io/rajasthan_card.jpeg')" }}
    >
      <div className="absolute xl:bottom-[1vw] xl:left-[1.5vw] flex flex-col-reverse"></div>
      <div className="absolute top-0 right-0 w-full h-full object-cover rounded-[1vw] -z-10 bg-[linear-gradient(#FF7C5B_0%,#FF5BAE_100%)] origin-center rotate-3"></div>
    </div>
   )}
  </div>
</Link>
        ))}
      </div>
    </>
  );
};

export default DestinationTwo;
