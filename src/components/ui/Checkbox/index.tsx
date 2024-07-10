import cn from "@/lib/cn";
import { component$, PropsOf } from "@builder.io/qwik";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva("peer h-4 w-4 shrink-0 rounded-sm border", {
  variants: {
    variant: {
      default:
        "border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// ToDo: WIP

const Checkbox = component$(
  ({
    class: className,
    variant,
    ...props
  }: {
    class?: string;
    variant?: VariantProps<typeof checkboxVariants>["variant"];
  } & PropsOf<"input">) => {
    return (
      <input
        type="checkbox"
        class={cn(checkboxVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

export { Checkbox, checkboxVariants };
