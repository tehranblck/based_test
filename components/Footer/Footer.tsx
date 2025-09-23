import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const contactLinks = [
        { text: "Əlaqə nömrəsi: +994775450755", href: "tel:+994775450755" },
        { text: "Email: contact@based.az", href: "mailto:contact@based.az" }
    ];

    const discoverLinks = [
        "Hesablar və Abunəliklər",
        "Proqram Lisenziyaları",
        "Panel Xidmətləri və Alətlər",
        "Sayt və Marketing Halləri",
        "Rəqəmsal Məhsullar və Alətlər"
    ];

    const advantagesList = [
        "Sürətli Təhvil",
        "Etibarlı Xidmət",
        "24/7 Dəstək",
        "Sərfəli Qiymətlər",
        "Avtomatlaşdırılmış Sistem"
    ];

    const socialLinks = [
        { icon: FaWhatsapp, href: "https://wa.me/994775450755", label: "WhatsApp", color: "hover:bg-green-500" },
        { icon: FaInstagram, href: "https://instagram.com/based.az", label: "Instagram", color: "hover:bg-pink-500" },
        { icon: FaTelegram, href: "https://t.me/basedaz", label: "Telegram", color: "hover:bg-blue-500" },
        { icon: FaFacebook, href: "https://facebook.com/based.az", label: "Facebook", color: "hover:bg-blue-600" },
        { icon: FaYoutube, href: "https://youtube.com/@based.az", label: "YouTube", color: "hover:bg-red-500" }
    ];

    return (
        <>
            <footer style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className="bg-card/60 text-foreground  relative">
                <div className=" max-w-[90rem] mx-auto px-4 py-12">
                    <div className="mb-10 rounded-xl border border-border bg-primary/5 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-3">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-muted-foreground">Sualınız var? Dəstək komandamız 24/7 onlayndır.</p>
                            <p className="text-base font-semibold text-secondary">Bizə yazın, dərhal cavab alacaqsınız.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="https://wa.me/994775450755" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium px-4 py-2 transition-colors" aria-label="WhatsApp ilə əlaqə">WhatsApp</Link>
                            <Link href="https://t.me/basedaz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-muted text-foreground hover:bg-accent font-medium px-4 py-2 transition-colors" aria-label="Telegram ilə əlaqə">Telegram</Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info Section */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl font-bold text-secondary">BASED.AZ</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Rəqəmsal hesablar, abunəliklər, oyunlar, proqram lisenziyaları və digər bütün ehtiyaclarınızı tək platformada rahat, sürətli və sərfəli şəkildə qarşılamaq mümkündür. Seçim edin, arxayın olun və xidmət keyfiyyətini hiss edin.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold text-lg">Əlaqə</h3>
                            <div className="space-y-3">
                                {contactLinks.map((contact, index) => (
                                    <div key={index}>
                                        <Link
                                            href={contact.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                                        >
                                            {contact.text}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <div className="flex space-x-3 pt-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-8 h-8 bg-muted hover:bg-secondary rounded flex items-center justify-center transition-all duration-200 group`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-secondary-foreground" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Discover Section */}
                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold text-lg">Kəşf et</h3>
                            <ul className="space-y-2">
                                {discoverLinks.map((link, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="w-1 h-1 bg-secondary rounded-full mr-3"></span>
                                        <span className="text-muted-foreground text-sm">{link}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Advantages Section */}
                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold text-lg">Üstünlüklərimiz</h3>
                            <ul className="space-y-2">
                                {advantagesList.map((advantage, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="w-1 h-1 bg-secondary rounded-full mr-3"></span>
                                        <span className="text-muted-foreground text-sm">{advantage}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 pt-6 border-t border-border">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-sm text-gray-400 flex flex-wrap items-center gap-1">
                                <span className="inline-flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-md font-medium text-sm">
                                    Saytpro
                                </span>
                                <span>tərəfindən hazırlanıb ❤️</span>
                                <span className="mx-2">•</span>
                                <span>Based.az {currentYear} © Bütün hüquqlar qorunur</span>
                                <span className="mx-2">•</span>
                                <Link href="/privacy" className="hover:text-foreground transition-colors">Məxfilik Siyasəti</Link>
                                <span className="mx-2">•</span>
                                <Link href="/terms" className="hover:text-foreground transition-colors">Qaydalar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 left-6 z-50">
                <Link
                    href="https://wa.me/994775450755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none"
                    aria-label="WhatsApp ilə əlaqə"
                >
                    <IoLogoWhatsapp className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                </Link>
            </div>
        </>
    );
}
