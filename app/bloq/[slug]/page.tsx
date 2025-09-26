import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { Facebook, Instagram, Twitter, ChevronLeft, ChevronRight, Search, Star } from "lucide-react";

async function getPost(slug: string) {
    const map: Record<
        string,
        {
            title: string;
            date: string;
            image: string;
            category: string;
            author: string;
            time: string;
            readTime: string;
            lead: string;
            subheadline: string;
            quote: string;
            body: string[];
            tags: string[];
        }
    > = {
        "2025-ai-startup-ideyalari": {
            title: "2025 üçün 50+ Süni İntellekt startap ideyası",
            date: "25 Sentyabr 2025",
            image: "/slide.png",
            category: "Süni İntellekt",
            author: "Based.az Redaksiya",
            time: "09:30",
            readTime: "6 dəq",
            lead:
                "Yeni AI alətləri müxtəlif sahələrdə saysız-hesabsız niş imkanlar yaradır. Bu yazıda ən perspektivli istiqamətləri toplayıb qısa qeydlərlə təqdim edirik.",
            subheadline:
                "Britaniyalı elektrik nəqliyyat startapı Arrival bu həftə ABŞ fond meneceri BlackRock-dan sərmayə aldığını açıqladı.",
            quote:
                "Bu investisiya elektrik nəqliyyat vasitələri üçün kommersiya seqmentində böyük bazar imkanlarını əks etdirir.",
            body: [
                "Süni intellekt ekosistemi 2025-ci ildə daha da genişlənəcək. Lokal və qlobal bazarlarda mikro-xidmətlər, xüsusi modellər və agent əsaslı sistemlər inkişafın əsas dayağı olacaq.",
                "Korporativ tərəfdə isə daxili məhsuldarlıq, məlumatların emalı və təhlükəsizlik sahələrində tələb dayanmadan artır. Bu, yeni startaplar üçün kifayət qədər geniş imkanlar deməkdir.",
                "Aşağıda kateqoriya üzrə əsas istiqamətləri və bu sahələrdə fərqlənmək üçün vacib məqamları vurğulayırıq.",
            ],
            tags: ["Creative", "Design"],
        },
    };
    return (
        map[slug] || {
            title: "Bloq Yazısı",
            date: "25 Sentyabr 2025",
            image: "/slide.png",
            category: "Bloq",
            author: "Based.az",
            time: "09:30",
            readTime: "3 dəq",
            lead: "Məqalə yaxın zamanda əlavə olunacaq.",
            subheadline: "",
            quote: "",
            body: [""],
            tags: ["Bloq"],
        }
    );
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    const reviews = [
        { id: "r1", name: "Aysel Q.", date: "24 Sentyabr 2025", rating: 5, comment: "Məqalə çox faydalıdır, real nümunələr aydın və praktikdir." },
        { id: "r2", name: "Murad Ə.", date: "22 Sentyabr 2025", rating: 4, comment: "Oxunaqlıdır və dizayn gözəldir. Daha çox case görmək istərdim." },
        { id: "r3", name: "Nihad M.", date: "20 Sentyabr 2025", rating: 5, comment: "Startap ideyaları hissəsi xüsusilə xoşuma gəldi. Tövsiyə edirəm." },
    ];

    const categories = [
        "Süni İntellekt",
        "ERP",
        "Startaplar",
        "Maliyyə",
        "Texnologiya",
        "Dizayn",
        "Biznes",
    ];

    const topPosts = [
        "AI ilə fırıldaq aşkarlanması necə dəyişir",
        "Səhiyyədə prediktiv analitika nümunələri",
        "2025 üçün ən yaxşı ERP seçimləri",
        "Agent əsaslı sistemlərə giriş",
        "Buludda təhlükəsizlik trendləri",
    ];

    const instaImages = [
        "/slide.png",
        "/slide_1.webp",
        "/slide_2.png",
        "/pp.jpg",
        "/cat.png",
        "/cat2.png",
    ];

    return (
        <div>
            <Breadcrumb
                items={[
                    { href: "/", label: "Ana Səhifə" },
                    { href: "/bloq", label: "Bloq" },
                    { href: `/bloq/${params.slug}`, label: post.title },
                ]}
                className="mb-6"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Article */}
                <section className="lg:col-span-8">
                    {/* Hero */}
                    <div className="rounded-2xl overflow-hidden ring-1 ring-border/60">
                        <div className="relative aspect-[16/9] w-full">
                            <Image src={post.image} alt={post.title} fill className="object-cover" />
                        </div>
                    </div>

                    {/* Top bar */}
                    <div className="mt-5 mb-4 flex items-center justify-between">
                        <Link
                            href="/bloq"
                            aria-label="Geri"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-card/60 ring-1 ring-border/60 hover:bg-accent/40 transition-colors"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/bloq"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Növbəti yazı
                            <ChevronRight className="h-3 w-3" />
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-[48px_1fr] gap-6">
                        {/* Share rail */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-40 flex flex-col gap-2">
                                <a href="#" aria-label="Twitter" className="rounded-md bg-card/60 ring-1 ring-border/60 p-2 hover:bg-accent/40 transition-colors">
                                    <Twitter className="h-4 w-4" />
                                </a>
                                <a href="#" aria-label="Facebook" className="rounded-md bg-card/60 ring-1 ring-border/60 p-2 hover:bg-accent/40 transition-colors">
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a href="#" aria-label="Instagram" className="rounded-md bg-card/60 ring-1 ring-border/60 p-2 hover:bg-accent/40 transition-colors">
                                    <Instagram className="h-4 w-4" />
                                </a>
                            </div>
                        </aside>

                        {/* Article body */}
                        <article>
                            <div className="text-left">
                                <div className="inline-flex rounded-[6px] bg-secondary/15 text-secondary-foreground ring-1 ring-secondary/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                                    {post.category}
                                </div>
                                <h1 className="mt-3 text-[30px] md:text-[38px] font-black leading-tight tracking-tight text-foreground">
                                    {post.title}
                                </h1>
                                <div className="mt-2 text-[11px] text-muted-foreground">
                                    <span className="font-medium text-foreground">{post.author}</span> • {post.time} • {post.date} • {post.readTime}
                                </div>
                            </div>

                            {post.subheadline ? (
                                <h2 className="mt-6 text-[15px] font-extrabold text-foreground tracking-tight">
                                    {post.subheadline}
                                </h2>
                            ) : null}

                            <p className="mt-3 text-[14px] leading-7 text-muted-foreground">{post.lead}</p>

                            <p className="mt-4 text-[13px] leading-6 text-muted-foreground">
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                                BlackRock <span className="text-foreground font-semibold">$118m</span> sərmayəni Arrival-a yatırdığını açıqladı. Bu razılaşma
                                startapın dəyərini <span className="text-foreground font-semibold">€3bn</span> səviyyəsinə yüksəldir və şirkətin ilk ABŞ
                                zavodunun açılmasını sürətləndirir.
                            </p>

                            {post.quote ? (
                                <blockquote className="mt-6 rounded-xl bg-card/80 ring-1 ring-border/60 p-5 text-center text-[13px] text-foreground font-semibold shadow-sm">
                                    {post.quote}
                                </blockquote>
                            ) : null}

                            <div className="mt-6 space-y-4">
                                {post.body.map((para, i) => (
                                    <p key={i} className="text-[13px] leading-6 text-muted-foreground">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Prev / Next */}
                            <div className="mt-6 flex items-center justify-between">
                                <Link href="/bloq" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-2 text-xs hover:bg-accent/40 transition-colors">
                                    <ChevronLeft className="h-4 w-4" /> Əvvəlki yazı
                                </Link>
                                <Link href="/bloq" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-2 text-xs hover:bg-accent/40 transition-colors">
                                    Növbəti yazı <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>

                            {/* Reviews */}
                            <section className="mt-8">
                                <h3 className="text-lg font-semibold">Rəylər</h3>
                                <div className="mt-4 space-y-4">
                                    {reviews.map((r) => (
                                        <div key={r.id} className="rounded-lg border border-border bg-card/60 p-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-[11px] font-bold">
                                                        {r.name.charAt(0)}
                                                    </span>
                                                    <div>
                                                        <p className="text-sm font-medium">{r.name}</p>
                                                        <p className="text-xs text-muted-foreground">{r.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <Star key={i} className={`h-4 w-4 ${i <= r.rating ? "text-yellow-400" : "text-muted-foreground"}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm text-muted-foreground">{r.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Comments form */}
                            <section className="mt-10">
                                <h3 className="text-lg font-semibold">Şərh yaz</h3>
                                <form action="#" className="mt-4 space-y-4">
                                    <textarea
                                        name="comment"
                                        placeholder="Şərhiniz"
                                        className="w-full min-h-[140px] resize-y rounded-md border border-border bg-card/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-secondary/40"
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <input
                                            name="name"
                                            placeholder="Adınız"
                                            className="rounded-md border border-border bg-card/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-secondary/40"
                                        />
                                        <input
                                            name="email"
                                            placeholder="E-poçt"
                                            type="email"
                                            className="rounded-md border border-border bg-card/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-secondary/40"
                                        />
                                        <input
                                            name="website"
                                            placeholder="Vebsayt"
                                            className="rounded-md border border-border bg-card/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-secondary/40"
                                        />
                                    </div>
                                    <button type="submit" className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 text-xs font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors">
                                        Göndər
                                    </button>
                                </form>
                            </section>
                        </article>
                    </div>
                </section>

                {/* Right: Sidebar */}
                <aside className="lg:col-span-4 space-y-6">
                    {/* Categories */}
                    <div className="rounded-xl border border-border bg-card/60 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Kateqoriyalar</h4>
                        <ul className="mt-3 divide-y divide-border/60">
                            {categories.map((c) => (
                                <li key={c} className="py-2">
                                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {c}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Search */}
                    <div className="rounded-xl border border-border bg-card/60 p-5">
                        <div className="relative">
                            <input
                                placeholder="Axtar..."
                                className="w-full rounded-md border border-border bg-background px-3 py-2 pr-9 text-sm outline-none focus:ring-2 focus:ring-secondary/40"
                            />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </div>

                    {/* Top Posts */}
                    <div className="rounded-xl border border-border bg-card/60 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Ən çox oxunanlar</h4>
                        <ol className="mt-3 space-y-3">
                            {topPosts.map((t, i) => (
                                <li key={t} className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground">
                                        {i + 1}
                                    </span>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Instagram */}
                    <div className="rounded-xl border border-border bg-card/60 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Instagram</h4>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                            {instaImages.map((src, i) => (
                                <div key={i} className="relative aspect-square overflow-hidden rounded-md ring-1 ring-border/60">
                                    <Image src={src} alt="Instagram" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
