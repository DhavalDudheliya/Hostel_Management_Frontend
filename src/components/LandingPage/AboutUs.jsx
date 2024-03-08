import React, { useContext, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import index from "../../assets/Index.jpg";

function AboutUs() {
  const ref = useRef(null);
  const isInViewPage = useInView(ref, { once: true });
  const controlsPage = useAnimation();

  useEffect(() => {
    if (isInViewPage) {
      controlsPage.start("visible");
    }
  }, [isInViewPage, controlsPage]);

  return (
    <div className="py-10 lg:py-28 flex flex-col lg:flex-row gap-10 lg:mb-20">
      {/* Image section */}
      <section className="flex items-start lg:w-1/2 md:pr-10">
        <div className="lg:relative">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, rotate: -10 },
            }}
            initial="hidden"
            animate={controlsPage}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-1 img-border rounded-3xl hidden lg:block"
          >
            <img
              src={index}
              alt="index"
              className="rounded-3xl shadow-xl right-10 lg:h-60"
            />
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
            className="p-1 img-border rounded-3xl w-full lg:absolute left-56 top-44"
          >
            <img
              src={index}
              alt="index"
              className="rounded-3xl shadow-xl h-60 z-1"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, rotate: 10 },
            }}
            initial="hidden"
            animate={controlsPage}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="p-1 img-border rounded-3xl w-full hidden lg:block lg:absolute top-[350px]"
          >
            <img
              src={index}
              alt="index"
              className="rounded-3xl shadow-xl h-60"
            />
          </motion.div>
        </div>
      </section>

      <motion.section className="flex flex-col gap-4 lg:w-1/2 py-5">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="welcom_title text-5xl font-bold my-4 lg:text-left text-center drop-shadow-text"
        >
          Our Mission
        </motion.div>
        <motion.p
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4 text-center lg:text-left"
        >
          At The BAPS Swaminarayan Chhatralaya, we believe in{" "}
          <span className="welcom_title guj">'સત્સંગ સાથે શિક્ષણ'</span> . Our
          journey began in 1991, and since then, we have been provided the right
          mix of comfort, inspiration, and guidance for students to progress
          academically and spiritually.
        </motion.p>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-xl font-bold text-center lg:text-left"
        >
          🌟 What Sets Us Apart :
        </motion.div>
        <motion.ul
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="list-disc pl-12 flex flex-col items-center lg:items-start gap-2"
        >
          <li>
            Our hostel provides affordable room and board for college students
            and delicious food in a beautiful campus with lush greenery.
          </li>
          <li>
            Study circles and academic assistance programs are provided to
            students for enhancing their learning experience.
          </li>
          <li>
            3. Sadhus oversee the students and provide basic academic and
            spiritual guidance. Students begin each morning with aarti and are
            encouraged to attend daily sabhas or assemblies in the evening.
          </li>
        </motion.ul>
      </motion.section>
    </div>
  );
}

export default AboutUs;
