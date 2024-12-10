"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface LocationCardProps {
  country: string;
  flag: string;
  title: string;
  subtitle: string;
  address: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function LocationCard({
  country,
  flag,
  title,
  subtitle,
  address,
  isSelected,
  onClick,
}: LocationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={cn(
          "cursor-pointer p-6 transition-colors bg-[#1a0a34] text-gray-400",
          isSelected
            ? "border-primary bg-primary/5"
            : "hover:border-primary/50 hover:bg-gray-50"
        )}
        onClick={onClick}
      >
        <div className="mb-4 flex items-center gap-3 ">
         

          <Image
            src={flag}
            alt="Description of the image"
            width={50}
            height={200}
          />
          <span className="font-medium">{country}</span>
        </div>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="mb-2 text-sm text-gray-600">{subtitle}</p>
        <p className="text-sm text-gray-500">{address}</p>
      </Card>
    </motion.div>
  );
}
