import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)]",
        className
      )}
      {...props}
    />
  );
}