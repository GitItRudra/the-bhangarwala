import { NavLink } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { FiAward } from "react-icons/fi";

import { MdCurrencyRupee } from "react-icons/md";

function BottomDock() {
  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <AiOutlineHome size={28} />,
    },
    {
      path: "/rates",
      label: "Rate List",
      icon: <MdCurrencyRupee size={28} />,
    },
    {
      path: "/rewards",
      label: "Rewards",
      icon: <FiAward size={28} />,
    },
    {
      path: "/profile",
      label: "Profile",
      icon: <AiOutlineUser size={28} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl border-t border-gray-200">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-gray-100 text-black"
                  : "text-gray-500"
              }`
            }
          >
            {item.icon}

            <span className="text-sm mt-1 font-medium">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BottomDock;