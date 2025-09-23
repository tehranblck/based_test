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
const WhyUs = dynamic(
  () => import("@/components/Why_Us/WhyUs"),
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
        <WhyUs />
      </main>
    </>
  );
}
