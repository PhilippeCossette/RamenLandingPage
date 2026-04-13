import { useSectionAnimation } from "../hooks/sectionAnimation";
import { Button } from "./Button";
import { motion } from "framer-motion";

export function NewHero() {
  const { ref, isInView } = useSectionAnimation();
  return (
    <section className="bg-primary  flex flex-col items-center py-10 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl px-section-x-mobile md:px-section-x pb-section-y-mobile md:pb-section-y flex flex-col items-center justify-between gap-6"
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ lineHeight: "0.75" }}
          className="text-center translate-y-14 z-40 uppercase font-heading font-bold
          text-[clamp(4rem,12vw,12rem)]"
        >
          Naruto <br /> Ramen
        </motion.h1>

        {/* HERO CARD */}
        <div className="relative w-full max-w-6xl aspect-[16/12] max-h-[60vh]">
          {/* shadow */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-md bg-black" />

          {/* image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-10 rounded-md"
            style={{ backgroundImage: "url(/BackGroundHero.jpg)" }}
          />

          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />

          {/* content */}
          <div className="relative z-20 flex flex-col justify-between items-center h-full p-[10%]">
            {/* buttons */}
            <div className="flex gap-3 sm:gap-5 mt-5 md:mt-0">
              <Button
                text="Order Now"
                color="secondary"
                className="md:w-[200px]"
              />
              <Button
                text="Learn More"
                color="primary"
                className="md:w-[200px]"
              />
            </div>

            {/* bottom text */}
            <div className="flex flex-col items-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="uppercase text-white font-heading
              text-[clamp(1.5rem,4vw,4rem)]"
              >
                Savory Ramen
              </motion.h2>

              <div className="flex flex-wrap gap-2 sm:gap-5 justify-center">
                {["Real Ingredients", "Authentic", "Delicious"].map(
                  (text, index) => (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      key={text}
                      className="text-white uppercase font-semibold
                    text-[clamp(0.7rem,1.2vw,1.3rem)]"
                    >
                      {text}
                    </motion.p>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
