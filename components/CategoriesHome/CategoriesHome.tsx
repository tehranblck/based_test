import CategoryBox from "./CategoryBox";
import categoriesData from "@/data/categories.json";

const palette = [
    "bg-red-600",
    "bg-blue-700",
    "bg-orange-600",
    "bg-blue-600",
    "bg-black",
    "bg-sky-600",
    "bg-emerald-600",
    "bg-indigo-600",
];

export default function CategoriesHome() {
    return (
        <section className="w-full py-8">
            <div className="mx-auto ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {categoriesData.slice(0, 10).map((category, idx) => (
                        <CategoryBox
                            key={category.id}
                            id={category.id}
                            name={category.name}
                            image={category.image}
                            href={`/products?category=${category.slug}`}
                            bgColor={palette[idx % palette.length]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
