import React from 'react'

import Styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'


const Hero = () => {
  return (
    <section className={`flex flex-col md:flex-row ${Styles.paddingY}   text-white`}>
      <div className={`flex-1 flex-col ${Styles.flexStart} xl:px-0 sm:px-16 px-6`}>

        <div className='flex items-center bg-discount-gradient rounded-[10px] py-[6px] px-4 mb-2'>
          <img src={discount} className='w-[32px] h-[32px] ' alt='discount' />
          <p className={`${Styles.paragraph} ml-2 `}>
            <span className='text-white'>20%</span> Discount For{' '}
            <span className='text-white'> 1 Month</span> Account
          </p>
        </div>


        <div className='flex justify-between items-center w-full'>
          <h1 className='flex-1 font-semibold font-poppins text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100.8px]'>
            The Next
            <br className='' />
            <span className='text-gradient '>Generation</span>
          </h1>

          <div className='hidden ss:flex mr-0 md:mr-4'>
            <GetStarted />
          </div>
        </div>


        <h1 className='text-[52px] s:text-[68px] font-poppins font-semibold leading-[75px] ss:leading-[100.8px] w-full'>
          Payment Method
        </h1>
        <p className={`mt-5 ${Styles.paragraph} max-w-[470px]`}>
          Pour team of exports uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rate, annula fees
        </p>

      </div>


      {/* Image */}
      <div className={`flex-1 flex ${Styles.flexCenter} my-10 md:my-0 relative`}>
        <img src={robot} alt={robot}
          className='w-[100%] h-[100%] relative z-[5] ' />

        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full'></div>
        <div className='absolute z-[1] w-[50%] h-[50%] bottom-20 blue__gradient '></div>
        {/* gradient end */}
      </div>

      {/* for mobile device */}
      <div className={`ss:hidden ${Styles.flexCenter} `}>
        <GetStarted />
      </div>


    </section>
  )
}

export default Hero