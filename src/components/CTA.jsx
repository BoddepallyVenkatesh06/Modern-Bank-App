import React from 'react'
import Button from './Button'
import styles from '../style'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} flex-col sm:flex-row
            text-white bg-black-gradient-2 rounded-[20px] box-shadow justify-between py-10`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now !</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          verything ypu need to accept card payments andgrow business anywhere on the planet
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 sm:mt-0`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA