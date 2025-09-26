import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import React from 'react'

export default function RulesPage() {

    return (
        <main>
            <section className=" max-w-[90rem] mx-auto">
                <div className="mx-auto  ">
                    <Breadcrumb className="mb-4 mt-12" />

                    <header className="text-center mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">BASED.AZ | QAYDALAR</h1>
                        <p className="mt-2 text-sm text-muted-foreground">Based.Az - İstifadəçi Qaydaları və Şərtləri</p>
                    </header>

                    <article className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:marker:text-secondary">
                        <p>
                            22 Sentyabr 2025-ci ildən etibarən olan bütün əməliyyatlar üçün qeyd olunan &quot;Qaydalar və Şərtlər&quot; icra olunacaqdır. Based.Az olaraq hər zaman istifadəçilərə tam kompensasiya ödəyirdik. Bu həm istifadəçilərin təhlükəsizliyi həm də xidmətdən tam zəmanətlə yararlanması üçün nəzərdə tutulmuşdur. Biz istifadəçilərimizə Rəqəmsal Hesab və Xidmətləri ən münasib və zəmanətli xidmətlərlə təklif edirik və bizdən kənar olan Platform tərəfindən edilən hər hansı siyasət dəyişiklikləri üçün maksimum dəstək göstərməyə hər zaman olduğu kimi çalışacağıq. Xidmətimizdən istifadə edərək bu &quot;Qaydalar və Şərtlər&quot;-i qəbul etmiş olursunuz və bu detalları sonadək oxumağınızı xahiş edirik.
                        </p>

                        <h2>QAYDALAR</h2>

                        <h3>1. Azyaşlıların Alış-veriş Qaydaları</h3>
                        <ul>
                            <li>18 yaşdan aşağı şəxslərin valideyn icazəsi olmadan saytdan alış-veriş etməsi qadağandır.</li>
                            <li>Ailə üzvünün kart məlumatlarından istifadə edərək ödəniş etməsinə görə sayt məsuliyyət daşımır.</li>
                            <li>Valideyn icazəsi olmadan azyaşlıların etdiyi alış-verişlərə görə sayt məsuliyyət daşımır.</li>
                        </ul>

                        <h3>2. Məlumatların Düzgün Verilməsi</h3>
                        <ul>
                            <li>Sifariş zamanı təqdim edilən məlumatların düzgünlüyünə müştəri cavabdehdir.</li>
                            <li>Səhv yazılan ad, hesab məlumatları və digər detallar səbəbilə yaranan problemlərə görə sayt məsuliyyət daşımır.</li>
                            <li>Mesaj silinməsi aktiv olan istifadəçilər sifariş məlumatlarını mütləq qeyd etməlidirlər. Əks halda sifariş keçərsiz sayılır.</li>
                        </ul>

                        <h3>3. Sifarişin Çatdırılma Müddəti</h3>
                        <ul>
                            <li>Sifariş, ödəniş təsdiqləndikdən sonra adətən dərhal, maksimum isə 24 saat ərzində təqdim olunur.</li>
                            <li>Sifarişlər sıra ilə çatdırılır. Müştəri sifariş verdikdən dərhal sonra gecikmə səbəbilə ödənişi geri tələb edə bilməz.</li>
                        </ul>

                        <h3>4. Əlaqə və Dəstək</h3>
                        <ul>
                            <li>Sifarişlər yalnız Based.Az üzərindən qeydə alınır və digər mənbədən olan alışlara görə məsuliyyət daşımırıq.</li>
                            <li>WhatsApp üzərindən sifarişlər sizin rahatlığınız üçündür; nəticədə bütün məlumatlar yalnız sayt hesabınızda görünür.</li>
                            <li>Telefon, WhatsApp və Telegram vasitəsilə edilən zənglər cavablandırılmır, sürətli xidmət üçün mesaj yazmağınız kifayətdir.</li>
                        </ul>

                        <h3>5. Ödənişlər və Bank Hesabları</h3>
                        <ul>
                            <li>Based.Az saytında qeyd edilən bank hesablarından başqa hesablara edilən ödənişlərə sayt məsuliyyət daşımır.</li>
                            <li>Ödəniş edildikdən sonra qəbz təqdim edilməlidir, əks halda, sifariş etibarsız hesab olunur və qeydə alınmır.</li>
                        </ul>

                        <h3>6. Abunəlik və Geri Ödəniş Şərtləri</h3>
                        <ul>
                            <li>Aylıq hesab yenilənməsiylə bağlı 2-3 gün öncədən bildiriş göndəririk.</li>
                            <li>Hesaba davam edilmədikdə öncədən bildirməyiniz xahiş olunur. Bu, bizim və digər istifadəçilərin xidmətdən daha gözəl yararlanması üçündür.</li>
                            <li>Müştəri cihazında və ya başqa bir səbəbdən hesabdan istifadə edə bilmədikdə geri ödəniş edilmir.</li>
                            <li>Stokda olmayan məhsullara və ya texniki nasazlığa görə sifariş icra olunmursa, ödəniş tam şəkildə geri qaytarılır.</li>
                            <li>Texniki problem yaşayan istifadəçi sübut təqdim etməlidir (ekran görüntüsü və s.).</li>
                            <li>Geri Ödənişlər istifadə müddətinə nəzərən 20% dəyərində balansınıza əlavə olunur.</li>
                            <li>Geri qaytarılma və ya əvəzləmə prosesi maksimum 3 iş günü ərzində icra olunur.</li>
                        </ul>

                        <h3>7. Məhsul Qaydaları və İstifadə Məsuliyyəti</h3>
                        <ul>
                            <li>Məhsul haqqında öncədən məlumat alınması, İstifadə Qaydalarını oxumaq mütləqdir.</li>
                            <li>İstifadəçilər saytda qeydiyyat etdikləri andan &quot;Qaydalar və Şərtləri&quot; qəbul etmiş sayılır.</li>
                            <li>Biz yalnız paket aktivləşdiririk, məhsul platformaları ilə əlaqəli digər məsələlər öhdəliyimizdə deyil.</li>
                            <li>Tək cihazlıq hesabların paylaşılması qadağandır və ortaq hesabların məlumatlarını dəyişdirmək qəti qadağandır.</li>
                            <li>Məhsulun işləmə prinsipi və qaydaları &quot;Sifarişlərim &gt; MÜTLƏQ OXU&quot; bölməsində göstərilib. İstifadəçi bu məlumatlarla tanış olmalıdır.</li>
                        </ul>

                        <h3>8. Təhlükəsizlik və Fırıldaqçılıq</h3>
                        <ul>
                            <li>Based.az saytında qeyd edilən əlaqə nömrələrindən başqa şəxslərlə baş verən problemlərə görə sayt məsuliyyət daşımır.</li>
                            <li>Saxta qəbz təqdim edən, fırıldaqçılıq edən və ya ortaq hesab istifadəçilərini narahat edən şəxslər ömürlük bloklanacaq.</li>
                            <li>Hesab oğurluğu və fırıldaqçılıq cəhdləri aşkarlanarsa, bu şəxslərin məlumatları aidiyyəti qurumlara təqdim edilir.</li>
                        </ul>

                        <h3>9. Topdan Satış və Qiymətlər</h3>
                        <ul>
                            <li>Based.Az topdan satış və B2B əməkdaşlıq imkanları təqdim edir.</li>
                            <li>Məhsullar birbaşa mənbədən əldə olunduğu üçün bazar qiymətindən daha sərfəli təqdim olunur.</li>
                            <li>Əməkdaşlıq üçün rəsmi sorğular WhatsApp və ya info@based.az vasitəsilə qəbul edilir.</li>
                        </ul>

                        <h3>10. Müraciət və İş Saatları</h3>
                        <ul>
                            <li>Müraciətlər yalnız tam və dəqiq şəkildə yazılmalıdır. Qeyri-dəqiq və natamam mesajlar qeydə alınmır.</li>
                            <li>Sifariş vermədən öncə məhsul haqqında ətraflı məlumat almaq üçün suallar vermək tövsiyə edilir.</li>
                            <li>Canlı Dəstək Xidməti 7/24 saat aktivdir və hər zaman çalışır. (müraciətlərin gündüz, 09:00-01:00 saatlarında arasında edilməsi sürətli dəstək üçün tövsiyə olunur)</li>
                        </ul>

                        <h3>11. Qeydiyyat və Hüquqi Razılaşma</h3>
                        <ul>
                            <li>Qeydiyyat zamanı istifadəçi bu qaydalar və şərtləri qəbul etmiş sayılır.</li>
                            <li>İstifadəçilər sifariş zamanı öz məlumatlarını tam və düzgün təqdim etməlidirlər. Bu, həm xidmətin düzgün icrası, həm də lazım olduqda sizinlə operativ əlaqə saxlamaq üçün vacibdir.</li>
                        </ul>

                        <h3>12. Geri Qaytarılma və Əvəzləmə Şərtləri</h3>
                        <ul>
                            <li>Təqdim edilmiş promokodlar tək istifadə üçün nəzərdə tutulduğundan geri qaytarılmır.</li>
                            <li>Yanlış platforma seçimi və ya istifadəçi xətası (məsələn, düzgün olmayan aktivasiya) hallarında məsuliyyət müştərinin üzərindədir.</li>
                            <li>Texniki problem yalnız sayt və ya məhsuldan qaynaqlanırsa və sübut təqdim edilərsə, məhsul dəyişdirilə və ya tam ödəniş geri qaytarılır.</li>
                            <li>Geri ödəniş və ya əvəzləmə prosesi istifadə müddəti və geri ödəniş məbləğinin 20%-i olmaqla 3 iş günü ərzində icra olunur.</li>
                        </ul>

                        <h3>13. Hüquqi Məlumat və Vergi</h3>
                        <ul>
                            <li>Saytda göstərilən bütün qiymətlərə vergi daxildir.</li>
                            <li>Based.Az Azərbaycan Respublikası qanunvericiliyinə əsasən fəaliyyət göstərir. <span className="whitespace-nowrap">VÖEN: 3201953392</span></li>
                            <li>Əməkdaşlıq üçün rəsmi sorğular WhatsApp və ya info@based.az vasitəsilə qəbul edilir.</li>
                        </ul>

                        <h2>ŞƏRTLƏR</h2>

                        <h3>1. Platforma tərəfindən hesabın bağlanması</h3>
                        <p>
                            Hesab platforma qərarı ilə deaktiv olunduqda, istifadə edilməmiş günlərin dəyərinin yalnız 20%-i balansınıza əlavə olunur.
                        </p>
                        <p>
                            Misal: 90 günlük məhsul üçün 10 AZN ödəmisiniz. 60 gün istifadə etdikdən sonra hesab platforma tərəfindən bağlanıb. Qalan 30 günün dəyəri 3.40 AZN təşkil edir. Bu məbləğin yalnız 20%-i - təxminən 0.70 AZN balansınıza geri əlavə olunur.
                        </p>

                        <h4>Bu hallara misal</h4>
                        <ul>
                            <li>Netflix-in region üzrə hesabları bağlaması (20 Aprel 2024)</li>
                            <li>YouTube Premiumunun aylıq yenilənməyə keçməsi (23 Avqust 2025)</li>
                            <li>OpenAI (ChatGPT) hesablarının növbəli deaktiv edilməsi (20 Sentyabr 2025)</li>
                        </ul>

                        <h3>2. Müddətin 90%-dən çox istifadə olunması</h3>
                        <ul>
                            <li>Avtomatik təqdim edilən hazır hesabların istifadə müddətinin 10%-i və ya daha azı qaldıqda zəmanət və dəstək təmin edilmir.</li>
                            <li>Misal: 30 günlük məhsulda 28-ci gündə deaktiv olarsa (93.3%), geri ödəniş/əvəzləmə mümkün deyil.</li>
                        </ul>

                        <h3>3. Niyə 20% kompensasiya?</h3>
                        <p>
                            Based.Az istifadəçilər üçün risk götürərək öncədən real xərclərlə paketləri aktivləşdirir. Platform dəyişiklikləri zamanı həm xərclərimizi itirir, həm də istifadəçiyə kompensasiya edirik. Bu səbəbdən istifadə olunmamış günlərin 20%-i balans şəklində geri əlavə olunur.
                        </p>

                        <p>
                            Based.Az xidmətlərindən istifadə edən hər bir istifadəçi bu Qaydalar və Şərtlərlə tam razı olduğunu təsdiqləyir.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}