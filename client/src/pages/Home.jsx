import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <FeaturedProducts limit={4} />
    </MainLayout>
  );
};

export default Home;