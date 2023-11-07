"use client"

import React, { createContext, useLayoutEffect, useState } from 'react'

export const SmoothScrollContext = createContext({
  scroll: null,
})

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null)

  useLayoutEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector('[data-scroll-container]') ?? undefined,
              smooth: true,
              lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
              multiplier: 1.4, // Effect Multiplier
              reloadOnContextChange: true,
              touchMultiplier: 2,
              smoothMobile: 0,
              smartphone: {
                smooth: !0,
                breakpoint: 767
              },
              tablet: {
                smooth: !1,
                breakpoint: 1024
              },
              ...options,
            })
          )
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
