import React, { useContext, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function PhotoGallery() {
  const refPage4 = useRef(null);
  const isInViewPage4 = useInView(refPage4, { once: true });
  const controlsPage4 = useAnimation();

  useEffect(() => {
    if (isInViewPage4) {
      controlsPage4.start("visible");
    }
  }, [isInViewPage4, controlsPage4]);
  return (
    <div>
      <motion.div
        ref={refPage4}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controlsPage4}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="p-5 bg-white">PhotoGallery</div>
      </motion.div>
    </div>
  );
}

export default PhotoGallery;
