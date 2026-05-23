import BottomDock from "../components/BottomDock";
import RewardCard from "../components/RewardCard";

function Rewards() {

  const rewards = [
    {
      target: 2000,
      reward: "Win premium travel bag and gadgets",
      image: "/rewards/bag.png",
    },
    {
      target: 5000,
      reward: "Win smartwatch, fan and accessories",
      image: "/rewards/watch.png",
    },
    {
      target: 10000,
      reward: "Win eco-friendly bottles and luggage set",
      image: "/rewards/bottle.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">

      {/* HEADER */}

      <div className="px-5 pt-10">

        <div className="flex justify-between items-center">

          <h1 className="text-5xl font-bold text-black">
            Rewards
          </h1>

          <div className="bg-indigo-600 text-white px-6 py-3 rounded-full text-xl font-semibold">
            0 KG
          </div>

        </div>

        <p className="text-gray-500 text-lg mt-4">
          Recycling rewards based on total scrap sold
        </p>

      </div>

      {/* TOP BANNER */}

      <div className="px-5 mt-8">

        <div className="bg-gradient-to-r from-purple-900 to-indigo-700 rounded-[35px] p-6 overflow-hidden relative min-h-[260px]">

          <div className="max-w-[60%] relative z-10">

            <div className="bg-red-500 inline-block px-5 py-2 rounded-full text-white font-bold text-lg">
              Sell 2000 KG
            </div>

            <h2 className="text-4xl font-bold text-white mt-6 leading-tight">
              Win Amazing Rewards
            </h2>

            <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold text-lg">
              Sell Now →
            </button>

          </div>

          <img
            src="/rewards/bag.png"
            alt="reward"
            className="absolute right-0 bottom-0 w-52"
          />

        </div>

      </div>

      {/* REWARD LIST */}

      <div className="px-5 mt-10 flex flex-col gap-6">

        {rewards.map((item) => (
          <RewardCard
            key={item.target}
            target={item.target}
            reward={item.reward}
            image={item.image}
          />
        ))}

      </div>

      <BottomDock />

    </div>
  );
}

export default Rewards;