import { useInView } from "framer-motion";
import { useRef } from "react";

export function useSectionAnimation() {
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  return { ref, isInView };
}
