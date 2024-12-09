import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#eaeaea,45%,#dcdcdc,55%,#eaeaea)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-slate-900 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950",
        destructive:
          "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-red-800 bg-[linear-gradient(110deg,#7f1d1d,45%,#b91c1c,55%,#7f1d1d)] bg-[length:200%_100%] px-6 font-bold text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-50",
        outline:
          "font-bold px-4 py-2 rounded-xl border border-neutral-600 text-black dark:text-white dark:bg-black bg-white hover:bg-gray-100 transition duration-200",
        secondary:
          "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-[#364f6b] bg-[linear-gradient(110deg,#a6c1ee,45%,#85a3d8,55%,#a6c1ee)] bg-[length:200%_100%] px-6 font-bold text-[#364f6b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#85a3d8] focus:ring-offset-2 focus:ring-offset-[#e8f1fb]",
        ghost: "px-8 py-2 rounded-md bg-blue-700 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-700",
        muted: "font-bold px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
