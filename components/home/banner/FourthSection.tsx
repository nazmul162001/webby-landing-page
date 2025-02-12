const FourthSection = () => {
  return (
    <section
      className="relative w-[90%] m-auto h-[70vh] md:h-[600px] bg-cover bg-center flex items-center text-white px-8"
      style={{ backgroundImage: "url('/bg_2.png')" }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 bg-white px-4 py-2 text-black font-bold text-lg">
        LOGO
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGETAS
          ALIQUAM VIVERRA MI.
        </h2>

        <p className="text-lg mt-6">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
          vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
          pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
          arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
        </p>

        <p className="text-lg mt-4">
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
