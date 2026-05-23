import BottomDock from "../components/BottomDock";
import ProfileCard from "../components/ProfileCard";

function Profile() {

  const accountOptions = [
    {
      title: "Pickup Requests",
      subtitle: "View your pickup history",
    },
    {
      title: "Payment Methods",
      subtitle: "Manage your payment methods",
    },
    {
      title: "Addresses",
      subtitle: "Manage saved addresses",
    },
    {
      title: "Help & Support",
      subtitle: "Contact support team",
    },
    {
      title: "Privacy Policy",
      subtitle: "Read our privacy policy",
    },
    {
      title: "Terms & Conditions",
      subtitle: "Read terms and conditions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">

      {/* PROFILE HEADER */}

      <div className="bg-gradient-to-r from-green-900 to-green-700 px-5 pt-14 pb-12 rounded-b-[40px]">

        <div className="flex items-center gap-5">

          <div className="w-24 h-24 rounded-full bg-cyan-400 flex items-center justify-center text-5xl text-white">
            R
          </div>

          <div>

            <h1 className="text-4xl font-bold text-white">
              Rudra Pratap Sharma
            </h1>

            <p className="text-green-100 text-xl mt-2">
              +91 942202142
            </p>

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}

      <div className="px-5 mt-8 grid grid-cols-2 gap-4">

        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold">
            Pickup Requests
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold">
            Refer & Earn
          </h2>
        </div>

      </div>

      {/* DONATE BANNER */}

      <div className="px-5 mt-8">

        <div className="bg-gradient-to-r from-pink-600 to-red-500 rounded-[35px] overflow-hidden p-6 relative min-h-[220px]">

          <div className="max-w-[55%] relative z-10">

            <h2 className="text-4xl font-bold text-white leading-tight">
              Donate your scrap
            </h2>

            <p className="text-pink-100 text-lg mt-4 leading-relaxed">
              Support waste pickers and eco-friendly initiatives.
            </p>

          </div>

          <img
            src="/profile/donate.png"
            alt="donate"
            className="absolute right-0 bottom-0 w-52"
          />

        </div>

      </div>

      {/* SETTINGS */}

      <div className="px-5 mt-10 flex flex-col gap-5">

        {accountOptions.map((item) => (
          <ProfileCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

      </div>

      {/* LOGOUT */}

      <div className="px-5 mt-10">

        <button className="w-full bg-red-500 text-white text-2xl font-bold py-5 rounded-3xl">
          Logout
        </button>

      </div>

      <BottomDock />

    </div>
  );
}

export default Profile;