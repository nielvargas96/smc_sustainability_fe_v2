"use client"

import './style.scss'
import { useRef } from 'react'
import Magnetic from '../common/Magnetic'
import Description from '@/components/common/Description'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

export default function AnnualReport() {

  const refContainer = useRef();
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (<>
    <section className="section-7" ref={refContainer}>
      <div className="block-content" >
        <div className="card">

          <div className="description-container">
            <div className="title">
              <h2>
                <span>2022</span>
                <span>Annual Report</span>
                <span>Ready for Tomorrow</span>
              </h2>
            </div>
            <p>
              With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos.
            </p>
          </div>

          <div className="img-container" >
            <Image style={{ x }} priority src="/images/annual_report.png" width={478} height={679} alt="Annual Report" />
            <Image style={{ x }} priority src="/images/annual_report_2.png" width={556} height={520} alt="Annual Report" />
            <motion.svg
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              style={{ x }} xmlns="http://www.w3.org/2000/svg" width="117" height="117" viewBox="0 0 117 117" fill="none">
              <path d="M116.58 58.5C116.58 90.5325 90.6126 116.5 58.5801 116.5C26.5476 116.5 0.580078 90.5325 0.580078 58.5C0.580078 26.4675 26.5476 0.5 58.5801 0.5C90.6126 0.5 116.58 26.4675 116.58 58.5Z" fill="#1A7B0B" fillOpacity="0.7" />
            </motion.svg>
          </div>

        </div>


        <motion.div className='action-button'
          initial={{ scale: 0, delay: 5 }}
          whileInView={{ scale: 1 }}
          style={{ x }}>
          <Magnetic>
            <Link className='btn-rounded' href="/our-approach/sustainability-governance-structure" title='Read More'>
              <span>Read more</span>
            </Link>
          </Magnetic>
        </motion.div>
      </div>

    </section>
  </>)
}