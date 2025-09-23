import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";

const CategoriesCarousel = dynamic(
  () => import("@/components/Categories_Circle/CategoriesCarousel"),
  { ssr: true }
);
const CategoriesHome = dynamic(
  () => import("@/components/CategoriesHome/CategoriesHome"),
  { ssr: true }
);
const BigCategories = dynamic(
  () => import("@/components/BigCategories/BigCategories"),
  { ssr: true }
);
const TestimonialHome = dynamic(
  () => import("@/components/TestimonialHome/TestimonialHome"),
  { ssr: true }
);

export default function Home() {
  return (
    <>

      <main>
        <CategoriesCarousel />
        <Hero />
        <CategoriesHome />
        <TestimonialHome />

        <BigCategories />

      </main >
    </>
  );
}
