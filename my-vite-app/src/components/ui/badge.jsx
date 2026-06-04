import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-purple-500/30 bg-purple-500/15 text-purple-300",
        secondary:
          "border-white/10 bg-white/5 text-gray-300",
        outline: "border-white/20 text-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(badgeVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
