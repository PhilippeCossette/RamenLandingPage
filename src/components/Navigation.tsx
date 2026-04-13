import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { HamburgerIcon } from "./HamburgerIcon";

const links = ["Ramens", "Craft", "Experience", "Menu", "Hours"];

export function Navigation() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width > 650) {
    return <DesktopNavigation />;
  } else {
    return <MobileNavigation />;
  }
}

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState<"down" | "up">("up");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setDirection(latest > previous ? "down" : "up");
  });
  return (
    <>
      <nav
        className={`fixed left-1/2 ${
          direction === "down" && open === false
            ? "-translate-y-full"
            : "translate-y-0"
        } ${
          open ? "bg-transparent" : "bg-primary"
        } -translate-x-1/2 px-6 flex justify-between w-full gap-5 bg-primary transition-all duration-300 items-center py-2 z-[80]`}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="MakiIcon.svg"
          className="w-10"
          alt=""
        />
        <HamburgerIcon open={open} onClick={() => setOpen(!open)} />
      </nav>
      <AnimatePresence>
        {open && <MobileMenu onClick={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

const drawer = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const layer = {
  open: { x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  closed: {
    x: "-100%",
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

const linkContainer = {
  open: { opacity: 1, transition: { delay: 0.1, staggerChildren: 0.07 } },
  closed: { opacity: 0, transition: { duration: 0.3 } },
};

const linkItem = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 },
};

function MobileMenu({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70]"
      initial="closed"
      animate="open"
      exit="closed"
      variants={drawer}
    >
      <motion.div variants={layer} className="absolute inset-0 bg-primary" />
      <motion.div variants={layer} className="absolute inset-0 bg-white" />
      <motion.div
        variants={linkContainer}
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 pt-16"
      >
        {links.map((link) => (
          <motion.a
            onClick={onClick}
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            variants={linkItem}
            className="text-4xl font-heading uppercase text-black"
          >
            {link}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

function DesktopNavigation() {
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
      <motion.img
        src="MakiIcon.svg"
        className="w-12"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className=" p-1 flex rounded-full  relative w-fit"
      >
        {links.map((link) => (
          <Tab
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            setPosition={setPosition}
          >
            {link}
          </Tab>
        ))}
        <Cursor position={position} />
      </motion.nav>
      <Button text="Order Now" color="secondary" />
    </div>
  );
}

const Tab = ({
  children,
  href,
  setPosition,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  return (
    <a
      href={href}
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
