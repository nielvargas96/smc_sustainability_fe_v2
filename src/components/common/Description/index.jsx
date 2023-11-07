'use client'

import './style.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './anim';


export default function Index({ children }) {

  const description = useRef(null);
  // const isInView = useInView(description);
  const isInView = useInView(description, { once: true, amount: 0 });

  return (
    <div ref={description} className='text-description'>
      <div className='body'>
        <div className='text'>
          {
            children.split(" ").map((word, index) => {
              return (
                <span key={index} className='textMask'>
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span>
                </span>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
