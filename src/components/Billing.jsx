import React from 'react'
import { bill, apple, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product'
      className={`${layout.sectionReverse} `} >
      <div className={layout.sectionImgReverse}>
        <img src={bill} className='w-[100%] h-[100%] relative z-[5]' alt={bill}/>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>


      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily Control Your
          <br className='hidden sm:block'/> 
          Billing & Invoicing
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Obcaecati cupiditate hic illum nam veniam molestias commodi nobis laboriosam ex ut!
        </p>

        <div className='flex flex-wrap mt-6 sm:mt-10'>
          <img src={apple} 
          className='w-[128.86px] h-[42.05px] mr-5 cursor-pointer object-contain' alt="Apple store" />
        
          <img src={google}  
          className='w-[144.17px] h-[43.08px]  cursor-pointer object-contain' alt="Google play store" />
        </div>
      </div>
    </section>
  )
}

export default Billing