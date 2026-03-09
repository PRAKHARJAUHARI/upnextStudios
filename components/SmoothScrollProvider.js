'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    window.__lenis = lenis

    let rafId = null
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  return children
}

