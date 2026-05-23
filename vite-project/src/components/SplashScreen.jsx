function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">

      <img
        src="/logo.png"
        alt="The Bhangarwala"
        className="w-52 animate-pulse"
      />

    </div>
  );
}

export default SplashScreen;