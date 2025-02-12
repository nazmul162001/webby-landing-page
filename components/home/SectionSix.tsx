import Image from "next/image";

const SectionSix = () => {
  const cards = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/f1.png",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/f2.png",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/f3.png",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/f4.png",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-16 px-4 md:px-8 w-full md:w-[90%] m-auto"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-6xl text-left">
        {/* Title and Description */}
        <h4 className="text-blue-600 font-bold text-sm md:text-base">
          Lorem ipsum dolor sit amet
        </h4>
        <h2 className="text-2xl md:text-4xl font-extrabold mt-2">
          LOREM IPSUM DOLOR SIT
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={card.img}
                alt="Bike Image"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSix;
