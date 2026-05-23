function RewardCard({
  target,
  reward,
  image,
}) {
  return (
    <div className="bg-white rounded-[35px] p-6 shadow-sm border border-gray-200 flex justify-between items-center">
      
      <div className="max-w-[60%]">

        <p className="text-gray-500 text-lg">
          Sell
        </p>

        <h2 className="text-5xl font-bold text-black mt-2">
          {target}
          <span className="text-green-500 text-3xl ml-2">
            KG
          </span>
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          {reward}
        </p>

      </div>

      <img
        src={image}
        alt="reward"
        className="w-40 object-contain"
      />

    </div>
  );
}

export default RewardCard;