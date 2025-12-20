"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "sonner";
import { AllDestinationsByCategoryThunk } from "src/app/redux/features/destinationsSlice";

const DestinationTwo = ({ catergory }) => {
  // const loading = false;
  const { AllDestinationsByCategory, loading } = useSelector(
    (state) => state.destination
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // toast.success("Loading all packages...",{
    //   duration: 1000,
    //   position: "bottom-right",
    //   style: { background: "var(--primary)", color: "white" },
    // })
    try {
      const data = async () => {
        await dispatch(AllDestinationsByCategoryThunk(catergory));
      };
      data();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <>
      { AllDestinationsByCategory && (
        <>
        <div className="flex flex-col flex-start items-center mt-[30px] mb-5 lg:mt-[70px] lg:mb-[30px]">
        <h2 className="xl:mb-2 text-(--primary) text-2xl lg:text-5xl font-bold lg:leading-[47px] text-shadow-md text-shadow-black/35">
          All Destinations
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 px-[5%] lg:gap-15 translate-x-[0%] lg:px-[10%] pb-4">
        {AllDestinationsByCategory?.map((item) => (
          <Link href={`/${item?.slug}`} key={item?.slug} target="_blank">
            <div className="pt-[1vw]">
              {" "}
              {/* extra space for rotated bg */}
              {loading ? (
                <div className="skeleton mx-auto lg:mx-4 cursor-pointer w-[35vw] h-[45vw] lg:w-[18.08vw] lg:h-[21.96vw] relative bg-center  lg:mr-4 rounded-[10px] object-cover -mt-[1vw] overflow-visible">
                  <div className="absolute xl:bottom-[1vw] xl:left-[1.5vw] flex flex-col-reverse"></div>
                  <div className="absolute top-0 right-0 w-full h-full object-cover rounded-[1vw] -z-10 bg-[linear-gradient(#FF7C5B_0%,#FF5BAE_100%)] origin-center rotate-3"></div>
                </div>
              ) : (
                <div
                  className="mx-auto lg:mx-4 cursor-pointer w-[35vw] h-[45vw] lg:w-[18.08vw] lg:h-[21.96vw] relative bg-center bg-no-repeat bg-cover lg:mr-4 rounded-[10px] object-cover -mt-[1vw] overflow-visible"
                  style={{
                    backgroundImage: `url(http://localhost:6544/${item?.thumbnail?.replace(/\\/g,"/")})`,
                  }}
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
      )}
    </>
  );
};

export default React.memo(DestinationTwo);
