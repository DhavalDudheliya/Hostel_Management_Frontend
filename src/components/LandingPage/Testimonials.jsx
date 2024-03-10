import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import reviews from "./reviews";

function Testimonials() {
  const ref = useRef(null);
  const isInViewPage = useInView(ref, { once: true });
  const controlsPage = useAnimation();

  const [firstPartL, setFirstPartL] = useState([]);
  const [secondPartL, setSecondPartL] = useState([]);
  const [thirdPartL, setThirdPartL] = useState([]);
  const [firstPartM, setFirstPartM] = useState([]);
  const [secondPartM, setSecondPartM] = useState([]);

  useEffect(() => {
    if (isInViewPage) {
      controlsPage.start("visible");
    }
  }, [isInViewPage, controlsPage]);

  useEffect(() => {
    // Divide reviews into three parts and two parts
    setFirstPartL(reviews.slice(0, Math.ceil(reviews.length / 3)));
    setSecondPartL(
      reviews.slice(
        Math.ceil(reviews.length / 3),
        Math.ceil((2 * reviews.length) / 3)
      )
    );
    setThirdPartL(reviews.slice(Math.ceil((2 * reviews.length) / 3)));
    setFirstPartM(reviews.slice(0, Math.ceil(reviews.length / 2)));
    setSecondPartM(reviews.slice(Math.ceil(reviews.length / 2)));
  }, []);
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controlsPage}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="welcom_title text-5xl font-bold text-center drop-shadow-text"
      >
        Read Our Raving Reviews
      </motion.div>
      <div className="px-5 py-10">
        <div className="hidden lg:flex flex-row flex-wrap gap-12 items-start justify-center">
          <section className="grid gap-10 w-full md:w-[40%] lg:w-[29%]">
            {secondPartL.map((review, index) => (
              <div className="p-6 glass flex flex-col gap-4 w-ful" key={index}>
                <p className="text-sm">"{review.review}"</p>
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">⭐ {review.rating}/5</p>
                  <p className="pr-2 font-semibold">- {review.name}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="grid gap-10 w-full md:w-[40%] lg:w-[29%]">
            {firstPartL.map((review, index) => (
              <div className="p-6 glass flex flex-col gap-4 w-ful" key={index}>
                <p className="text-sm">"{review.review}"</p>
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">⭐ {review.rating}/5</p>
                  <p className="pr-2 font-semibold">- {review.name}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="grid grid-cols-1 gap-10 w-full md:w-[40%] lg:w-[29%]">
            {thirdPartL.map((review, index) => (
              <div className="p-6 glass flex flex-col gap-4 w-ful" key={index}>
                <p className="text-sm">"{review.review}"</p>
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">⭐ {review.rating}/5</p>
                  <p className="pr-2 font-semibold">- {review.name}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="hidden sm:hidden lg:hidden md:flex flex-row flex-wrap gap-12 items-start justify-center">
          <section className="grid gap-10 w-full md:w-[40%] lg:w-[30%]">
            {secondPartM.map((review, index) => (
              <div className="p-6 glass flex flex-col gap-4 w-ful" key={index}>
                <p className="text-sm">"{review.review}"</p>
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">⭐ {review.rating}/5</p>
                  <p className="pr-2 font-semibold">- {review.name}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="grid gap-10 w-full md:w-[40%] lg:w-[30%]">
            {firstPartM.map((review, index) => (
              <div className="p-6 glass flex flex-col gap-4 w-ful" key={index}>
                <p className="text-sm">"{review.review}"</p>
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">⭐ {review.rating}/5</p>
                  <p className="pr-2 font-semibold">- {review.name}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="md:hidden sm:flex flex-row flex-wrap gap-12 items-start justify-center">
          <section className="grid gap-10 w-full md:w-[40%] lg:w-[30%]">
            {reviews.map((review, index) => (
              <div className="p-6 glass flex flex-col gap-4 w-ful" key={index}>
                <p className="text-sm">"{review.review}"</p>
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">⭐ {review.rating}/5</p>
                  <p className="pr-2 font-semibold">- {review.name}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
