import { useTransform, motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import ScatterText from "./ScatterText";

type CraftProcessType = {
  id: number;
  title: string;
  description: string;
  image: string;
  start: number;
  end: number;
  className?: string;
};

const craftProcesses: CraftProcessType[] = [
  {
    id: 1,
    title: "Slow-simmered broths",
    description: "12+ hours of preparation.",
    image: "Broth.jpg",
    start: 1200,
    end: -1200,
    className: "w-2/3 z-20",
  },
  {
    id: 2,
    title: "Handmade noodles",
    description: "Made fresh every day.",
    image: "Noodles.jpg",
    start: 900,
    end: -900,
    className: "mx-auto w-2/3",
  },
  {
    id: 3,
    title: "Authentic technique",
    description: "Inspired by Japan.",
    image: "Technique.jpg",
    start: 700,
    end: -2000,
    className: "ml-auto w-2/3 md:w-1/3",
  },
];

export default function CraftProcess() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.section
      id="craft"
      initial={{ opacity: 0.75, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      ref={sectionRef}
      className="relative h-[300vh] bg-red-600"
    >
      <div
        style={{
          backgroundImage: "url(RamenRestaurant.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="sticky top-0 h-screen overflow-hidden mx-auto px-4 flex flex-col gap-6 justify-center"
      >
        <motion.header className="absolute w-full left-0 z-20 flex flex-col items-center gap-3">
          <ScatterText className="hidden md:block text-4xl md:text-6xl font-heading uppercase font-bold text-white text-center">
            Our Craft Process
          </ScatterText>

          <h2 className="md:hidden text-2xl font-heading uppercase font-bold text-white text-center">
            Our Craft Process
          </h2>

          <p className="text-white font-semibold text-center">
            Crafted with patience, tradition, and precision.
          </p>
        </motion.header>
        {craftProcesses.map((card) => (
          <CraftCard key={card.id} {...card} progress={scrollYProgress} />
        ))}
      </div>
    </motion.section>
  );
}

const CraftCard = ({
  title,
  description,
  image,
  start,
  end,
  className,
  progress,
}: CraftProcessType & { progress: any }) => {
  const y = useTransform(progress, [0, 1], [start, end]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      style={{ y }}
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
      className={`relative h-[400px] flex-shrink-0 max-w-[800px] ${className}`}
    >
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-md" />
      <div
        className="absolute inset-0 bg-cover border-2 border-black bg-center rounded-md"
        style={{
          backgroundImage: `url(/${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute rounded-md inset-0 bg-black/50" />
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-white"
      >
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-sm text-center">{description}</p>
      </motion.footer>
    </motion.div>
  );
};
