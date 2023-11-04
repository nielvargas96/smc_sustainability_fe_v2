export const variants = {
  initial: {
    pathLength: 0,
  },
  open: {
    pathLength: 1,
    transition: {
      delay: .5,
      duration: 1,
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

export const variants_4 = {
  initial: {
    scale: 0
  },
  open: {
    scale: 1,
    transition: {
      duration: .5,
      ease: "easeInOut",
    },
  },
  closed: {
    scale: 0
  }
}