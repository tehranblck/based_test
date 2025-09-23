import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
    onSwitchToRegister: () => void;
}

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
    return (
        <div className="mx-auto w-full max-w-sm">
            <div className="space-y-6 flex flex-col justify-center  !w-full">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">Giriş</h1>
                </div>

                <form className="space-y-4">
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">E-poçt</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-poçt ünvanınızı daxil edin"
                            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="password" className="block text-sm font-medium text-foreground">Şifrə</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Şifrənizi daxil edin"
                            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-1">

                        <Link href="#" className="text-sm text-primary underline-offset-4 hover:underline">Şifrəmi unutdum</Link>
                    </div>

                    <Button className="h-11 w-full">Giriş et</Button>



                    <p className="text-center text-sm text-muted-foreground">
                        Hesabınız yoxdur? {" "}
                        <button
                            type="button"
                            onClick={onSwitchToRegister}
                            className="text-primary underline-offset-4 hover:underline"
                        >
                            Qeydiyyatdan keç
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}
