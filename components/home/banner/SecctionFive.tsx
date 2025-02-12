import Image from "next/image";

const SectionFive = () => {
  const logos = [
    { name: "Hero", src: "/hero.png" },
    { name: "Honda", src: "/honda.png" },
    { name: "Bajaj", src: "/bajaj.png" },
    { name: "TVS", src: "/tvs.png" },
    { name: "Royal Enfield", src: "/royal.png" },
    { name: "Yamaha", src: "/yamaha.png" },
    { name: "KTM", src: "/ktm.png" },
    { name: "Ather", src: "/ather.png" },
    { name: "Ola Electric", src: "/ola.png" },
    { name: "Revolt", src: "/revolt.png" },
    { name: "Ultraviolette", src: "/ultra.png" },
    { name: "Tork Motors", src: "/tork.png" },
  ];

  return (
    <section className="bg-white py-12 px-8 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 w-full md:w-[50%] m-auto">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
      </h2>

      {/* Logo Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-28 h-auto flex justify-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFive;
