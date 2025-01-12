import React from 'react'
import { footerLinks, socialMedia } from '../constants/index'
import { logo } from '../assets'
import styles from '../style'

const Footer = () => {
  return (
    <footer className={`text-white ${styles.flexCenter}  flex-col ${styles.paddingY}`}>
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full `}>

        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img className='w-[266px] h-[72.14px] object-contain' src={logo} alt={logo} />
          <p className={`${styles.paragraph} mt-4 w-[312px]`}>
            A new way to make the payments easy , reliable and secure
          </p>
        </div>


        {/* All links */}
        <div className='flex-[1.5] w-full flex justify-between flex-wrap mt-10 md:mt-0'>
          {
            footerLinks.map((footerLink) => (
              <div key={footerLink.title}
                className='min-w-[150px] flex flex-col my-4 ss:my-0'>
                <h4 className='font-poppins font-medium text-[18px] leading-[27px]'>
                  {footerLink.title}
                </h4>

                <ul className='mt-4 list-none'>
                  {
                    footerLink.links.map((link, index) => (
                      <li key={link.name}
                        className={`text-[16px] leading-[24px] font-normal text-dimWhite hover:text-secondary 
                        cursor-pointer duration-300 ${index !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0'}`}>
                        {link.name}</li>
                    ))
                  }
                </ul>

              </div>
            ))
          }
        </div>
      </div>


      <div className='w-full flex justify-between items-center flex-col md:flex-row pt-6 
                border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] '>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className='flex mt-6 md:mt-0 gap-7'>
          {
            socialMedia.map((social) => (
              <img 
              src={social.icon}
              key={social.id}
              alt={social.id}
             className='w-[21px] h-[21px] object-contain cursor-pointer hover:scale-125 duration-300'
             onClick={()=> window.open(social.link)}
             />
            ))
          }
        </div>
      </div>

    </footer>
  )
}

export default Footer