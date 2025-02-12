import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Right Image (First in Mobile) */}
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/phone_app.png"
            alt="Phone Mockup"
            width={500}
            height={500}
            className="object-contain transform scale-125"
          />
        </div>

        {/* Left Content (Second in Mobile) */}
        <div className="order-2 md:order-1">
          <h4 className="text-blue-600 font-bold text-sm md:text-base">
            Lorem Ipsum
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* App Store Buttons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="w-36">
              <Image
                src="/google.png"
                alt="Google Play"
                width={150}
                height={50}
                className="object-contain"
              />
            </a>
            <a href="#" className="w-36">
              <Image
                src="/appstore.png"
                alt="App Store"
                width={150}
                height={50}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
