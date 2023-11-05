// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect } from "react";

// export default function AnimatedCounter({ children }) {
//   // if (value === null || value === undefined || value === '') {
//   //   return null; // Don't render anything if value is not provided
//   // }
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, Math.round);

//   useEffect(() => {
//     const animation = animate(count, children, { duration: .5 });

//     return animation.stop;
//   }, []);

//   return <motion.h1>{rounded}</motion.h1>;
// }
