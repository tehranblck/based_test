"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ImagePanel from "./ImagePanel";

export default function LoginPage() {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <section className="w-full mt-4">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-border !bg-card/10 backdrop-blur-xl shadow-md">
                    <div className="grid md:max-h-[590px] md:grid-cols-2">
                        <div
                            className={cn(
                                "relative z-10 p-6 sm:p-10 transition-all flex flex-col justify-center items-center !w-full duration-500",
                                mode === "login" ? "opacity-100" : "opacity-0 md:opacity-30",
                                mode === "login" ? "block" : "hidden",
                                "md:block"
                            )}
                        >
                            <LoginForm onSwitchToRegister={() => setMode("register")} />
                        </div>

                        <div
                            className={cn(
                                "relative z-10 p-6 sm:p-10 transition-all duration-500",
                                mode === "register" ? "opacity-100" : "opacity-0 md:opacity-30",
                                mode === "register" ? "block" : "hidden",
                                "md:block"
                            )}
                        >
                            <RegisterForm onSwitchToLogin={() => setMode("login")} />
                        </div>
                    </div>

                    <ImagePanel mode={mode} />
                </div>
            </div>
        </section>
    );
}
