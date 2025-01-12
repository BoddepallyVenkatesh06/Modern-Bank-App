import React, { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants';

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 navBar justify-between items-center'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px] cursor-pointer' />

      <ul className='list-none hidden sm:flex items-center justify-end flex-1'>
        {
          navLinks.map((nav, index) => (
            <li key={nav.id}
              className={`font-poppins text-white font-normal text-[16px]  hover:text-secondary duration-300
             ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))
        }
      </ul>




      {/* for mobile devices */}
      <div className='flex flex-1 sm:hidden justify-end items-center  '>
        <img className='w-[28px] h-[28px] object-contain    '
          src={toggle ? close : menu} alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 min-w-[140px] my-2 bg-black-gradient absolute 
              top-20 right-0 rounded-xl sidebar `} >
          <ul className='list-none flex flex-col items-center justify-end flex-1 gap-4'>
            {
              navLinks.map((nav, index) => (
                <li key={nav.id} onClick={() => setToggle(false)} // for close after click on 
                  className={`font-poppins text-white font-normal text-[18px]
             ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar