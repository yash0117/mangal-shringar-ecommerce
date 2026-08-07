import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <div>
          <span className="text-[#C8A24A] font-semibold uppercase tracking-wider">
            Welcome to Mangal Shringar
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#6B4F2A] leading-tight">
            Divine Dresses &
            <br />
            Jewellery for
            <br />
            Laddu Gopal
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Premium quality dresses, jewellery, mukut, malas,
            bansuri and accessories specially crafted for
            Laddu Gopal.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#C8A24A] text-white px-7 py-3 rounded-lg hover:bg-[#b88f30] transition">
              Shop Now
            </button>

            <button className="border border-[#C8A24A] text-[#6B4F2A] px-7 py-3 rounded-lg hover:bg-[#F7F1E5] transition">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Laddu Gopal"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;