export const variants = {
  initial: {
    pathLength: 0,
    display: 'none'
  },
  open: {
    display: 'block',
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 1.5,
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
  },
  test: {
    opacity: 0,
    pathLength: 0,
    transition: {
      delay: 1,
      duration: 1.5,
      ease: "easeInOut",
    },
    repeat: Infinity,
    repeatType: "loop",
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
      delay: 1,
      duration: 1.25,
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
      duration: 1,
      ease: "easeInOut",
    },
  },
  closed: {
    scale: 0
  }
}