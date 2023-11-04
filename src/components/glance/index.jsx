"use client"

import Image from 'next/image'
import './style.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import AnimatedCounter from '@/components/common/AnimatedCounter'

export default function SustainabilityGlance({ value }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordionItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="42" height="35" viewBox="0 0 42 35" fill="none">
            <path d="M33.9334 30.3997H39.8803C40.4989 30.3997 41 30.9008 41 31.5184V33.6809H1V31.5184C1 30.9008 1.50108 30.3997 2.11863 30.3997H21.7219M2.52409 30.3997V28.235C2.52409 27.6175 3.02516 27.1164 3.64271 27.1164H38.3573C38.9748 27.1164 39.4759 27.6175 39.4759 28.235V30.3997M4.13719 27.1164V24.9539C4.13719 24.3352 4.63826 23.8342 5.25581 23.8342H36.7442C37.3617 23.8342 37.8628 24.3341 37.8628 24.9539V27.1164M35.3629 12.9194V23.8353M32.6367 12.9194V23.8353M29.9105 12.9194V23.8353M27.1843 12.9194V23.8353M14.8157 12.9194V23.8353M12.0895 12.9194V23.8353M9.36328 12.9194V23.8353M6.63706 12.9194V23.8353M22.6559 7.6988C22.6559 6.78347 21.9153 6.04175 21 6.04175C20.0847 6.04175 19.344 6.78347 19.344 7.6988C19.344 8.61304 20.0847 9.35474 21 9.35474C21.9153 9.35474 22.6559 8.61413 22.6559 7.6988ZM19.866 1.37168L4.91078 12.3513C4.66574 12.5315 4.7932 12.9205 5.09648 12.9205H36.9035C37.2068 12.9205 37.3343 12.5315 37.0892 12.3513L22.134 1.37168C21.4604 0.876106 20.5407 0.876106 19.866 1.37168Z" stroke="#30302C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> */}
  const accordionItems = [
    {
      title: 'Economic',
      details: [
        {
          icon: 'test',
          amount: 'P 1,516B+',
          desc: 'Direct economic value generated'
        }
      ]
    },
    {
      title: 'Environment',
      details: [
        {
          icon: 'ICON2',
          title: 'TITLE',
          desc: 'DESCRIPTION'
        }, {
          icon: 'ICON2',
          title: 'TITLE',
          desc: 'DESCRIPTION'
        }
      ]
    },
    {
      title: 'Governance',
      details: {
        icon: 'ICON3',
        title: 'TITLE',
        desc: 'DESCRIPTION'
      }
    },
    {
      title: 'Social',
      details: {
        icon: 'ICON4',
        title: 'TITLE',
        desc: 'DESCRIPTION'
      }
    },
  ];

  return (
    <>
      <section className="section-6">
        <div className="background-container">
          <Image src="/images/sustainability_glance_bg.png" fill={true} sizes="100" alt="Background" />
        </div>
        <div className="block-content">
          <div className="header-title">
            <h2>Sustainability at a Glance</h2>
          </div>

          <div className="accordion-container">
            {accordionItems.map((item, index) => (
              <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="accordion-title" onClick={() => toggleAccordionItem(index)}>
                  <h3>{item.title}</h3>
                  <div className={`acc-arrow ${activeIndex === index ? 'active' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none">
                      <path d="M14.1794 6.69705L8.95215 11.9243C8.9036 11.9729 8.84595 12.0115 8.7825 12.0378C8.71904 12.0641 8.65102 12.0776 8.58232 12.0776C8.51363 12.0776 8.44561 12.0641 8.38215 12.0378C8.31869 12.0115 8.26104 11.9729 8.21249 11.9243L2.98522 6.69705C2.88713 6.59896 2.83203 6.46593 2.83203 6.32722C2.83203 6.1885 2.88713 6.05547 2.98522 5.95739C3.0833 5.8593 3.21634 5.8042 3.35505 5.8042C3.49376 5.8042 3.62679 5.8593 3.72488 5.95739L8.58232 10.8155L13.4398 5.95739C13.4883 5.90882 13.546 5.8703 13.6094 5.84401C13.6729 5.81773 13.7409 5.8042 13.8096 5.8042C13.8783 5.8042 13.9463 5.81773 14.0097 5.84401C14.0732 5.8703 14.1309 5.90882 14.1794 5.95739C14.228 6.00595 14.2665 6.06361 14.2928 6.12707C14.3191 6.19052 14.3326 6.25853 14.3326 6.32722C14.3326 6.3959 14.3191 6.46391 14.2928 6.52737C14.2665 6.59082 14.228 6.64848 14.1794 6.69705Z" fill="#2E2E2F" />
                    </svg>
                  </div>
                </div>

                <div className={`accordion-details ${activeIndex === index ? 'active' : ''}`}  >
                  <div className="acc-list">
                    {Array.isArray(item.details) && item.details.map((detail, index) => (
                      <div key={index} className="acc-item">
                        <div className="icons">
                          {detail.icon}
                        </div>
                        <div className="desc">
                          <span className="heading-3">{detail.amount} </span>
                          <p>{detail.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    
                  )}
                </AnimatePresence> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}