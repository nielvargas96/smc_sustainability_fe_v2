'use client'

import './style.scss'
import { useEffect, useState, useRef } from 'react';
import Nav from './sideNAv';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Magnetic from '../common/Magnetic';
import { navItems } from '@/api/api'
import { variantsNavHide } from './anim';
// import Rounded from '@/components/common/RoundedButton';

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const sideNavRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isActive && sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsActive(false);
        document.body.removeAttribute("data-lenis-prevent")
      }
    };

    const handleClickInside = (event) => {
      if (isActive && event.target.tagName === 'A' && event.target.getAttribute('href')) {
        setIsActive(false);
        document.body.removeAttribute("data-lenis-prevent")
      }
    }

    if (isActive) {
      // Add event listeners when the burger menu is active
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('click', handleClickInside);
      document.body.classList.add('active');
    }

    return () => {
      // Remove the event listeners when the component unmounts or the menu is no longer active
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickInside);
      document.body.classList.remove('active');
    };
  }, [isActive]);

  const { scrollY } = useScroll();
  const [hideNav, setHideNav] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    // const prev = scrollY.getPrevious();
    if (value > "150") {
      setHideNav(true)
    } else {
      setHideNav(false)
    }
  })


  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <div className="logo">
          <Link href="/" title='San Miguel Corporation'>
            <Image src='/images/smc_logo.svg' width={63} height={65} quality={100} priority alt='SMC Logo' />
            <Image src='/images/smc_logo.svg' width={48} height={80} quality={75} priority alt='SMC Logo' />
          </Link>
        </div>

        <motion.div
          variants={{
            visible: { y: 0, opacity: 1, transition: { delay: .2 }, zIndex: '1' },
            hidden: { y: "-100px", opacity: 0, zIndex: '-100' }
          }}

          animate={hideNav === true ? "hidden" : "visible"}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="nav-menu-container"
        >

          <div className="nav-menu">
            {navItems.map((e, i) => (
              <div key={i} className='menu-item'>

                <Link className='item' href={e.href}>
                  {e.title === "News & Update" ? (
                    <>
                      <span>{e.title}</span>
                    </>
                  ) : (
                    <>
                      <span>{e.title}</span>
                      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="#30302C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </Link>

                {e.subNav && e.subNav.length > 0 && (
                  <div className='sub-menu'
                  >
                    {e.subNav.map((e, i) => (
                      <div className='sub-menu-item' key={i}>
                        { }
                        <Link className='link item-2' href={e.href}>
                          <span>{e.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            visible: { scale: 1, transition: { delay: .2 } },
            hidden: { scale: 0 }
          }}
          initial={{ scale: 0 }}
          animate={hideNav === true ? "visible" : "hidden"}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className='burger-menu-container'
        >

          <Magnetic className="">
            <div className='burger-menu'>
              <div onClick={() => {
                setIsActive(!isActive);
                // Add a class to the body element when the button is clicked
                if (!isActive) {
                  document.body.classList.add('active');
                  document.body.setAttribute("data-lenis-prevent", true)
                } else {
                  document.body.classList.remove('active');
                  document.body.removeAttribute("data-lenis-prevent")
                }
              }}>

                <div className='burger-button'>
                  <div className={`burger ${isActive ? 'burgerActive' : ""}`}></div>
                </div>
              </div>
            </div>
          </Magnetic>
        </motion.div>


      </header >

      {/* SIDE NAVIGATION */}
      <aside className='side-nav-cointainer' ref={sideNavRef} >
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
      </aside >
    </>
  )
}
