import React from 'react'
import Button from './Button'
import { features } from '../constants'
import Styles, { layout } from '../style'


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex p-6 rounded-[20px] feature-card ${index !== features.lenth - 1 ? 'mb-6' : 'mb-0'} `}>
    <div className={`${Styles.flexCenter} h-[64px] w-[64px] rounded-full bg-dimBlue`}>
      <img className='w-[50%] h-[50%] object-contain'
        src={icon} alt={icon}/>
    </div>

    <div className='flex flex-1 flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-[18px] leading-[23.4px] mb-1 text-white'>
        {title}
      </h4>

      <p className='font-poppins text-dimWhite font-normal text-[16px] leading-[24px] '>
        {content}
      </p>
    </div>
  </div>
)




const Business = () => {
  return (
    <section id='features'
    className={layout.section}>
      <div className={`${layout.sectionInfo}`}>

        <h2 className={`${Styles.heading2}`}>
          You do the business,
          <br className='hidden sm:block' />
          We'll handle the money.
        </h2>

        <p className={`${Styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card , you can improve your financial life by
          bulding credit , earning reward and saving money.But with hunndreds of credit cards on the market
        </p>

        <Button styles={'mt-10'} />
      </div>


      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>

    </section>
  )
}




export default Business