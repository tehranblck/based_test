import React from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-8 sm:py-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}