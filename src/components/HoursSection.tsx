import { CiClock2 } from "react-icons/ci";
import { Button } from "./Button";
import ScatterText from "./ScatterText";
import { motion } from "framer-motion";

export default function HoursSection() {
  return (
    <section
      id="hours"
      className="relative py-section-y-mobile md:py-section-y px-section-x-mobile md:px-section-x"
    >
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        src="OpeningHours.jpg"
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="flex flex-col h-full gap-8 relative z-20 ">
        <div>
          <h2 className="text-4xl md:text-6xl mb-2 font-heading text-white uppercase">
            <ScatterText>Opening Hours</ScatterText>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white text-2xl md:text-3xl font-extralight"
          >
            Open daily — because ramen waits for no one.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white px-2 py-4"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-2">
            Monday - Thursday
          </h3>
          <p className="text-3xl md:text-4xl ml-5 flex font-thin items-center gap-2">
            <CiClock2 /> 11:00 AM - 09:00 PM
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white px-2 py-4"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-2">
            Friday - Sunday
          </h3>
          <p className="text-3xl md:text-4xl ml-5 flex font-thin items-center gap-2">
            <CiClock2 /> 12:00 PM - 11:00 PM
          </p>
        </motion.div>
        <Button text="Book a table" color="secondary" />
      </div>
    </section>
  );
}
