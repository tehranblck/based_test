import Hero from "@/components/Hero/Hero";
import CategoriesCarousel from "@/components/Categories_Circle/CategoriesCarousel";
import Bar from "@/components/Bar/Bar";
import CategoriesHome from "@/components/CategoriesHome/CategoriesHome";
export default function Home() {
  return (
    <>

      <main>
        <CategoriesCarousel />
        <Hero />
        <Bar className="sm:px-4 mt-8" title="Kateqoriyalar" />
        <CategoriesHome />

      </main >
    </>
  );
}
