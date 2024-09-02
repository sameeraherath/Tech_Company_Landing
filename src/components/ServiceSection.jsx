import { Service } from "../constants";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-indigo-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Service
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-3xl mt-10 lg:mt-20 tracking-wide">
          Transforming Ideas into{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
            Digital Realities
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 mb-40">
        {Service.map((Service, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex  p-4 rounded-lg mx-6 h-60 mt-10">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-indigo-500 rounded-full border-2 border-indigo-500 items-center justify-center">
                {Service.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{Service.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {Service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
