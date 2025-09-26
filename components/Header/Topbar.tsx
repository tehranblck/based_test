
import { Toggle } from "./Toggle";
import { Logo } from "./Logo";

export default function Topbar() {
    return (
        <div className="w-full bg-secondary-foreground text-primary">
            <div className="mx-auto max-w-[100%] px-2 flex h-9 sm:h-10  items-center  text-xs sm:text-sm">
                <Logo />


                <div className="flex-1 overflow-hidden">
                    <p className="topbar-track px-4 text-center">
                        🎉 Based.az — Azərbaycanın ən böyük digital hesab platforması! ⚡ Netflix, Spotify, ChatGPT Plus və daha çox 🚀
                    </p>
                </div>
                <Toggle />
            </div>
        </div>
    );
}
