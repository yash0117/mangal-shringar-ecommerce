import CategoryCard from "./CategoryCard";

import dresses from "../../assets/images/categories/dresses.jpg";
import jewellery from "../../assets/images/categories/jewellery.jpg";
import mukut from "../../assets/images/categories/mukut.jpg";
import mala from "../../assets/images/categories/mala.jpg";
import bansuri from "../../assets/images/categories/bansuri.jpg";
import accessories from "../../assets/images/categories/accessories.jpg";

const categories = [
  { title: "Dresses", image: dresses },
  { title: "Jewellery", image: jewellery },
  { title: "Mukut", image: mukut },
  { title: "Mala", image: mala },
  { title: "Bansuri", image: bansuri },
  { title: "Accessories", image: accessories },
];

const Categories = () => {
  return (
    <section className="bg-[#FFFDF8] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#6B4F2A]">
          Shop by Category
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Discover our beautiful collection for Laddu Gopal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              image={item.image}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;