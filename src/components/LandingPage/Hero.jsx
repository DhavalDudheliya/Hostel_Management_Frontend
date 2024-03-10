import React, { useContext, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import index from "../../assets/Index.jpg";

function Hero() {
  const ref = useRef(null);
  const isInViewPage = useInView(ref, { once: true });
  const controlsPage = useAnimation();

  useEffect(() => {
    if (isInViewPage) {
      controlsPage.start("visible");
    }
  }, [isInViewPage, controlsPage]);

  return (
    <div className="py-10 lg:py-20 flex flex-col lg:flex-row gap-10 items-center">
      <motion.section className="flex flex-col gap-4 lg:w-1/2">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-4xl lg:text-left text-center font-bold drop-shadow-text italic"
        >
          Welcome to
          <div className="">Swaminarayan Chhatralaya</div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="welcom_title text-3xl font-bold my-4 lg:text-left text-center"
        >
          "Your Home Away from Home!"
        </motion.div>
        <motion.p
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-4 text-center lg:text-left"
        >
          Discover a haven of comfort, camaraderie, and adventure at
          Swaminarayan Chhatralaya. Nestled in the heart of Nadiad, our hostel
          invites you to experience a blend of vibrant cultures, warm
          hospitality, and affordable luxury.
        </motion.p>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-bold text-center lg:text-left"
        >
          🌟 Why Choose Swaminarayan Chhatralaya?
        </motion.div>
        <motion.ul
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="list-disc pl-12 flex flex-col items-center lg:items-start gap-2"
        >
          <li>Centrally located with easy access to Universities</li>
          <li>Comfortable and budget-friendly accommodations</li>
          <li>
            Friendly staff ready to assist and create a home away from home.
          </li>
        </motion.ul>
      </motion.section>

      {/* Image section */}
      <section className="flex items-start lg:w-1/2 p-5 md:pl-10">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="p-1 img-border rounded-full"
        >
          <motion.img
            src={index}
            alt="index"
            className="rounded-full sm:h-60 md:h-80 shadow-xl"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
