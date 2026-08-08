import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-950 text-white shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-slate-800",
        outline: "border border-slate-200 bg-white text-slate-950 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md",
        ghost: "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
      },
      size: {
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        sm: "h-10 px-4 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };