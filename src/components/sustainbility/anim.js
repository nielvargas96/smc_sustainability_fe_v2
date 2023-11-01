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
    repeat: Infinity,
    repeatType: "loop",
    delay: 1
  },
  closed: {
    pathLength: 0,
    transition: {
      duration: 0,
      ease: "easeInOut",
    }
  }
}
