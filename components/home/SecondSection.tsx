import GradientLine from "@/utils/GradiendLine";
import Image from "next/image";

const SecondSection = () => {
  return (
    <section className="relative px-8 py-12 w-[90%] m-auto">
      {/* Background Image */}
      <div
        className="absolute bottom-0 -right-[50%] w-full h-full bg-cover bg-no-repeat bg-right opacity-20"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Left Content */}
        <div>
          <h4 className="text-blue-600 font-bold">Lorem ipsum dolor sit</h4>
          <h2 className="text-3xl font-extrabold mt-2">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>

          <div className="mt-6 space-y-6">
            {/* List Items */}
            {[
              {
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
                img: "/bike.png",
              },
              {
                text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
                img: "/bike.png",
              },
              {
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
                img: "/bike.png",
              },
            ].map((item, index) => (
              <div key={index} className="flex space-x-4">
                <div className="w-20 h-16 relative">
                  <Image
                    src={item.img}
                    alt="Bike"
                    layout="fill"
                    className="rounded-md object-cover"
                  />
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition">
              <span>Loerum Ipsum</span>
              <span>→</span>
            </button>
            <p className="text-blue-600 font-semibold">📞 123456789</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/bike.png"
            alt="Bike Showcase"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="mt-6 w-full">
        <GradientLine />
      </div>
    </section>
  );
};

export default SecondSection;
