'use client'

import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
// import { useRef } from 'react';
// import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
// import Rounded from '../common/RoundedButton'
// import Magnetic from '../common/Magnetic'


import SocialsLink from './socials';
import Subsidiary from './subsidiary';

export default function Index() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end end"]
  // })

  // const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  // const y = useTransform(scrollYProgress, [0, 1], [0, 0])
  // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

  return (
    <footer className="footer-container" id="footer-container">
      <div className="footer-body">
        <div className="footer-content">
          <div className="socials">
            <SocialsLink />
          </div>

          <div className="footer-logo">
            <Link href="#" title="SMC">
              <Image src="/images/smc_logo_footer.png" width={320} height={91} alt="SMC LOGO" />
            </Link>
          </div>
          <div className="subsidiary-website">
            <Subsidiary />
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            Copyright ©2023 San Miguel Corporation All rights reserved  |   <Link href="https://www.sanmiguel.com.ph/" title="San Miguel Corporation">San Miguel Corporation</Link>   | <Link href="#" title="Website Privacy Statement">Website Privacy Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
