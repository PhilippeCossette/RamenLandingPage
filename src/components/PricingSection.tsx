import { useMemo, useState, type ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import {
  FaBacon,
  FaDrumstickBite,
  FaSeedling,
  FaEgg,
  FaLeaf,
  FaFire,
  FaPepperHot,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import { GiNoodles, GiCorn, GiGarlic, GiSesame } from "react-icons/gi";
import { Button } from "./Button";

type Ramen = {
  id: number;
  name: string;
  description: string;
  price: number;
  includes: string[];
  image: string;
};
type AddOn = {
  id: number;
  name: string;
  price: number;
  image: ReactNode;
  category: "protein" | "toppings" | "extras";
};

const ramens: Ramen[] = [
  {
    id: 1,
    name: "Tonkotsu",
    description: "Rich, creamy pork bone broth with deep umami flavor.",
    price: 16,
    includes: [
      "Fresh ramen noodles",
      "Chashu pork",
      "Soft-boiled egg",
      "Green onions",
      "Nori",
    ],
    image: "TonkotsuRamen.jpg",
  },
  {
    id: 2,
    name: "Shoyu",
    description: "Light soy sauce broth with a balanced, savory taste.",
    price: 18,
    includes: [
      "Fresh ramen noodles",
      "Chashu pork",
      "Bamboo shoots",
      "Green onions",
      "Nori",
    ],
    image: "ShoyuRamen.jpg",
  },
  {
    id: 3,
    name: "Miso",
    description: "Bold miso broth with a slightly sweet and hearty profile.",
    price: 14,
    includes: [
      "Fresh ramen noodles",
      "Ground pork",
      "Corn",
      "Green onions",
      "Butter",
    ],
    image: "MisoRamen.jpg",
  },
];
export const addOns: AddOn[] = [
  // 🥩 PROTEIN
  {
    id: 1,
    name: "Extra Chashu",
    price: 4,
    category: "protein",
    image: <FaBacon />,
  },
  {
    id: 2,
    name: "Grilled Chicken",
    price: 3,
    category: "protein",
    image: <FaDrumstickBite />,
  },
  {
    id: 3,
    name: "Ground Pork",
    price: 3,
    category: "protein",
    image: <FaBacon />,
  },
  {
    id: 4,
    name: "Tofu",
    price: 2,
    category: "protein",
    image: <FaSeedling />,
  },

  // 🥚 TOPPINGS
  {
    id: 5,
    name: "Soft-Boiled Egg",
    price: 2,
    category: "toppings",
    image: <FaEgg />,
  },
  {
    id: 6,
    name: "Corn",
    price: 1,
    category: "toppings",
    image: <GiCorn />,
  },
  {
    id: 7,
    name: "Bamboo Shoots",
    price: 1,
    category: "toppings",
    image: <FaLeaf />,
  },
  {
    id: 8,
    name: "Green Onions",
    price: 1,
    category: "toppings",
    image: <FaLeaf />,
  },
  {
    id: 9,
    name: "Nori",
    price: 1,
    category: "toppings",
    image: <FaLeaf />,
  },
  {
    id: 10,
    name: "Butter",
    price: 1,
    category: "toppings",
    image: <FaFire />,
  },

  // ⚡ EXTRAS
  {
    id: 11,
    name: "Extra Noodles",
    price: 3,
    category: "extras",
    image: <GiNoodles />,
  },
  {
    id: 12,
    name: "Spicy Oil",
    price: 1,
    category: "extras",
    image: <FaPepperHot />,
  },
  {
    id: 13,
    name: "Garlic Boost",
    price: 1,
    category: "extras",
    image: <GiGarlic />,
  },
  {
    id: 14,
    name: "Chili Flakes",
    price: 1,
    category: "extras",
    image: <FaPepperHot />,
  },
  {
    id: 15,
    name: "Sesame Seeds",
    price: 1,
    category: "extras",
    image: <GiSesame />,
  },
];
const categories = ["protein", "toppings", "extras"] as const;

const categoryLabels = {
  protein: "Protein",
  toppings: "Toppings",
  extras: "Extras",
};

export default function PricingSection() {
  const [selectedRamen, setSelectedRamen] = useState<Ramen | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  const handleSelectRamen = (ramen: Ramen) => {
    setSelectedAddOns([]); // Reset add-ons when selecting a different ramen
    setSelectedRamen((prev) => (prev?.id === ramen.id ? null : ramen));
  };

  const handleToggleAddOn = (addOn: AddOn) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOn.id)
        ? prev.filter((id) => id !== addOn.id)
        : [...prev, addOn.id],
    );
  };

  const totalPrice = useMemo(() => {
    if (!selectedRamen) return 0;

    const addOnTotal = addOns
      .filter((addOn) => selectedAddOns.includes(addOn.id))
      .reduce((sum, addOn) => sum + addOn.price, 0);

    return selectedRamen.price + addOnTotal;
  }, [selectedRamen, selectedAddOns]);

  return (
    <section className="bg-primary px-section-x-mobile py-section-y-mobile md:px-section-x md:py-section-y">
      <h2 className="font-heading uppercase text-6xl">
        Build Your Perfect Bowl
      </h2>
      <p className="font-semibold text-lg mb-8">Crafted your way.</p>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-start">
        {/* LEFT — RAMEN */}
        <div>
          <h2 className="uppercase font-heading text-3xl mb-4">
            Choose Your Base
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {ramens.map((ramen) => (
              <RamenCard
                key={ramen.id}
                ramen={ramen}
                selected={selectedRamen?.id === ramen.id}
                onSelect={handleSelectRamen}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — ADD-ONS */}
        <div className="relative">
          <h2 className="uppercase font-heading text-2xl mb-3">Customize</h2>

          {/* 🔥 OVERLAY */}
          <AnimatePresence>
            {!selectedRamen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <div className="text-center px-4">
                  <h3 className="text-lg font-bold text-black mb-1">
                    Select a ramen first
                  </h3>
                  <p className="text-xs text-black/70">
                    Choose your base to unlock customization
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ADD-ONS CONTENT */}
          <div
            className={`space-y-4 transition-all ${
              !selectedRamen ? "pointer-events-none opacity-70" : ""
            }`}
          >
            {categories.map((category) => (
              <div key={category}>
                <h3 className="font-semibold mb-2 text-sm">
                  {categoryLabels[category]}
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  {addOns
                    .filter((addOn) => addOn.category === category)
                    .map((addOn) => (
                      <AddOnCard
                        key={addOn.id}
                        addOn={addOn}
                        selected={selectedAddOns.includes(addOn.id)}
                        onSelect={handleToggleAddOn}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      {selectedRamen && (
        <div className="mt-10">
          <OrderSummary
            selectedRamen={selectedRamen}
            selectedAddOns={selectedAddOns}
            totalPrice={totalPrice}
          />
        </div>
      )}
    </section>
  );
}

function RamenCard({
  ramen,
  onSelect,
  selected,
}: {
  ramen: Ramen;
  onSelect: (ramen: Ramen) => void;
  selected: boolean;
}) {
  return (
    <div
      onClick={() => onSelect(ramen)}
      className={`
        overflow-hidden
        flex flex-row xl:flex-col
        border-2 rounded-md cursor-pointer
        transition-all duration-150
        text-sm
        ${
          selected
            ? "border-blue-600 shadow-[4px_4px_0px_0px_rgba(31,87,209,1)]"
            : "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        }
      `}
    >
      {/* IMAGE */}
      <div className="w-1/3 xl:w-full">
        <img
          src={ramen.image}
          alt={ramen.name}
          className="w-full h-full object-cover "
        />
      </div>

      {/* CONTENT */}
      <div className="w-2/3 xl:w-full bg-slate-200 p-2 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-bold">{ramen.name}</h3>

            <div
              className={`p-1 rounded-full border ${
                selected
                  ? "bg-blue-600 border-blue-700"
                  : "border-neutral-400 bg-neutral-200"
              }`}
            >
              <FaCheck
                className={selected ? "text-white" : "text-transparent"}
              />
            </div>
          </div>

          <h4 className="font-semibold mb-1">${ramen.price.toFixed(2)}</h4>

          <p className="text-xs mb-2 line-clamp-2">{ramen.description}</p>

          {/* ✅ ALWAYS VISIBLE */}
          <div className="text-[11px]">
            <span className="font-semibold">Includes:</span>
            <ul className="list-disc list-inside leading-tight">
              {ramen.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddOnCard({
  addOn,
  onSelect,
  selected,
}: {
  addOn: AddOn;
  selected: boolean;
  onSelect: (addOn: AddOn) => void;
}) {
  return (
    <div
      onClick={() => onSelect(addOn)}
      className={`border-2 px-4 py-2 rounded-md flex items-center justify-between gap-3 cursor-pointer transition-all duration-150 ${selected ? "border-blue-600 bg-blue-100" : "border-black bg-neutral-200"}`}
    >
      <div className="flex items-center gap-2">
        {addOn.image}
        <h3 className="text-sm font-bold">{addOn.name}</h3>
      </div>
      <div className="text-lg font-semibold">${addOn.price}</div>
    </div>
  );
}

const TAX_RATE = 0.14975;
const variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3 },
      opacity: { delay: 0.3, duration: 0.2 }, // 👈 AFTER height
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: { duration: 0.2 }, // 👈 FIRST
      height: { delay: 0.2, duration: 0.3 }, // 👈 THEN collapse
    },
  },
};

function OrderSummary({
  selectedRamen,
  selectedAddOns,
  totalPrice,
}: {
  selectedRamen: Ramen;
  selectedAddOns: number[];
  totalPrice: number;
}) {
  const [open, setOpen] = useState(false);

  const selectedAddOnItems = addOns.filter((a) =>
    selectedAddOns.includes(a.id),
  );

  const tax = totalPrice * TAX_RATE;
  const total = totalPrice + tax;

  return (
    <div className="mt-10 w-full bg-white border-2 border-black rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-4 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-1">
            Your order
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 leading-tight">
            {selectedRamen.name}
          </h3>
        </div>
        <span className="text-lg font-semibold text-neutral-900">
          ${selectedRamen.price.toFixed(2)}
        </span>
      </div>

      <div className="border-t border-neutral-400 mx-5" />

      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-5 py-3 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
      >
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 6l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {open ? "Hide details" : "Show details"}
      </button>

      <AnimatePresence>
        {/* Expandable details */}
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="px-5 pb-4 space-y-4"
          >
            {/* Add-ons */}
            {selectedAddOnItems.length > 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">
                  Add-ons
                </p>
                <div className="space-y-1.5">
                  {selectedAddOnItems.map((addOn) => (
                    <div
                      key={addOn.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-neutral-600">+ {addOn.name}</span>
                      <span className="text-neutral-800 font-medium">
                        ${addOn.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subtotals */}
            <div className="bg-neutral-200 rounded-xl p-3 space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Subtotal</span>
                <span className="text-neutral-800 font-medium">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Tax (TPS + TVQ)</span>
                <span className="text-neutral-800 font-medium">
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-t border-neutral-400 mx-5" />

      {/* Total + CTA */}
      <div className="px-5 pt-4 pb-5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-neutral-500">Total</span>
          <span className="text-xl font-semibold text-neutral-900">
            ${total.toFixed(2)}
          </span>
        </div>
        <Button
          text="Proceed to Checkout"
          color="primary"
          className="w-[200px]"
        />
        <p className="text-center text-xs text-neutral-400 mt-2">
          Taxes (TPS + TVQ) included
        </p>
      </div>
    </div>
  );
}
