"use client"

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './style.scss'

export default function FooterCicle({ containerRef }) {
  const container = useRef(containerRef);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <motion.div ref={container} style={{ height }} className='circleContainer'>
      <div className='circle'></div>
    </motion.div>
  )
}