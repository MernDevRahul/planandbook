import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="relative w-full flex items-center justify-center sm:mt-[60px] md:mt-[60px] lg:mt-[120px] mb-10">
      <div className="container bg-white mx-auto shadow-md rounded-md mt-5">
        <div className="pt-10 pb-10 px-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://wanderon.in/assets/svg/t&c.svg"
              alt="any"
              width={30}
              height={30}
            />
            <h1 className="text-lg lg:text-2xl font-bold text-gray-800 uppercase tracking-wide">
              TERMS & CONDITIONS
            </h1>
          </div>

          <div className="bg-(--primary) h-1 px-4 w-full rounded-lg mx-auto mt-2"></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="w-full mx-auto px-10 text-gray-700 leading-relaxed text-[15px] lg:text-base">
          <p className="mb-4">
            Welcome to our Plan and Book Trip Travel Agency. By using our services, you agree to the following terms and conditions.
          </p>

          {/* <p className="mb-6">This Policy applies to:</p>

          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>All customers worldwide...</li>
            <li>Any individual who shares personal data...</li>
            <li>Anyone who interacts with us through email...</li>
          </ul> */}

          {/* SECTION TITLE */}
          <h2 className="text-xl font-bold text-gray-800 mt-10">
            1. Booking and Payments
          </h2>
          <div className="bg-(--primary) h-0.5 px-4 w-full rounded-lg mx-auto mt-1 mb-4"></div>

          {/* <p className="mb-4">
            We may collect the following types of information:
          </p> */}

          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>All bookings require full or partial payment in advance.</li>
            <li>We accept payments via credit card, PayPal, and bank transfers.</li>
            <li>Failure to complete payment may result in cancellation.</li>
            {/* <li>Device and Usage Data</li> */}
          </ul>

          {/* SECTION */}
          <h2 className="text-xl font-bold text-gray-800 mt-10">
            2. Cancellations and Refunds
          </h2>
          <div className="bg-(--primary) h-0.5 px-4 w-full rounded-lg mx-auto mt-1 mb-4"></div>

          {/* <p className="mb-4">We use your information to:</p> */}

          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Cancellations made 7 days before departure are fully refundable.</li>
            <li>Last-minute cancellations may incur a fee.</li>
            <li>Refund processing time is 5-10 business days.</li>
            {/* <li>Improve our services</li> */}
          </ul>

          {/* SECTION */}
          <h2 className="text-xl font-bold text-gray-800 mt-10">
            3. Travel Responsibilities
          </h2>
          <div className="bg-(--primary) h-0.5 px-4 w-full rounded-lg mx-auto mt-1 mb-4"></div>

          {/* <p className="mb-4">
            We implement security measures to protect your personal information.
            However, no method of transmission over the Internet is 100% secure.
          </p> */}

          <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Customers must carry valid identification and travel documents.</li>
          <li>We are not responsible for delays caused by third-party providers.</li>
          <li>Insurance is recommended for all travelers.</li>
        </ul>

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10">
            4. Third-Party Sharing
          </h2>
          <div className="bg-(--primary) h-0.5 px-4 w-full rounded-lg mx-auto mt-1 mb-4"></div>

          <p className="mb-6">
            We do not sell your personal data. However, we may share information
            with third parties to facilitate bookings and payments.
          </p> */}

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10">
            5. Your Rights
          </h2>
          <div className="bg-(--primary) h-0.5 px-4 w-full rounded-lg mx-auto mt-1 mb-4"></div>

          <p className="mb-6">
            You have the right to access, update, or delete your personal
            information by contacting us.
          </p> */}

          {/* <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>To process your bookings...</li>
          <li>To provide customer support...</li>
          <li>To enhance service quality...</li>
        </ul> */}

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10">
            6. Updates to This Policy
          </h2>
          <div className="bg-(--primary) h-0.5 px-4 w-full rounded-lg mx-auto mt-1 mb-4"></div>

          <p className="mb-6">
            We may update this Privacy Policy from time to time. Please review
            it periodically.
          </p> */}

          {/* SECTION */}
          <h2 className="text-xl font-bold text-gray-800 mt-10">
            4. Contact Us
          </h2>
          <div className="bg-(--primary) h-0.5 px-4 w-full rounded-lg mx-auto mt-1 mb-4"></div>

          <p className="mb-6">
            If you have any questions, please contact us at <br />
            <Link href="mailto:contact@planandbooktrip.com" className="text-(--primary)">
              contact@planandbooktrip.com
            </Link>
          </p>

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
          8. User Rights and Choices
        </h2>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Right to access...</li>
          <li>Right to correct...</li>
          <li>Right to withdraw consent...</li>
        </ul> */}

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
          9. Protection of Data
        </h2>

        <p className="mb-6">
          We ensure data processing is done securely and lawfully...
        </p> */}

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
          10. Use of Images, Testimonials, & Media
        </h2>

        <p className="mb-6">
          WanderOn may use your images or media from trips only after your consent...
        </p> */}

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
          11. Compliance
        </h2>

        <p className="mb-6">
          We comply with applicable data protection laws...
        </p> */}

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
          12. Updates to This Policy
        </h2>

        <p className="mb-6">
          We may update our Privacy Policy from time to time...
        </p> */}

          {/* SECTION */}
          {/* <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
          13. Contact Information
        </h2>

        <p className="mb-6">
          If you have concerns regarding personal data, contact our Data Protection Officer.
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
