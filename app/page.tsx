import dynamic from "next/dynamic";

const CategoriesHome = dynamic(
  () => import("@/components/CategoriesHome/CategoriesHome"),
  { ssr: true }
);
const BigCategories = dynamic(
  () => import("@/components/BigCategories/BigCategories"),
  { ssr: true }
);

export default function Home() {
  return (
    <>

      <main>
        <CategoriesHome />
        <BigCategories />

      </main >
    </>
  );
}
