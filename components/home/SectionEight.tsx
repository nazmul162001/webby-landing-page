import Image from "next/image";

const SectionEight = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 relative mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Image */}
        <div className="w-full p-0 md:p-16 -mt-48">
          <Image
            src="/bike.png"
            alt="Bike Riders"
            width={600}
            height={200}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h4 className="text-blue-600 font-bold text-sm md:text-base">
            Lorem ipsum
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
            <span className="text-blue-700">LOREM</span> IPSUM DOLOR SIT AMET
            CONSECTETUR. ENIM DONEC.
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
            amet non.
          </p>

          {/* Two-Column Text List */}
          <div className="grid grid-cols-2 mt-6 gap-4">
            <p className="font-semibold">Lorem Ipsum</p>
            <p className="font-semibold">Lorem Ipsum</p>
            <p className="font-semibold">Lorem Ipsum</p>
            <p className="font-semibold">Lorem Ipsum</p>
            <p className="font-semibold">Lorem Ipsum</p>
            <p className="font-semibold">Lorem Ipsum</p>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition">
            <span>Loerum Ipsum</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="mt-6 w-full h-2 bg-gradient-to-r from-blue-600 via-green-600 to-purple-800"></div>
    </section>
  );
};

export default SectionEight;
