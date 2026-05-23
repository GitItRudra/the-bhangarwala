import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Rates from "./pages/Rates";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";

import SplashScreen from "./components/SplashScreen";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="bg-black min-h-screen text-white">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;