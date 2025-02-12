const FourthSection = ({ url }: { url: string }) => {
  return (
    <section
      className="relative w-[95%] md:w-[90%] m-auto h-full py-10 md:py-0 md:h-[70vh] bg-cover bg-center flex items-center text-white px-4 md:px-8"
      style={{ backgroundImage: `url('/${url}.png')` }}
    >
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white px-3 md:px-4 py-1 md:py-2 text-black font-bold text-sm md:text-lg">
        LOGO
      </div>

      {/* Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGETAS
          ALIQUAM VIVERRA MI.
        </h2>

        <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-6">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
          vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
          pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
          arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
        </p>

        <p className="text-sm sm:text-base md:text-lg mt-3 md:mt-4">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
          condimentum ultrices non. Ornare semper in tincidunt pellentesque cras
          mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla
          luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar
          euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>
      </div>
    </section>
  );
};

export default FourthSection;
