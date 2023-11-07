"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Magnetic from '@/components/common/Magnetic'
import Link from 'next/link'
import Image from 'next/image'

export default function NewsBanner() {
  return (
    <>
      <div className="news-banner-container">
        <div className="left-content">
          <div className="description-container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              exit={{ y: 30, opacity: 0 }}
            > SMC’s LCWDC to provide 350,000 households affordable drinking water by Q1 2025 </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .3 }}
              exit={{ y: 30, opacity: 0 }}
            >
              San Miguel Corporation (SMC), through its Luzon Clean Water Development Corp. (LCWDC), will make available potable and affordable water from ...
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .4 }}
              exit={{ y: 30, opacity: 0 }}
              className='action'>
              <Magnetic><Link href="#" title="Read more" className="bordered-button">Read More</Link></Magnetic>
            </motion.div>
          </div>
        </div>
        <div className="right-content">
          <div className="image-container">
            <Image src="news_update_banner.png" fill={true} alt="News and Update" />
          </div>
        </div>

      </div>
    </>
  )
}
