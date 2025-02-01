// src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('path-to-your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-extrabold">Welcome to Shree Nepal Rastriya Ma.Vi , Bderwa</h1>
        <p className="mt-4 text-xl">
          A place for learning, growth, and success.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
