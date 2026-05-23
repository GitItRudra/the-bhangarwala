import BottomDock from "../components/BottomDock";
import CategoryCard from "../components/CategoryCard";
import RateCard from "../components/RateCard";

function Home() {
  const categories = [
    {
      title: "Paper",
      image: "/categories/paper.png",
    },
    {
      title: "Plastic",
      image: "/categories/plastic.png",
    },
    {
      title: "Metal",
      image: "/categories/metal.png",
    },
    {
      title: "E-Waste",
      image: "/categories/ewaste.png",
    },
    {
      title: "Glass",
      image: "/categories/glass.png",
    },
    {
      title: "Textile",
      image: "/categories/textile.png",
    },
  ];

  const rates = [
  {
    title: "Iron",
    price: 20,
    image: "/categories/iron.png",
  },
  {
    title: "Copper",
    price: 300,
    image: "/categories/copper.png",
  },
  {
    title: "Newspaper",
    price: 10,
    image: "/categories/newspaper.png",
  },
  {
    title: "Glass Bottles",
    price: 5,
    image: "/categories/bottles.png",
  },
];

  return (
    <div className="min-h-screen bg-white pb-32">
      
      {/* HERO SECTION */}

      <div className="bg-sky-500 px-6 pt-10 pb-12 rounded-b-[40px]">
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            The Bhangarwala
          </h1>
        </div>

        <div className="mt-14">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Sell scrap in seconds!
          </h2>

          <button className="mt-8 bg-white text-sky-600 font-bold px-8 py-4 rounded-2xl text-xl">
            Sell Now →
          </button>
        </div>
      </div>

      {/* CATEGORY SECTION */}

      <div className="px-5 mt-10">
        
        <h2 className="text-4xl font-bold text-black">
          What do you want to sell?
        </h2>

        <p className="text-gray-500 text-lg mt-2">
          Select scrap categories you want to sell
        </p>

        <div className="grid grid-cols-2 gap-5 mt-8">
          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
      {/* TRENDING RATES */}

<div className="px-5 mt-14">

  <h2 className="text-4xl font-bold text-black">
    Trending Rates
  </h2>

  <p className="text-gray-500 text-lg mt-2">
    Best prices in your area
  </p>

  <div className="flex gap-4 overflow-x-auto mt-8 pb-3">
    {rates.map((item) => (
      <RateCard
        key={item.title}
        title={item.title}
        price={item.price}
        image={item.image}
      />
    ))}
  </div>
</div>
{/* REFER SECTION */}

<div className="px-5 mt-14">

  <h2 className="text-4xl font-bold text-black">
    Refer your friends & Earn
  </h2>

  <p className="text-gray-500 text-lg mt-2">
    Earn ₹30 on each successful referral
  </p>

  <div className="mt-6 bg-gradient-to-r from-indigo-700 to-blue-600 rounded-[35px] overflow-hidden p-6 relative">

    <div className="max-w-[55%] z-10 relative">
      <h3 className="text-4xl font-bold text-white leading-tight">
        Refer & Earn ₹30
      </h3>

      <button className="mt-6 bg-white text-indigo-700 font-bold px-6 py-3 rounded-2xl text-lg">
        Refer Now →
      </button>
    </div>

    <img
      src="/banners/refer.png"
      alt="refer"
      className="absolute right-0 bottom-0 w-44"
    />
  </div>
</div>
{/* VEHICLE SCRAP SECTION */}

<div className="px-5 mt-14">

  <h2 className="text-4xl font-bold text-black">
    Want to scrap your vehicle?
  </h2>

  <p className="text-gray-500 text-lg mt-3 leading-relaxed">
    Scrap your vehicle with transparency,
    compliance and best market rates.
  </p>

  {/* FEATURES */}

  <div className="flex gap-3 flex-wrap mt-6">

    <div className="border-2 border-green-500 text-green-600 px-5 py-3 rounded-full font-semibold">
      ₹ Best Rates
    </div>

    <div className="border-2 border-green-500 text-green-600 px-5 py-3 rounded-full font-semibold">
      ✔ Compliance
    </div>

    <div className="border-2 border-green-500 text-green-600 px-5 py-3 rounded-full font-semibold">
      🔍 Transparency
    </div>

  </div>

  {/* CARD */}

  <div className="mt-8 bg-gradient-to-r from-slate-900 to-cyan-900 rounded-[35px] overflow-hidden p-6 relative min-h-[280px]">

    <div className="max-w-[55%] relative z-10">

      <h3 className="text-4xl font-bold text-white leading-tight">
        Vehicle Scrapping Made Easy!
      </h3>

      <p className="text-gray-300 mt-5 text-lg leading-relaxed">
        Scrap any vehicle from 2 wheelers
        to heavy vehicles.
      </p>

      <button className="mt-8 bg-green-500 text-white font-bold px-6 py-3 rounded-2xl text-lg">
        Scrap Vehicle →
      </button>

    </div>

    <img
      src="/banners/vehicle.png"
      alt="vehicle"
      className="absolute right-0 bottom-0 w-56"
    />

  </div>

</div>
      <BottomDock />
    </div>
  );
}

export default Home;