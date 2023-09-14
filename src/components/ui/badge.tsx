import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex items-center justify-center rounded-lg px-3 text-sm whitespace-nowrap text-center leading-[1.125rem] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-gray-100 dark:bg-gray-800 dark:text-gray-50 text-gray-900 hover:bg-gray-100/80",
        active:
          "bg-gray-600 dark:bg-gray-400 dark:text-gray-900 text-gray-50 hover:bg-gray-900/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
