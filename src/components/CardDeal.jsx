import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>

        <h2 className={styles.heading2}>
          Find a better card deal
          <br className='hidden sm:block' />
          in few easy steps
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore optio excepturi, laboriosam quidem est! Earum, recusandae. Maxime, esse velit?
        </p>
        
      </div>


      <div className={layout.sectionImg}>
        <img src={card} className='w-[100%] h-[100%] relative z-[5]' alt={card}/>
      </div>
    </section>
  )
}

export default CardDeal