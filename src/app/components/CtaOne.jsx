import React from 'react'

const CtaOne = () => {
  return (
<div className="px-4 sm:pt-8 md:px-10 lg:px-[260px] py-4 mt-4 mb-5">
  <div className="w-full rounded-xl bg-[#01AFD1] shadow-lg flex flex-col lg:flex-row justify-between lg:px-[70px] lg:py-6 gap-6 lg:gap-[6vw]">

    {/* LEFT SIDE IMAGE */}
    <div className="w-full flex justify-center items-center">
      <img
        src="https://wanderon-images.gumlet.io//contact-form-illustration.png?updatedAt=1739353843005"
        alt="illustration"
        className="w-full max-w-[280px] lg:max-w-full h-auto object-contain"
      />
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="w-full flex">
      <div className="w-full bg-[#E6FAFF] p-5 sm:p-8 rounded-lg">

        {/* Heading */}
        <h3 className="text-[#01AFD1] font-bold text-[22px] sm:text-[26px] leading-[30px]">
          Plan and Book Trip Calling?
        </h3>
        <p className="text-black text-[16px] sm:text-[18px] font-semibold mt-1">
          Allow Us to Call You Back!
        </p>

        {/* FORM */}
        <form className="mt-5 space-y-4">

          {/* Name */}
          <div>
            <label className="text-black text-[14px] font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2.5 mt-1">
              <span className="text-gray-500 text-xl">👤</span>
              <input
                type="text"
                placeholder="e.g. John Smith"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-black text-[14px] font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2.5 mt-1">
              <span className="text-gray-500 text-xl">📞</span>
              <input
                type="number"
                placeholder="Enter your 10 digit number"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-black text-[14px] font-medium">
              Email Id <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2.5 mt-1">
              <span className="text-gray-500 text-xl">✉️</span>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-black text-[14px] font-medium">Message</label>
            <div className="flex items-start gap-3 border border-gray-300 rounded-lg px-4 py-2.5 mt-1">
              <span className="text-gray-500 text-xl">💬</span>
              <textarea
                placeholder="Any Message"
                className="w-full outline-none resize-none h-20 text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#FFE600] text-black font-semibold py-3 rounded-full mt-3 shadow-md"
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
