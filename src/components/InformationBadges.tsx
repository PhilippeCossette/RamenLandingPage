import { LuFlame } from "react-icons/lu";
import { FaHands } from "react-icons/fa";
import { LuStamp } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";
import { LuLeaf } from "react-icons/lu";
import { FaBalanceScale } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { LuScroll } from "react-icons/lu";
import ScatterText from "./ScatterText";
import { motion } from "framer-motion";

const infos = [
  {
    title: "Slow-simmered",
    icon: LuFlame,
  },
  {
    title: "Handmade",
    icon: FaHands,
  },
  {
    title: "Authentic",
    icon: LuStamp,
  },
  {
    title: "Premium",
    icon: LuSparkles,
  },
  {
    title: "Fresh",
    icon: LuLeaf,
  },
  {
    title: "Balanced",
    icon: FaBalanceScale,
  },
  {
    title: "Refined",
    icon: FaRegGem,
  },
  {
    title: "Traditional",
    icon: LuScroll,
  },
];

export function InformationBadges() {
  return (
    <motion.div className="bg-neutral-100 z-10 py-section-y-mobile md:py-section-y px-section-x-mobile md:px-section-x flex flex-col items-center justify-center">
      {/* Scatter text on desktop */}
      <ScatterText className="hidden md:block text-3xl md:text-4xl font-heading uppercase">
        No shortcuts. Just authentic flavor.
      </ScatterText>
      {/* Static text on mobile */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="block md:hidden text-3xl md:text-4xl text-center font-heading uppercase"
      >
        No shortcuts. Just authentic flavor.
      </motion.h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-5 justify-center mt-10">
        {infos.map((info, index) => (
          <motion.div
            key={info.title}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <span className="border w-fit block border-black rounded-full p-4">
              <info.icon className="text-3xl" />
            </span>
            <p className="text-xs text-center uppercase font-semibold">
              {info.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
