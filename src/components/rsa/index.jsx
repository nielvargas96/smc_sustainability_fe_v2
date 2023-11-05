"use client"

import Image from 'next/image'
import Link from 'next/link'
import Description from '@/components/common/Description'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react';
import Magnetic from '@/components/common/Magnetic'
import { useMediaQuery } from 'usehooks-ts'

import './style.scss'

export default function Rsa() {

  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start end', 'end start']
  })


  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);


  return (
    <>
      <section className='section-2'>
        <section ref={refContainer} className='card'>
          <div className='bg-gradient'>
            <Image fill={true} sizes={100} src="/images/bg_gradient.png" priority alt='Background Gradient' />
          </div>

          <div className='card-wrapper'>
            <div className='description'>
              <motion.h2 className='heading-1'>
                <Description>Message from our president and CEO</Description>
              </motion.h2>

              <div className='message'>
                <Description>
                  Our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.
                </Description>
              </div>

              <div className='persona'>
                <p className='name'>Ramon S. Ang</p>
                <p className='role'>President and Chief Operating Officer</p>
              </div>
            </div>

            <div className='img-wrapper'>
              <Image src="/images/ceo.png" priority width={557} height={594} alt='Ramon S. Ang | President and Chief Operating Officer' />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}

            transition={{ ease: "linear", duration: .25 }}
            className='action-button' style={{ x }}>
            <Magnetic>
              <Link className='btn-rounded' href="/our-approach/sustainability-governance-structure" title='Read More'>
                <span>Read more</span>
              </Link>
            </Magnetic>
          </motion.div>

        </section>

      </section >
    </>
  )
}