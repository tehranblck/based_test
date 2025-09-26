import dynamic from "next/dynamic";
import { Target, HeartHandshake, Rocket } from "lucide-react";

const WhyUs = dynamic(() => import("@/components/Why_Us/WhyUs"), { ssr: true });
const TestimonialHome = dynamic(() => import("@/components/TestimonialHome/TestimonialHome"), { ssr: true });

export default function AboutPage() {
    return (
        <div>
            <section className="relative py-14 sm:py-16 ">
                <div className="mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium ring-1 ring-secondary">Based.az haqqında</span>
                        <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
                            Sadə və peşəkar rəqəmsal təcrübə
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-muted-foreground">
                            Rəsmi hesablar, sürətli təhvil və 24/7 dəstək – hamısı bir yerdə. Məqsədimiz keyfiyyəti hər kəs üçün əlçatan etməkdir.
                        </p>
                    </div>

                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />



                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 py-6 shadow-sm transition-all hover:shadow-md">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
                            <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground ring-1 ring-secondary/40">
                                    <Target className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Missiyamız</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">İstifadəçilərə rəsmi, təhlükəsiz və dərhal aktivləşən rəqəmsal məhsullar təqdim etmək, dəstəyi 24/7 təmin etmək.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
                            <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground ring-1 ring-secondary/40">
                                    <HeartHandshake className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Dəyərlərimiz</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">Etibarlılıq, şəffaflıq və sürət. Müştəri məmnuniyyəti və davamlı keyfiyyət bizim üçün əsasdır.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
                            <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground ring-1 ring-secondary/40">
                                    <Rocket className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Niyə Based.az?</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">Avtomatlaşdırılmış sistem, sərfəli qiymətlər, rəsmi hesablar və sürətli təhvil ilə seçilirik.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyUs />

            <section className="py-10 sm:py-12">
                <TestimonialHome />
            </section>
        </div >
    );
}


