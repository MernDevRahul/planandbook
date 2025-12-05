import Image from 'next/image'
import React from 'react'

const BrandOne = () => {
  return (
    <div>
      <h2 className='w-full text-center font-semibold text-(--primary) my-6 text-2xl px-2 lg:text-[2vw] text-shadow-lg'>
        Brands That Trust Us
      </h2>

      <div className='px-4 flex flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-3 lg:px-[10vw] lg:grid lg:grid-cols-4 lg:gap-8 justify-items-center'>

  <div className='mx-auto'>
    <Image
      src="https://nationalmarketingprojects.com/img/logo-color.png"
      alt='any'
      width={200}
      height={0}
      className='w-20 lg:w-40 h-auto object-contain'
    />
  </div>

  <div className='mx-auto'>
    <Image
      src="https://nidmm.in/img/logo.webp"
      alt='any'
      width={200}
      height={0}
      className='w-20 lg:w-40 h-auto object-contain'
    />
  </div>

  <div className='mx-auto'>
    <Image
      src="https://nidmm.in/img/logo.webp"
      alt='any'
      width={200}
      height={0}
      className='w-20 lg:w-40 h-auto object-contain'
    />
  </div>

  <div className='mx-auto'>
    <Image
      src="/logo/bni.png"
      alt='any'
      width={200}
      height={0}
      className='w-20 lg:w-40 h-auto object-contain'
    />
  </div>

</div>
    </div>
  )
}

export default BrandOne
