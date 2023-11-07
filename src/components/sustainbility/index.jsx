"use client"

import { useRef } from 'react'
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion"
import './style.scss'
import SustainabilityItem from './item'
import Image from 'next/image'
import Description from '@/components/common/Description'



export default function Sustainability() {
  const ref = useRef(null);
  // const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const isInView2 = useInView(ref2, { once: true });

  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-100, 330]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const slideUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.75,
        duration: 1.25
      }
    },
    exit: { opacity: 0, y: 50 },
  }

  const slideUpVariants2 = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 30, opacity: 0 }
  }

  return (
    <section className='section-4' ref={refContainer}>
      <div className='block-content'>

        <motion.div
          variants={slideUpVariants}
          initial="initial"
          animate={isInView ? "animate" : "exit"}
          className='background-scroll' >

          <motion.div className='top' style={{ y }}>
            <Image src="sustainability_image_1.png" width={291} height={315} alt='Sustainability Background' />
            <Image src="sustainability_image_2.png" width={389} height={286} alt='Sustainability Background' />
          </motion.div>
          <motion.div className='bottom' style={{ x }}>
            <Image src="sustainability_image_3.png" width={291} height={243} alt='Sustainability Background' />
            <Image src="sustainability_image_4.png" width={315} height={243} alt='Sustainability Background' />
          </motion.div>
        </motion.div>

        <div className='description-container' >
          <div className='description'>
            <motion.h2
              variants={slideUpVariants2}
              initial="initial"
              animate={isInView ? "animate" : "exit"}
              transition={{ delay: .2 }}
              className='heading-1'>Our Sustainability Agenda and Targets</motion.h2>
            <motion.h3
              variants={slideUpVariants2}
              initial="initial"
              animate={isInView ? "animate" : "exit"}
              transition={{ delay: .3 }}
              className='heading-xl'>A WORLD OF GOOD</motion.h3>
            <motion.p
              variants={slideUpVariants2}
              initial="initial"
              animate={isInView ? "animate" : "exit"}
              transition={{ delay: .4 }}
            >We envision a world of good, where our business fosters a sustainable future that is good for the planet, good for people, and good for progress, benefiting present and future generations of Filipinos.</motion.p>
          </div>
        </div>

        <div className='wrapper' ref={ref}>
          <SustainabilityItem isInView={isInView} />
        </div>
      </div>


    </section >
  )
}

