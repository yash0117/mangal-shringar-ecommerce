const CategoryCard = ({ image, title }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-[#6B4F2A]">
          {title}
        </h3>
      </div>

    </div>
  );
};

export default CategoryCard;