import { FaArrowTurnUp } from "react-icons/fa6";
import { Button } from "./Button";
import { useSectionAnimation } from "../hooks/sectionAnimation";
import { motion } from "framer-motion";

export default function CTA() {
  const { ref, isInView } = useSectionAnimation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      ref={ref}
      className="mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_1fr] lg:grid-rows-[1fr_1fr] items-center bg-gradient-to-tr from-neutral-200 to-neutral-300 py-section-y-mobile md:py-section-y px-section-x-mobile md:px-section-x gap-6 lg:gap-x-12"
    >
      <motion.h2
        initial={{ x: -20 }}
        animate={{ x: isInView ? 0 : -20 }}
        className="text-6xl uppercase font-heading mb-3 lg:text-center lg:col-start-1 lg:row-start-1 lg:place-self-end"
      >
        Ready for your next bowl?
        <span>
          <FaArrowTurnUp size={64} className="inline-block rotate-90 ml-2" />
        </span>
      </motion.h2>

      {/* Image — full height of the grid */}
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isInView ? 1 : 0,
          width: isInView ? "100%" : "95%",
        }}
        transition={{ delay: 0.3 }}
        className="w-full h-full max-h-[50vh] lg:max-h-full lg:row-span-2 lg:col-start-2 lg:row-start-1 border-2 border-black rounded-md object-cover object-center"
        src="CTA.jpg"
        alt=""
      />

      <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-2 lg:place-self-start place-items-center mx-auto">
        <h3 className="text-3xl font-extralight text-center">
          Crafted fresh. Made for you.
        </h3>
        <Button text="Order Now" color="primary" className="w-[200px]" />
      </div>
    </motion.section>
  );
}
