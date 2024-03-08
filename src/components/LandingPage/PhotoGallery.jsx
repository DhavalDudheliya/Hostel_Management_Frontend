import React, { useContext, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import index from "../../assets/Index.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    
    <motion.div
      ref={refPage4}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={controlsPage4}
      transition={{
        ease: "linear",
        duration: 1,
        x: { duration: 1 },
      }}
      className="py-10 lg:py-20 flex items-center justify-center"
    >
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          <CarouselItem key={index}>
            <div className="p-1 img-border rounded-3xl">
              <img src={index} alt="index" className="rounded-3xl img-border" />
            </div>
          </CarouselItem>
          <CarouselItem key={index}>
            <div className="p-1 img-border rounded-3xl">
              <img src={index} alt="index" className="rounded-3xl img-border" />
            </div>
          </CarouselItem>
          <CarouselItem key={index}>
            <div className="p-1 img-border rounded-3xl">
              <img src={index} alt="index" className="rounded-3xl img-border" />
            </div>
          </CarouselItem>
          <CarouselItem key={index}>
            <div className="p-1 img-border rounded-3xl">
              <img src={index} alt="index" className="rounded-3xl img-border" />
            </div>
          </CarouselItem>
          <CarouselItem key={index}>
            <div className="p-1 img-border rounded-3xl">
              <img src={index} alt="index" className="rounded-3xl img-border" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}

export default PhotoGallery;
