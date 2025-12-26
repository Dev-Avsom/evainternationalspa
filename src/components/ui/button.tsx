import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-montserrat",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-button hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-full hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-muted hover:text-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        // Deep Rich Teal Call Button (matches header)
        call: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-button hover:-translate-y-0.5 font-bold text-base",
        // WhatsApp Green with white border
        whatsapp: "bg-whatsapp-green text-white hover:bg-whatsapp-green/90 rounded-full shadow-button font-bold text-base border-2 border-white hover:-translate-y-0.5",
        // Gold accent for special CTAs
        gold: "bg-gold-accent text-white hover:bg-gold-accent/90 rounded-full shadow-button font-bold hover:-translate-y-0.5",
        // Header CTA button (inverted for dark header)
        headerCta: "bg-white text-primary hover:bg-white/90 rounded-full font-bold hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-10 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
