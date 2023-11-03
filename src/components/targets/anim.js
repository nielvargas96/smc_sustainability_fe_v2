export const variants = {
  initial: {
    pathLength: 0
  },
  open: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 2.5,
      ease: "easeInOut",
    },
    repeat: Infinity,
    repeatType: "loop",
  },
  closed: {
    pathLength: 0,
    transition: {
      duration: 0,
      ease: "easeInOut",
    }
  }
}