import React from 'react'
import { stats } from '../constants/index'
import Styles from '../style'


const Stats = () => {
  return (
    <section className={`${Styles.flexCenter} mb-6 sm:mb-20 flex-wrap`}>
      {
        stats.map((stat) => (
          <div key={stat.id}
            className='flex-1 flex justify-start items-center m-3 '>

            <h4 className='font-poppins font-semibold text-[30.89px] xs:text-[40.89px] leading-[40.16px] 
            sm:leading-[53.16px] text-white '>
              {stat.value}
            </h4>

            <p className='font-poppins font-normal text-gradient text-[15.45px] xs:text-[20.45px] leading-[21.58px] 
            sm:leading-[26.58px] ml-3 '>
              {stat.title}
            </p>
          </div>
        ))
      }
    </section>
  )
}

export default Stats