import React from 'react'

const Faq = ({data}) => {
  return (
    <div>
     <h2 className="w-full text-center font-semibold text-(--primary) my-6 text-2xl px-2 lg:text-[2vw] text-shadow-lg text-shadow-gray-500/20">
        Frequently Asked Questions
      </h2>
      <div className="px-4 lg:px-[20vw]">
        {data.map((item, index)=>(
            <div key={index} className="collapse collapse-arrow bg-white border border-(--primary) shadow-lg mb-2">
          <input type="radio" name="my-accordion-2" defaultChecked={index===0} />
          <div className="collapse-title font-bold text-md lg:text-xl text-black/70">
            {item.question}
          </div>
          <div className="collapse-content text-md lg:text-md text-black/70 font-medium">
            {item.answer}
          </div>
        </div>
        ))}
      </div> 
    </div>
  )
}

export default Faq;
