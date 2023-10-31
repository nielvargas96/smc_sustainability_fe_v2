export const slideUp = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 0.45 }
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 0.45 }
  }
}