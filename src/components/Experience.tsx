import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSectionAnimation } from "../hooks/sectionAnimation";

const images = [
  {
    id: 1,
    image: "CustomerEating.jpg",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    id: 2,
    image: "ChefCooking.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    id: 3,
    image: "CookRamen.jpg",
    className: "md:col-span-4 md:row-span-2  object-bottom",
  },
  {
    id: 4,
    image: "FriendsEating.jpg",
    className: "md:col-span-6 md:row-span-3 object-bottom",
  },
  {
    id: 6,
    image: "RamenBowlBento.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    image: "FreshNoodles.jpg",
    className: "md:col-span-6 md:row-span-3",
  },
  {
    id: 7,
    image: "BowlShowing.jpg",
    className: "md:col-span-6 md:row-span-1",
  },
];

const ImageCard = ({
  image,
  className,
}: {
  image: string;
  className: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.img
      ref={ref}
      src={image}
      alt=""
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${className} w-full h-full object-cover object-center rounded-md border-2 border-black`}
    />
  );
};

export default function Experience() {
  const { ref, isInView } = useSectionAnimation();
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
      ref={ref}
      className="bg-neutral-200 py-section-y-mobile md:py-section-y px-section-x-mobile md:px-section-x"
    >
      <div className="mx-auto">
        <h1 className="text-3xl md:text-6xl font-heading uppercase mb-4">
          Experience the Art of Ramen
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[200px] gap-2">
          {images.map((img) => (
            <ImageCard
              key={img.id}
              image={img.image}
              className={img.className}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
