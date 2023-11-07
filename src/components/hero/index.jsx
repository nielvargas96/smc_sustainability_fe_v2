"use client"

import './style.scss'
import Image from 'next/image'
import ParallaxText from '../common/ParallaxText'
import { useMediaQuery } from 'usehooks-ts'

export default function Hero() {
  const matches = useMediaQuery('(min-width: 768px)')
  return (
    <section className='section-1'>
      <Image
        src='world_of_good.jpg'
        quality={100}
        priority
        fill={true}
        sizes={100}
        alt="A World of Good"
      />

      <div className='text-wrapper'>
        <h1>
          <ParallaxText baseVelocity={-1}>A World of Good&nbsp; <span className='text-stoke'>A World of Good&nbsp; </span></ParallaxText>
        </h1>
      </div>
    </section >
  )

}
