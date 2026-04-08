import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./Button";

export function Navigation() {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState<"down" | "up">("up");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setDirection(latest > previous ? "down" : "up");
  });

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <div
      className={`fixed left-1/2 ${
        direction === "down" ? "-translate-y-full" : "translate-y-0"
      } -translate-x-1/2 px-6 flex justify-between w-full gap-5 bg-primary transition-all duration-300 items-center py-2 z-50`}
    >
      <img src="MakiIcon.svg" className="w-12" alt="" />
      <nav
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className=" p-1 flex rounded-full  relative w-fit"
      >
        <Tab setPosition={setPosition}>Home</Tab>
        <Tab setPosition={setPosition}>About</Tab>
        <Tab setPosition={setPosition}>Menu</Tab>
        <Tab setPosition={setPosition}>Why Us?</Tab>
        <Cursor position={position} />
      </nav>
      <Button text="Order Now" color="secondary" />
    </div>
  );
}

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  return (
    <a
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer font-heading uppercase px-3 py-2 text-xs text-black md:px-5 md:py-3 md:text-base"
    >
      {children}
    </a>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.div
      className="absolute z-0 h-8 rounded-full bg-white md:h-12 flex items-end justify-center"
      animate={position}
    />
  );
};
