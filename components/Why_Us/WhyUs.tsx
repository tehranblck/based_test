import { Shield, Tag, Headphones, Clock } from "lucide-react";
import FeatureBox from "./FeatureBox";

export default function WhyUs() {
    const features = [
        {
            icon: <Shield className="w-6 h-6 text-gray-800" />,
            title: "Rəsmi Hesablar",
            description: "Sizə yalnız lisenziyalı, rəsmi və təhlükəsiz premium hesablar təqdim edirik. Saxta və qeyri-qanuni profillərlə riskə getməyin - Based.Az etibarinizi və hesab təhlükəsizliyinizi qoruyur."
        },
        {
            icon: <Tag className="w-6 h-6 text-gray-800" />,
            title: "Münasib Qiymətlər",
            description: "Ən populyar platformlara sərfəli qiymətlərlə çıxış imkanı veririk. Premium keyfiyyəti artıq baha qiyməte almaqa ehtiyac yoxdur - Based.Az ilə cibiniz də rahat nəfəs alacaq."
        },
        {
            icon: <Headphones className="w-6 h-6 text-gray-800" />,
            title: "24/7 Dəstək Komandası",
            description: "Sual və çətinlik yaranırsa, gecə və ya gündüz fərq etməz - Based.Az dəstək komandası daim yanınızdadır. Bizə yazın, tez və dəqiq kömək alacaqsınız."
        },
        {
            icon: <Clock className="w-6 h-6 text-gray-800" />,
            title: "Sürətli Təhvil",
            description: "Sifarişi etdiyiniz xidmətlər dərhal aktivləşdirilir. Uzun gözləmə yoxdur - Based.Az ilə sürətli və problemsiz keçid sizin olur."
        }
    ];

    return (
        <section className="py-16 px-4 bg-background">
            <div className=" mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Niyə Biz?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        "Rahatlıq, təhlükəsizlik və sərfəli qiymətlər bir arada."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureBox
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
