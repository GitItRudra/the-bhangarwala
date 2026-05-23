import { useState } from "react";

import BottomDock from "../components/BottomDock";
import RateCard from "../components/RateCard";

function Rates() {

  const ratesData = [
    {
      title: "Books",
      category: "Paper",
      price: 9,
      unit: "kg",
      image: "/categories/paper.png",
    },
    {
      title: "Newspaper",
      category: "Paper",
      price: 10,
      unit: "kg",
      image: "/categories/newspaper.png",
    },
    {
      title: "Hard Plastic",
      category: "Plastic",
      price: 8,
      unit: "kg",
      image: "/categories/plastic.png",
    },
    {
      title: "Iron",
      category: "Metal",
      price: 20,
      unit: "kg",
      image: "/categories/iron.png",
    },
    {
      title: "Copper",
      category: "Metal",
      price: 300,
      unit: "kg",
      image: "/categories/copper.png",
    },
    {
      title: "Laptop",
      category: "E-Waste",
      price: 500,
      unit: "pcs",
      image: "/categories/ewaste.png",
    },
    {
      title: "Glass Bottles",
      category: "Glass",
      price: 5,
      unit: "kg",
      image: "/categories/bottles.png",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredRates = ratesData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-32">

      {/* HEADER */}

      <div className="px-5 pt-10">

        <h1 className="text-5xl font-bold text-black">
          Scrap Rates
        </h1>

        {/* SEARCH */}

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search material"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-3xl px-6 py-5 text-xl outline-none focus:border-black"
          />
        </div>

      </div>

      {/* RATE LIST */}

      <div className="px-5 mt-8 flex flex-col gap-5">

        {filteredRates.map((item) => (
          <RateCard
            key={item.title}
            title={item.title}
            category={item.category}
            price={item.price}
            image={item.image}
            unit={item.unit}
          />
        ))}

      </div>

      <BottomDock />

    </div>
  );
}

export default Rates;