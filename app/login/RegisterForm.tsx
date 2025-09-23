import { Button } from "@/components/ui/button";

interface RegisterFormProps {
    onSwitchToLogin: () => void;
}

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
    return (
        <div className="mx-auto w-full max-w-sm">
            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">Qeydiyyat</h1>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="space-y-1.5">
                            <label htmlFor="firstName" className="block text-sm font-medium text-foreground">Ad</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Adınızı daxil edin"
                                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="lastName" className="block text-sm font-medium text-foreground">Soyad</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Soyadınızı daxil edin"
                                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="regEmail" className="block text-sm font-medium text-foreground">E-poçt</label>
                        <input
                            id="regEmail"
                            name="regEmail"
                            type="email"
                            placeholder="E-poçt ünvanınızı daxil edin"
                            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground">Nömrə</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Nömrənizi daxil edin"
                            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="space-y-1.5">
                            <label htmlFor="regPassword" className="block text-sm font-medium text-foreground">Şifrə</label>
                            <input
                                id="regPassword"
                                name="regPassword"
                                type="password"
                                placeholder="••••••••"
                                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="regPassword2" className="block text-sm font-medium text-foreground">Şifrə təkrarı</label>
                            <input
                                id="regPassword2"
                                name="regPassword2"
                                type="password"
                                placeholder="••••••••"
                                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                            />
                        </div>
                    </div>

                    <Button className="h-11 w-full">Qeydiyyatdan keç</Button>
                    <p className="text-center text-sm text-muted-foreground">
                        Artıq hesabın var? {" "}
                        <button
                            type="button"
                            onClick={onSwitchToLogin}
                            className="text-primary underline-offset-4 hover:underline"
                        >
                            Daxil ol
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}
