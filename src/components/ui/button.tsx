import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-md lg:text-lg lg:font-semibold font-medium cursor-pointer ring-offset-background transition-colors focus:ring-ring focus:ring-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-300',
  {
    variants: {
      variant: {
        default:
          'border-2 border-transparent hover:border-border bg-primary hover:bg-transparent text-primary-foreground hover:text-white',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border-2 border-border bg-background hover:bg-primary hover:!text-black',
        secondary: 'relative bg-[#fcfcfc33] text-white secondary-button-animation disabled:bg-[#191A1A]',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 text-sm lg:h-12 px-5',
        sm: 'h-9 text-sm leading-4 rounded-md px-3 py-2',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10',
      }, 
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
