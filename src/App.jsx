
import React from 'react';
import styles from './style'
import './index.css'
import { BsArrowUpShort } from 'react-icons/bs';


import { NavBar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components/Index';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';


const App = () => {

  const [showArrow, setShowArrow] = useState(false);
  const arrowRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.5;

      setShowArrow(scrollPosition > scrollThreshold);
    }

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  useEffect(() => {
    if (arrowRef.current) {

      if (showArrow)
        arrowRef.current.classList.add('arrow-up-visible')

      else
        arrowRef.current.classList.remove('arrow-up-visible')
    }

  }, [showArrow])




  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>


      {/* arrow up */}
      {showArrow && (
        <div
          ref={arrowRef}
          className='bg-secondary fixed z-[10] right-4 text-[50px] rounded-xl bottom-[100px] arrow-up
             cursor-pointer duration-500'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <BsArrowUpShort />
        </div>
      )}


      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>


      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
  )
}

export default App;



