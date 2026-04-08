import { motion } from "framer-motion";

export default function ScatterText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const words = children?.toString().split(" ") ?? [];
  return (
    <p className="flex gap-2">
      {words.map((word, index) => (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
          }}
          key={index}
          className={`${className}`}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
