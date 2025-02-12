import Image from "next/image";

const SectionTen = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 my-16">
      {/* Background Container */}
      <div className="bg-gray-100 p-8 rounded-lg relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
            </h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
              blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
              tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
              porta nisl felis. Massa in facilisis semper libero eget eu quisque
              bibendum platea. Tortor fames.
            </p>

            {/* CTA Button */}
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition">
              <span>Loerum Ipsum</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/bike.png"
              alt="Bike Showcase"
              width={500}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Floating Card */}
        <div className="absolute left-0 md:left-12 bottom-[-200px] bg-white shadow-lg p-6 rounded-lg max-w-lg">
          <h3 className="font-bold text-lg">Lorem ipsum dolor sit</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
            amet habitasse semper.
          </p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
            placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id
            tristique sit.
          </p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
            quisque scelerisque facilisi. Ultrices lectus viverra pharetra
            commodo.
          </p>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="mt-24 w-full h-2 bg-gradient-to-r from-blue-600 via-green-600 to-purple-800"></div>
    </section>
  );
};

export default SectionTen;
