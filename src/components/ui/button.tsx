import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg shadow-secondary/25",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-secondary underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold shadow-lg hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0",
        "gold-outline": "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        teal: "bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900 font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5",
        "teal-outline": "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground",
        hero: "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1 hover:scale-[1.02] active:scale-100",
        "hero-secondary": "bg-card/60 backdrop-blur-xl border border-border/50 text-foreground font-semibold hover:bg-card/80 hover:border-secondary/50 hover:-translate-y-1",
        glass: "bg-card/40 backdrop-blur-xl border border-border/30 text-foreground hover:bg-card/60 hover:border-secondary/30",
        icon: "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
