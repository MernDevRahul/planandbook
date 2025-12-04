import React from 'react'

const CtaOne = () => {
  return (
    <div className="px-4 sm:pt-8 md:px-[100px] lg:px-20 2xl:px-[260px] py-6 mt-4 mb-10">

      <div className="w-full rounded-xl bg-(--primary) shadow-lg flex flex-col lg:flex-row justify-between items-center lg:px-[70px] lg:py-10 p-6 gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://wanderon-images.gumlet.io//contact-form-illustration.png?updatedAt=1739353843005"
            alt="illustration"
            className="w-[70%] sm:w-[300px] lg:w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2">
          <div className="w-full bg-[#fff3e6] p-5 sm:p-8 rounded-lg">

            <h3 className="text-(--primary) font-bold text-[22px] sm:text-[26px] leading-[30px]">
              Plan and Book Trip Calling?
            </h3>
            <p className="text-black text-[16px] sm:text-[18px] font-semibold mt-1">
              Allow Us to Call You Back!
            </p>

            <form className="mt-5 space-y-4">

              {/* Name */}
              <div>
                <label className="text-black text-[14px] font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 mt-1">
                  <span className="text-gray-500 text-xl"></span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full outline-none text-black placeholder-black"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-black text-[14px] font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 mt-1">
                  <span className="text-gray-500 text-xl"></span>
                  <input
                    type="number"
                    placeholder="Enter your 10 digit number"
                    className="w-full outline-none text-black placeholder-black"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-black text-[14px] font-medium">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 mt-1">
                  <span className="text-gray-500 text-xl"></span>
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    className="w-full outline-none text-black placeholder-black"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-black text-[14px] font-medium">
                  Message
                </label>
                <div className="flex items-start gap-3 border border-gray-300 rounded-lg px-4 py-3 mt-1">
                  <span className="text-gray-500 text-xl"></span>
                  <textarea
                    placeholder="Write your message"
                    className="w-full outline-none resize-none h-20 text-black placeholder-black"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-(--primary) text-white text-shadow-lg font-semibold py-3 rounded-full mt-3 shadow-md hover:scale-[1.02] transition"
              >
                Submit
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CtaOne
