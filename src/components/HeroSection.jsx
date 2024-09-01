const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-400  bg-clip-text text-transparent">
          Auxilia Labs
        </span>
      </h1>
      <p className="text-6xl sm:text-4xl lg:text-7xl text-center mt-6">
        Innovate. Integrate. Elevate.
      </p>
      <p className="mt-10 text-lg text-center text-neutral-400 px-6">
        Empowering businesses with advanced mobile apps, dynamic web solutions,
        immersive 3D designs, and robust software development to stay ahead in
        the digital age.
      </p>
      <div className="flex flex-col justify-center my-12  space-y-6 items-center">
        <a
          href="#"
          className="bg-indigo-800 text-white font-bold py-4 px-6 rounded-full text-lg"
        >
          Schedule Meeting
        </a>
        <a href="#" className="mt-4 text-lg text-neutral-200 text-sm">
          About Us
        </a>
      </div>
    </div>
  );
};

export default Herosection;
