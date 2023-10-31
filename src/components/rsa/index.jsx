"use client"

import Image from 'next/image'
import Link from 'next/link'
import Description from '@/components/common/Description'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import { variants } from './anim'
import Magnetic from '@/components/common/Magnetic'

import './style.scss'

export default function Rsa() {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <section className='section-2'>
        <div className='block-content '>
          <div className='two-col'>
            <motion.div
              ref={ref}
              variants={variants}
              initial="initial"
              transition="transition"
              animate={isInView ? "open" : "closed"}

              className='img-container' >
              <Image src='/images/rsa.png' height={477} width={583} quality={100} alt='Ramon S. Ang | President and Chief Operating Officer' />
            </motion.div>

            <div className='description-container'>
              <h2>
                <Description>Our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.</Description>
              </h2>
              <div className='info'>
                <p className='name'>Ramon S. Ang</p>
                <p className='role'>President and Chief Operating Officer</p>
              </div>

              <div className='action'>
                <Magnetic>
                  <Link className="btn btn-pri" href="#"> <span>Read more</span> </Link></Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}