import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Social() {
    return (
        <div className="flex items-center gap-2">
            <a
                href="https://facebook.com"
                target="_blank"
                className="group p-1.5 rounded-full bg-primary-foreground/20 hover:bg-blue-500 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Facebook"
            >
                <FaFacebookF className="h-4 w-4 text-blue-600 group-hover:text-white" />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                className="group p-1.5 rounded-full bg-primary-foreground/20 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Instagram"
            >
                <FaInstagram className="h-4 w-4 text-pink-500 group-hover:text-white" />
            </a>
            <a
                href="https://t.me"
                target="_blank"
                className="group p-1.5 rounded-full bg-primary-foreground/20 hover:bg-sky-500 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Telegram"
            >
                <FaTelegramPlane className="h-4 w-4 text-sky-500 group-hover:text-white" />
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                className="group p-1.5 rounded-full bg-primary-foreground/20 hover:bg-red-500 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="YouTube"
            >
                <FaYoutube className="h-4 w-4 text-red-500 group-hover:text-white" />
            </a>
            <a
                href="https://discord.gg"
                target="_blank"
                className="group p-1.5 rounded-full bg-primary-foreground/20 hover:bg-indigo-500 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Discord"
            >
                <FaDiscord className="h-4 w-4 text-indigo-500 group-hover:text-white" />
            </a>
        </div>
    );
}
