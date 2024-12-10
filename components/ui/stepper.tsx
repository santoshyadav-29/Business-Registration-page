"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Step {
  title: string;
  isCompleted?: boolean;
  isCurrent?: boolean;
}

export function Stepper({ steps }: { steps: Step[] }) {
  return (
    <div className="flex  w-full items-center  ">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors",
                  step.isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : step.isCurrent
                    ? "border-primary"
                    : "border-gray-300"
                )}
              >
                {step.isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className={cn(
                "mt-2 text-xs whitespace-nowrap",
                step.isCurrent ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {step.title}
            </motion.span>
          </div>
          {index < steps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "h-[2px] w-full min-w-[2rem] mx-2 origin-left",
                step.isCompleted ? "bg-primary" : "bg-gray-200"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}