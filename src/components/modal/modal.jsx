"use client"

import Link from 'next/link'
import './modal.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useModal } from './modalContext'


export default function Modal() {
  // { data, isOpen, setIsOpen }
  const { isModalOpen, closeModal, modalData } = useModal();


  return (
    <AnimatePresence mode="wait">
      {
        isModalOpen &&
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          whileHover={{ cursor: "pointer" }}
          onClick={() => closeModal()}
          className="modal-container"
          id="modal-container">

          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            whileHover={{ cursor: "auto" }}
            exit={{ y: 100 }}
            onClick={(e) => e.stopPropagation()}
            className="modal" >
            <div className="modal-header">
              <div className="modal-title">
                <h2 className="heading-1">{modalData.title}</h2>
              </div>

              <button className="modal-close-button" onClick={() => closeModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" fill="none">
                  <path d="M10.1386 19.8614L19.8613 10.1387" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.1386 10.1386L19.8613 19.8613" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="modal-body">
              {/* <p><b>{data.title}</b></p> */}
              {/* <p>Recycle coal ash as an aggregate material for cement plants </p> */}
              <h1>
                {modalData.body.map(item => (
                  <div key={item.text}>
                    <p>{item.text}</p>
                  </div>
                ))}</h1>

            </div>

            <div className="modal-footer">

              Footer
            </div>

          </motion.div>
        </motion.section >

      }
    </AnimatePresence>
  )
}