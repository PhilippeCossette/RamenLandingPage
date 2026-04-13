import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const Button = ({
  text,
  color,
  className,
}: {
  text: string;
  color: string;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    x.set(xPercent);
    y.set(yPercent);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  let colorClasses = "";
  if (color === "primary") {
    colorClasses = "bg-primary group-hover:bg-primary/90";
  } else if (color === "secondary") {
    colorClasses = "bg-white group-hover:bg-white/80";
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        margin: "100px",
      }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex items-center justify-center h-12 w-32 transition-all bg-black shadow-sm  rounded-full ${className}`}
    >
      <div
        style={{
          transform: "translateZ(15px)",
          transformStyle: "preserve-3d",
        }}
        className={` transition-all absolute shadow-lg ${colorClasses}  inset-0.5 flex items-center justify-center text-sm rounded-full uppercase`}
      >
        <p
          className="font-heading text-xs"
          style={{
            transform: "translateZ(10px)",
          }}
        >
          {text}
        </p>
      </div>
    </motion.button>
  );
};
