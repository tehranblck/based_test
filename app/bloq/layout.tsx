import React from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-8 sm:py-10 max-w-[90rem] mx-auto">
            <div className="mx-auto ">
                {children}
            </div>
        </section>
    );
}