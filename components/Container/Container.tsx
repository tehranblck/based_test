import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export function Container({
    children,
    className,
    as: Component = "div"
}: ContainerProps) {
    return (
        <Component
            className={cn(
                "max-w-[90rem] mx-auto px-4 mt-12 sm:px-6 lg:px-0",
                className
            )}
        >
            {children}
        </Component>
    );
}

export default Container;
