
export const variants = {
  initial: { scale: 0 },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    }
  },
  closed: {
    scale: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    }
  }
}
