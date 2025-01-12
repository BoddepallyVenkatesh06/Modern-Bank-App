import React from 'react'
import Styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${Styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${Styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`}>

        <div className={`${Styles.flexStart} `}>
          <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
            <span className='text-gradient'>Get</span>

          </p>

          <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow up' />
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
          <span className='text-gradient'>Started</span>


        </p>
      </div>
    </div>
  )
}

export default GetStarted