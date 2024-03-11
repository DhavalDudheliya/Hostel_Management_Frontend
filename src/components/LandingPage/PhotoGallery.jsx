import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import index from "../../assets/Index.jpg";
import garden1 from "../../assets/garden1.jpg";
import garden2 from "../../assets/garden2.jpg";
import garden3 from "../../assets/garden3.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function PhotoGallery() {
  const ref = useRef(null);
  const isInViewPage = useInView(ref, { once: true });
  const controlsPage = useAnimation();

  useEffect(() => {
    if (isInViewPage) {
      controlsPage.start("visible");
    }
  }, [isInViewPage, controlsPage]);

  return (
    <>
      <div className="py-10 lg:py-20 flex flex-col items-center justify-start">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="welcom_title text-5xl font-bold my-4  text-center drop-shadow-text"
        >
          Our Photo Gallary
        </motion.div>
        <div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsPage}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="py-10 lg:py-20 flex items-center justify-center"
        >
          <Carousel className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1 img-border rounded-3xl">
                  <img
                    src={garden2}
                    alt="index"
                    className="rounded-3xl w-full object-cover h-[250px] md:h-[470px] img-border"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1 img-border rounded-3xl">
                  <img
                    src={garden1}
                    alt="index"
                    className="rounded-3xl w-full h-[250px] md:h-[470px] img-border"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1 img-border rounded-3xl">
                  <img
                    src={garden3}
                    alt="index"
                    className="rounded-3xl w-full h-[250px] md:h-[470px] img-border"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1 img-border rounded-3xl">
                  <img
                    src={index}
                    alt="index"
                    className="rounded-3xl h-[250px] md:h-[470px] w-full object-cover img-border"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1 img-border rounded-3xl">
                  <img
                    src={garden1}
                    alt="index"
                    className="rounded-3xl w-full h-[250px] md:h-[470px] img-border"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default PhotoGallery;
