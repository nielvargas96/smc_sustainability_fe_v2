export const variants = {
  initial: {
    pathLength: 0,
  },
  open: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
    delay: 1
  },
  closed: {
    pathLength: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  }
}