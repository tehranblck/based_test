import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main>
            <section className="relative py-12 sm:py-16">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Əlaqə</h1>
                        <p className="mt-3 text-base md:text-lg text-muted-foreground">Sualınız var? Yazın, 24/7 dəstək komandamız yanınızdadır.</p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left: contact info */}
                        <div className="space-y-4">
                            <div className="rounded-2xl bg-card/60 ring-1 ring-border/60 p-5">
                                <div className="flex items-start gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Telefon</div>
                                        <div className="text-base font-semibold">+994 77 545 07 55</div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-card/60 ring-1 ring-border/60 p-5">
                                <div className="flex items-start gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Email</div>
                                        <div className="text-base font-semibold">info@based.az</div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-card/60 ring-1 ring-border/60 p-5">
                                <div className="flex items-start gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">İş saatları</div>
                                        <div className="text-base font-semibold">7/24 dəstək</div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-card/60 ring-1 ring-border/60 p-5">
                                <div className="flex items-start gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Ünvan</div>
                                        <div className="text-base font-semibold">Bakı, Azərbaycan</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: form */}
                        <div className="lg:col-span-2">
                            <form className="rounded-2xl bg-card/60 ring-1 ring-border/60 p-5 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-sm text-muted-foreground">Ad Soyad</label>
                                        <input className="mt-1 w-full rounded-md border border-input bg-input/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" placeholder="Ad Soyad" />
                                    </div>
                                    <div>
                                        <label className="text-sm text-muted-foreground">Email</label>
                                        <input type="email" className="mt-1 w-full rounded-md border border-input bg-input/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" placeholder="sizin@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground">Mövzu</label>
                                    <input className="mt-1 w-full rounded-md border border-input bg-input/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" placeholder="Mövzu" />
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground">Mesaj</label>
                                    <textarea className="mt-1 min-h-[140px] w-full rounded-md border border-input bg-input/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" placeholder="Qısa mesaj" />
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-xs text-muted-foreground">Müraciətlərə adətən 1-3 saat ərzində cavab verilir.</p>
                                    <Button className="rounded-full bg-secondary text-secondary-foreground shadow-sm">
                                        Göndər
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </section>
        </main>
    );
}
