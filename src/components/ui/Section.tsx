import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
    return (
        <section className={cn("py-16 md:py-24 relative overflow-hidden", className)} {...props}>
            <div className={cn("container mx-auto px-6", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
