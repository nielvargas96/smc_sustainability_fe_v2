export const variants = {
  initial: {
    pathLength: 0
  },
  open: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: .25,
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

export const variants_2 = {
  initial: {
    opacity: 0,
    x: 50
  },
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: 50
  }
}

export const variants_3 = {
  initial: {
    display: 'none',
    pathLength: 0,
  },
  open: {
    display: 'block',
    pathLength: 1,
    transition: {
      delay: 1.5,
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