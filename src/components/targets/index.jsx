"use client"

import './style.scss'
import Image from 'next/image'
import { variants_4, variants } from './anim'
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from 'react'
import Modal from '../modal/modal'
import Link from 'next/link'
import { modalSustainabilityTargets } from '@/api/api';
import { useModal } from '../modal/modalContext'

export default function Targets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // THIS CODE IS FOR MODAL HOOK
  const { openModal } = useModal();
  const handleOpenModal = (id) => {
    let data = modalSustainabilityTargets.find((data) => data.id === id);
    // setSelectedData(data);
    // setIsOpen(true)

    openModal(data);
  };

  // const openModal = (id) => {
  //   const data = modalSustainabilityTargets.find((data) => data.id === id);
  //   setSelectedData(data);
  //   setIsOpen(true)
  // };



  return (<>
    <section className='section-5' >
      <div className='block-content'>
        <h2 className='heading-1'>Our Sustainability Targets</h2>

        <div className="targets-container" ref={ref}>
          <div className="card-item">
            <div className="head">
              <div className='img-icon'>
                <motion.svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle
                    variants={variants_4}
                    animate={isInView ? "open" : "closed"}

                    cx="41" cy="41" r="41" fill="#54AF46" />

                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M66 36C66 36 62.5 15 40.5 15C28.0454 15 20.8034 22.1601 17.5 29C14.8357 34.5168 15 40 15 40" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M11 36L15 41.5L19.5 36.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M15.5 46.5C15.5 46.5 19 67.5 41 67.5C53.4546 67.5 60.6966 60.3399 64 53.5C66.6643 47.9832 66.5 42.5 66.5 42.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M70.5 46.5L66.5 41L62 46" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M36 44.5L29 38L24 43L36 54.5L57.5 33L52.5 28L36 44.5Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </div>
              <div className='number-count'>
                <span>1</span>
              </div>
            </div>

            <div className="body">
              <h3 className='green'>Establish a circular economy approach by 2040</h3>
              <p>Contributing to the following SDGs</p>
            </div>

            <div className='img-container'>
              <Image src='economy-cards.png' width={301} height={76} quality={100} alt='Establish a circular economy approach by 2040' />
            </div>

            <div className='action'>
              {/* {modalSustainabilityTargets.map((data) => ( */}
              <motion.div

                initial={{ scale: 0 }}
                whileInView={{ scale: 1, }}
                transition={{ ease: "linear", duration: .25 }}
                className='btn-toggle-modal'
                // onClick={() => openModal(1)}
                onClick={() => handleOpenModal(1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#2E2E2F" />
                </svg>
              </motion.div>
              {/* ))} */}
            </div>

            {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={selectedData} /> */}

          </div>

          <div className="card-item">
            <div className="head">
              <div className='img-icon'>
                <motion.svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle
                    variants={variants_4}
                    animate={isInView ? "open" : "closed"}
                    cx="41" cy="41" r="41" fill="#54AF46" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M24.5256 48.4082C24.5256 48.4082 21.5256 40.4082 29.5256 34.4082C33.8823 31.1406 41.0255 30.6706 48.5255 29.4082C53.2343 28.6156 54.5256 27.4082 54.5256 27.4082C54.5256 27.4082 56.0256 33.9082 51.0256 45.4082C49.5256 48.4082 45.0256 53.2898 41.0256 54.4082C34.5196 56.2272 27.0256 53.9082 27.0256 53.9082M27.0256 53.9082C27.0256 53.9082 28.5256 47.9082 34.0256 42.4082C40.0256 36.4082 45.5256 35.4082 45.5256 35.4082M27.0256 53.9082C27.0256 53.9082 25.5256 59.9082 29.5256 63.4082C33.5256 66.9082 39.5256 66.4082 39.5256 66.4082C39.5256 66.4082 47.5256 66.5278 54.5256 62.4082C60.1821 59.0791 65.9113 50.9334 66.5256 43.4082C67.309 33.8102 62.5256 27.4082 62.5256 27.4082C62.5256 27.4082 56.5256 18.4082 45.5256 16.4082C34.5256 14.4082 26.0256 20.4082 26.0256 20.4082C26.0256 20.4082 15.5256 27.4082 15.0256 39.4082C14.5256 51.4082 21.5256 57.9082 21.5256 57.9082" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </div>
              <div className='number-count'>
                <span >2</span>
              </div>
            </div>

            <div className="body">
              <h3 className='green'>Net Zero by 2050</h3>
              <p>Contributing to the following SDGs</p>

            </div>

            <div className='img-container'>
              <Image src='net_zero_cards.png' height={75} width={301} alt='Net Zero by 2050' />
            </div>

            <div className='action'>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                onClick={() => handleOpenModal(2)}
                className='btn-toggle-modal'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#2E2E2F" />
                </svg>
              </motion.div>
            </div>

          </div>

          <div className="card-item">
            <div className="head">
              <div className='img-icon'>
                <motion.svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle
                    variants={variants_4}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    cx="41" cy="41" r="41" fill="#F58231" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M34.2432 48.629C34.2432 48.629 31 48.0968 31 45.4355C31 42.7742 31 39.5806 31 35.3226C31 31.0645 38.5676 30 41.2703 30C43.973 30 51 31.0645 51 35.3226C51 39.5806 51 42.7742 51 45.4355C51 48.0968 47.7568 48.629 47.7568 48.629M34.7838 38.5161V63M47.2162 38.5161V63M41.2703 48.0968V63" stroke="white" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="round" />
                  <motion.rect
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    x="36.9" y="16.9" width="7.2" height="10.2" rx="3.6" stroke="white" strokeWidth="1.8" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M27.5 31L20.5 24M20.5 24V29M20.5 24H25.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M25.8985 41.0203L16 40.8779M16 40.8779L19.4843 44.464M16 40.8779L19.586 37.3936" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M27.9998 50L21.0117 57.012M21.0117 57.012L26.0117 57.0034M21.0117 57.012L21.0032 52.012" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M53.5117 31L60.5117 24M60.5117 24V29M60.5117 24H55.5117" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M55.1132 41.0203L65.0117 40.8779M65.0117 40.8779L61.5274 44.464M65.0117 40.8779L61.4257 37.3936" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M53.0119 50L60 57.012M60 57.012L55 57.0034M60 57.012L60.0085 52.012" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>

              </div>
              <div className='number-count'>
                <span>3</span>
              </div>
            </div>

            <div className="body">
              <h3 className='orange'>At least 15 million uplifted people by 2030</h3>
              <p>Contributing to the following SDGs</p>
            </div>

            <div className='img-container'>
              <Image src='uplifted_cards.png' width={432} height={70} alt='At least 15 million uplifted people by 2030' />
            </div>

            <div className='action'>
              <motion.div

                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                onClick={() => handleOpenModal(3)}
                className='btn-toggle-modal'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#2E2E2F" />
                </svg>
              </motion.div>
            </div>
          </div>

          <div className="card-item">
            <div className="head">
              <div className='img-icon'>
                <motion.svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle
                    variants={variants_4}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    cx="41" cy="41" r="41" fill="#00A3D5" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M40.1729 16.2612C40.1729 16.2612 31.673 11.7612 25.6729 19.7612C24.202 21.7224 23.4488 23.9864 23.173 26.7612M23.6729 37.7612C23.6729 37.7612 22.6533 31.9922 23.173 26.7612M23.173 26.7612C23.173 26.7612 33.7883 24.4954 44.673 26.2612C52.8609 27.5896 61.4532 32.6829 64.673 36.7612C72.173 46.2612 64.173 52.7612 64.173 52.7612" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M35.1738 25.2613C35.1738 25.2613 39.356 21.2397 45.6738 19.2613C51.9916 17.2829 60.1738 17.2613 63.1738 24.7613C65.6738 31.2613 60.6954 42.4184 56.1738 48.2613C49.7216 56.599 42.6738 60.7613 42.6738 60.7613" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M45.1738 19.7612C45.1738 19.7612 47.6738 21.7612 49.1738 23.7612C50.6738 25.7612 52.1738 28.2612 52.1738 28.2612" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M41.6738 50.2612L49.4064 42.0215C50.2179 41.169 50.6738 40.0128 50.6738 38.8071C50.6738 37.6015 50.2179 36.4452 49.4064 35.5927C48.5949 34.7402 47.4943 34.2612 46.3466 34.2612C45.199 34.2612 44.0983 34.7402 43.2868 35.5927L41.6738 37.1708L40.0609 35.5927C39.2493 34.7402 38.1487 34.2612 37.001 34.2612C35.8534 34.2612 34.7528 34.7402 33.9412 35.5927C33.1297 36.4452 32.6738 37.6015 32.6738 38.8071C32.6738 40.0128 33.1297 41.169 33.9412 42.0215C34.7528 42.8741 37.8075 46.1414 37.8075 46.1414L41.6738 50.2612Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <motion.path
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    d="M56.1736 34.7612C56.1736 34.7612 60.5626 46.4095 59.4765 55.7612M25.6736 44.7612C25.6736 44.7612 30.0579 56.219 37.5202 62.7612M59.4765 55.7612C58.8827 60.874 56.6523 65.3002 51.1736 66.7612C45.9368 68.1577 41.3279 66.0993 37.5202 62.7612M59.4765 55.7612C59.4765 55.7612 46.8446 57.7729 36.6735 55.7612C26.5617 53.7612 18.917 47.7495 16.6736 43.7612C12.1736 35.7612 18.1736 29.7612 18.1736 29.7612M37.5202 62.7612C37.5202 62.7612 26.1735 69.7612 20.1735 58.7612C14.1735 47.7612 29.6735 30.2612 29.6735 30.2612" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>

              </div>
              <div className='number-count'>
                <span >4</span>
              </div>
            </div>

            <div className="body">
              <h3 className='blue'>A fully sustainable and ethical supply chain by 2040</h3>
              <p>Contributing to the following SDGs</p>
            </div>
            <div className='img-container'>
              <Image src='supply_chain_cards.png' width={230} height={76} alt='A fully sustainable and ethical supply chain by 2040' />
            </div>

            <div className='action'>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                onClick={() => handleOpenModal(4)}
                className='btn-toggle-modal'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#2E2E2F" />
                </svg>
              </motion.div>
            </div>

          </div>


        </div>
      </div>
    </section >
  </>)
}