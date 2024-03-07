import React, { useContext, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Header() {
  const refPage1 = useRef(null);
  const isInViewPage1 = useInView(refPage1, { once: true });
  const controlsPage1 = useAnimation();

  useEffect(() => {
    if (isInViewPage1) {
      controlsPage1.start("visible");
    }
  }, [isInViewPage1, controlsPage1]);

  return (
    <div>
      <motion.div
        ref={refPage1}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controlsPage1}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="min-h-screen flex items-center justify-start text-3xl"
      >
        <div className="p-5 bg-white">Header</div>
      </motion.div>
    </div>
  );
}

export default Header;
