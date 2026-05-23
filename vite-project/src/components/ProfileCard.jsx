function ProfileCard({ title, subtitle }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm flex justify-between items-center">
      
      <div>
        <h2 className="text-2xl font-semibold text-black">
          {title}
        </h2>

        {subtitle && (
          <p className="text-gray-500 mt-1">
            {subtitle}
          </p>
        )}
      </div>

      <span className="text-3xl text-gray-400">
        ›
      </span>

    </div>
  );
}

export default ProfileCard;