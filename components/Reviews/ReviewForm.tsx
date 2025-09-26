"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    className?: string;
};

const SERVICES = ["Netflix", "Spotify", "YouTube Premium", "Disney+", "ChatGPT Plus", "Adobe Creative", "Microsoft Office", "VPN"];

export default function ReviewForm({ className }: Props) {
    const [name, setName] = useState("");
    const [service, setService] = useState<string>("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number>(5);
    const [sent, setSent] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const nameError = useMemo(() => (name.trim().length < 2 ? "Ad çox qısadır" : ""), [name]);
    const serviceError = useMemo(() => (!service ? "Xidməti seçin" : ""), [service]);
    const commentError = useMemo(() => (comment.trim().length < 10 ? "Rəy minimum 10 simvol olmalıdır" : ""), [comment]);
    const remaining = useMemo(() => Math.max(0, 240 - comment.length), [comment]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setTouched({ name: true, service: true, comment: true });
        if (nameError || serviceError || commentError) return;
        setSent(true);
        setTimeout(() => setSent(false), 2500);
        setName("");
        setService("");
        setComment("");
        setRating(5);
        setTouched({});
    }

    return (
        <form onSubmit={handleSubmit} className={"rounded-2xl bg-card/60 ring-1 ring-border/50 backdrop-blur p-4 sm:p-5 text-foreground shadow-sm " + (className ?? "")}>
            <h3 className="text-lg font-semibold">Rəyinizi yazın</h3>
            <p className="text-sm text-muted-foreground mt-1">Qısa fikrinizi bizimlə bölüşün</p>

            <div className="mt-4 grid grid-cols-1 gap-3">
                <label className="block">
                    <span className="sr-only">Ad Soyad</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                        placeholder="Ad Soyad"
                        className={"w-full rounded-xl bg-input/50 border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 " + (touched.name && nameError ? "border-red-500 focus-visible:ring-red-500" : "border-border")}
                        aria-label="Ad Soyad"
                        aria-invalid={!!(touched.name && nameError)}
                        aria-describedby="name-error"
                    />
                    {touched.name && nameError ? (
                        <span id="name-error" className="mt-1 block text-xs text-red-500">{nameError}</span>
                    ) : null}
                </label>

                <label className="block">
                    <span className="sr-only">Xidmət</span>
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        onBlur={() => setTouched((s) => ({ ...s, service: true }))}
                        className={"w-full rounded-xl bg-input/50 border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 " + (touched.service && serviceError ? "border-red-500 focus-visible:ring-red-500" : "border-border")}
                        aria-label="Xidmət"
                        aria-invalid={!!(touched.service && serviceError)}
                        aria-describedby="service-error"
                    >
                        <option value="" disabled>
                            Xidmət seçin
                        </option>
                        {SERVICES.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                    {touched.service && serviceError ? (
                        <span id="service-error" className="mt-1 block text-xs text-red-500">{serviceError}</span>
                    ) : null}
                </label>

                <label className="block">
                    <span className="sr-only">Rəyiniz</span>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value.slice(0, 240))}
                        onBlur={() => setTouched((s) => ({ ...s, comment: true }))}
                        placeholder="Rəyiniz"
                        className={"min-h-[96px] w-full rounded-xl bg-input/50 border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 " + (touched.comment && commentError ? "border-red-500 focus-visible:ring-red-500" : "border-border")}
                        aria-label="Rəyiniz"
                        aria-invalid={!!(touched.comment && commentError)}
                        aria-describedby="comment-error comment-help"
                    />
                    <div className="mt-1 flex items-center justify-between">
                        {touched.comment && commentError ? (
                            <span id="comment-error" className="text-xs text-red-500">{commentError}</span>
                        ) : <span />}
                        <span id="comment-help" className="text-xs text-muted-foreground">{remaining} / 240</span>
                    </div>
                </label>
            </div>

            <div className="mt-4">
                <div role="radiogroup" aria-label="Qiymət" className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Qiymət:</span>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <button
                                type="button"
                                key={i}
                                onClick={() => setRating(i)}
                                aria-label={`Rating ${i}`}
                                aria-checked={rating === i}
                                role="radio"
                                className={"p-1 rounded-md " + (rating === i ? "bg-accent/50 ring-1 ring-border/60" : "hover:bg-accent")}
                            >
                                <Star className={"h-4 w-4 " + (i <= rating ? "text-yellow-400" : "text-muted-foreground")} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <Button type="submit" className="w-full rounded-full">Göndər</Button>
            </div>
            {sent ? <div className="mt-3 text-sm text-green-500">Təşəkkürlər! Rəyiniz qeydə alındı.</div> : null}
        </form>
    );
}



