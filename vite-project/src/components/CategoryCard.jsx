function CategoryCard({ title, image }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-4 flex flex-col items-center justify-center shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-contain"
      />

      <h2 className="mt-3 text-xl font-semibold">
        {title}
      </h2>
    </div>
  );
}

export default CategoryCard;