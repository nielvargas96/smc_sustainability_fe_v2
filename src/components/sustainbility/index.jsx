"use client"

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import './style.scss'
import SustainabilityItem from './item'
import Image from 'next/image'


export default function Sustainability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <section className='section-4' ref={refContainer}>
      <div className='block-content'>

        <motion.div
          variants={slideUpVariants}
          initial="initial"
          animate={isInView ? "animate" : "exit"}
          className='background-scroll' >

          <motion.div className='top' style={{ y }}>
            <Image src="/images/sustainability_image_1.png" width={291} height={315} alt='Sustainability Background' />
            <Image src="/images/sustainability_image_2.png" width={389} height={286} alt='Sustainability Background' />
          </motion.div>
          <motion.div className='bottom' style={{ x }}>
            <Image src="/images/sustainability_image_3.png" width={291} height={243} alt='Sustainability Background' />
            <Image src="/images/sustainability_image_4.png" width={315} height={243} alt='Sustainability Background' />
          </motion.div>
        </motion.div>


        <div className='description-container'>
          <div className='description'>
            <h2 className='heading-1'>Our Sustainability Agenda and Targets</h2>
            <h3 className='heading-xl'>A WORLD OF GOOD</h3>
            <p>We envision a world of good, where our business fosters a sustainable future that is good for the planet, good for people, and good for progress, benefiting present and future generations of Filipinos.</p>
          </div>
        </div>

        <div className='wrapper' ref={ref}>
          <SustainabilityItem isInView={isInView} />
        </div>
      </div>


    </section>
  )
}

