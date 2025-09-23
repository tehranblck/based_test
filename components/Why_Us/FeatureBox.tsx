import type { FeatureBoxProps } from "@/types";

export default function FeatureBox({ icon, title, description }: FeatureBoxProps) {
    return (
        <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1 hover:border-yellow-400/30 transition-all duration-300 ease-out cursor-pointer">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-lg group-hover:scale-110 group-hover:rotate-3 group-hover:bg-yellow-300 transition-all duration-300 ease-out">
                <div className="group-hover:scale-90 transition-transform duration-200 ease-out">
                    {icon}
                </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                {description}
            </p>
        </div>
    );
}
