import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'
import styles from '../style'

const Testimonials = () => {
  return (
    <section id='contents ' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className='w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]'>
        <h2 className={styles.heading2}>
          What people are {''}
          <br className='hidden sm:block' />
          saying about us
        </h2>

        <div className='mt-6 md:mt-0'>
          <p className={`${styles.paragraph} max-w-[450px] text-left `}>
            Everything you need to accept payments and grow your business anywhere on the palnet
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {
          feedback.map(card => <FeedbackCard key={card.id} {...card} />)
        }
      </div>
    </section>
  )
}

export default Testimonials