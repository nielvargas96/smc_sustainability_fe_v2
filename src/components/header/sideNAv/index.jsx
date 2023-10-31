import React, { useState } from 'react'
import './style.scss';
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from 'next/link';
import Curve from './Curve';
import { navItems } from '@/api/api';
import Others from './Others'


export default function Index() {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(false);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <motion.aside data-lenis-prevent variants={menuSlide} initial="initial" animate="enter" exit="exit" className="side-nav-menu">
      <div className="side-nav-body">

        <div className='nav-head'>
          <p>Navigation</p>
        </div>

        <div className="nav">
          {navItems.map((data, index) => (
            <div key={index} onClick={() => toggleAccordion(index)} className="side-menu-wrapper">

              {data.title === "News & Update" ? (
                <>
                  <span className='side-menu-item'><Link href={data.href} title={data.title}>{data.title}</Link></span>
                </>
              ) : (
                <>
                  <span className='side-menu-item'>
                    <span>{data.title}</span>
                    <svg className={`${openAccordion === index ? 'arrowActive' : 'arrow'}`} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </>
              )}

              {/* SUB NAVIGATION */}
              <AnimatePresence mode="wait">
                {openAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: "0" }}
                    animate={{ opacity: 1, height: "100%", overflow: "hidden" }}
                    exit={{ opacity: 0, height: "0" }}
                    className={`${openAccordion === index ? "active" : ''}`}
                  >

                    {data.subNav?.map((subNavItem, subIndex) => (
                      <motion.div
                        key={subIndex}
                        className="side-item"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: subIndex * 0.1 }}
                      >
                        <Link href={subNavItem.href} className={subNavItem.href === pathname ? "activePage link" : 'link'}>
                          {subNavItem.title}
                        </Link>
                      </motion.div>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>


            </div>

          ))}

        </div>

        <div className='footer-head'>
          <p>MAIN SITE - SAN MIGUEL CORPORATION</p>
        </div>
        {/* Other linkout */}
        <Others />


      </div>
      <Curve />
    </motion.aside>
  )
}