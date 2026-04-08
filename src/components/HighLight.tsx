import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "./Button";
import { useSectionAnimation } from "../hooks/sectionAnimation";
import { a, del } from "framer-motion/client";

type HighLightCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const highlights: HighLightCard[] = [
  {
    id: 1,
    title: "Tonkotsu",
    description: "Rich, creamy pork bone broth.",
    image: "Tonkotsu.jpg",
  },
  {
    id: 2,
    title: "Shoyu",
    description: "Light soy-based classic.",
    image: "Shoyu.jpg",
  },
  {
    id: 3,
    title: "Miso",
    description: "Bold, deep umami flavor.",
    image: "Miso.jpg",
  },
];

export default function HighLight() {
  const { ref, isInView } = useSectionAnimation();
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0.75, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-section-x-mobile md:px-section-x py-section-y-mobile md:py-section-y bg-primary"
    >
      <header className="flex flex-col uppercase items-center gap-2 mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-bold font-heading text-center"
        >
          Our Signature Ramen
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-black/70 font-semibold text-md text-center"
        >
          Crafted with authentic ingredients and slow-simmered broths
        </motion.p>
        <Button text="Explore Menu" color="secondary" className="w-[200px]" />
      </header>
      <div className="flex flex-col md:flex-row gap-5">
        {highlights.map((highlight, index) => {
          return (
            <HighLightCard index={index} key={highlight.id} {...highlight} />
          );
        })}
      </div>
    </motion.section>
  );
}

const HighLightCard = ({
  title,
  description,
  image,
  index,
}: HighLightCard & { index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  let animationValue = 0;
  let delayValue = 0;
  if (index === 0) {
    animationValue = 40;
    delayValue = 0.3;
  } else if (index === 2) {
    animationValue = -40;
    delayValue = 0.3;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: animationValue }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delayValue }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="group relative w-full h-[400px] border-2 border-black rounded-md 
    after:content-[''] after:absolute after:inset-0
    after:translate-x-2 after:translate-y-2
    after:bg-black after:rounded-md after:z-0
    after:transition-all after:duration-300
    group-hover:after:translate-x-3 group-hover:after:translate-y-3"
    >
      {/* IMAGE */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center rounded-md"
        style={{
          transform: "translateZ(15px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(/${image})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          transform: "translateZ(15px)",
          transformStyle: "preserve-3d",
        }}
        className="opacity-0 rounded-md group-hover:opacity-100 transition-all duration-100 absolute inset-0 bg-black/60 z-20"
      />

      {/* TEXT */}
      <footer
        style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 z-30 flex flex-col justify-end p-4 text-white"
      >
        <h2 className="opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 delay-100 text-2xl font-bold">
          {title}
        </h2>
        <p className="text-sm opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 delay-200">
          {description}
        </p>
      </footer>
    </motion.div>
  );
};
