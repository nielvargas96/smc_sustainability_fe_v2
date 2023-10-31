"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'



// import { slideUp } from './anim'
import Description from '@/components/common/Description'

export default function Hero() {
  return (
    <section className='section-1' >
      <div className='title-container'>
        <h1>
          <motion.div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <motion.p
              initial={{ y: '200%', x: -150 }}
              animate={{ y: 0 }}
              transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.70 }}><span> Good</span> A World <span>of Good A World A of Good</span></motion.p>
          </motion.div>

          <motion.div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <motion.p
              initial={{ y: '200%' }}
              animate={{ y: 0 }}
              transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.70, delay: .135 }}>
              <span>orld</span> of Good <span>A World A of Good</span></motion.p>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0, x: "25%" }}
            animate={{ opacity: 1, x: -250 }}
            transition={{ type: "spring", stiffness: 50, duration: .5, delay: .125 }}
          >
            A World
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-25%" }}
            animate={{ opacity: 1, x: -100 }}
            transition={{ type: "spring", stiffness: 50, duration: .5, delay: .3 }}>
            of Good
          </motion.p> */}

        </h1>





        <motion.figure
          initial={{ opacity: 0, y: 200, x: 150 }}
          animate={{ opacity: 1, y: 25, x: 150 }}
          transition={{ type: "spring", stiffness: 50, duration: .75, delay: .875 }}
        >
          <Image priority src="/images/ready_for_tomorrow.png" width={830} height={700} quality={75} alt='A World of Good' />
        </motion.figure>
      </div>
    </section >
  )
}