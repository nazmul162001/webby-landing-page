import GradientLine from "@/utils/GradiendLine";
import Image from "next/image";

const ThirdSection = () => {
  return (
    <section className="relative bg-white px-8 py-12 w-[90%] m-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h4 className="text-blue-600 font-bold">
            Lorem ipsum dolor sit amet
          </h4>
          <h2 className="text-4xl font-extrabold mt-2 leading-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>

          {/* List Items */}
          <div className="mt-6 space-y-6">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 transform rotate-45 mx-3">
                    <Image
                      className="rounded-tr-lg rounded-bl-lg"
                      src="/bike.png"
                      alt="Icon"
                      width={34}
                      height={34}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </h3>
                    <p className="text-gray-700 mt-1">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et
                      arcu eu non viverra. Risus quam mattis senectus vitae
                      interdum odio ornare gravida vestibulum. Donec turpis
                      nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/bike.png"
              alt="People Talking"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Gradient Line at Bottom */}
      </div>
      <div className="mt-6 w-full">
        <GradientLine />
      </div>
    </section>
  );
};

export default ThirdSection;
