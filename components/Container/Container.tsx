import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export function Container({
    children,
    className,
    as: Component = "main"
}: ContainerProps) {
    return (
        <Component
            className={cn(
                "max-w-[90rem] mx-auto px-2 pt-0 sm:px-2 lg:px-0",
                className
            )}
        >
            {children}
        </Component>
    );
}

export default Container;
