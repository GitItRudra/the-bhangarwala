function RateCard({ title, category, price, image, unit }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center justify-between shadow-sm">

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain rounded-2xl bg-gray-50 p-2"
        />

        <div>

          <h2 className="text-2xl font-semibold text-black">
            {title}
          </h2>

          <p className="text-gray-500 text-lg mt-1">
            {category}
          </p>

        </div>

      </div>

      <div className="text-right">

        <p className="text-3xl font-bold text-black">
          ₹{price}
        </p>

        <span className="text-gray-500 text-lg">
          /{unit}
        </span>

      </div>

    </div>
  );
}

export default RateCard;