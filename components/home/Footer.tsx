import Link from "next/link";

export default function Footer() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="flex m flex-col py-10 items-center justify-center  text-center">
        <div className="mb-12 transform bg-[#E6E6E6] px-12 py-6 transition-transform duration-300 hover:scale-105">
          <span className="text-2xl font-bold text-black">LOGO</span>
        </div>
        <h1 className="mx-auto max-w-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>
        <Link
          href="#"
          className="group mt-12 inline-flex items-center rounded-md bg-[#1E62D9] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          Loerum ipsum
          {/* <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" /> */}
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1E23] px-6 py-20 text-white mt-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-5">
            {/* Logo Section */}
            <div className="md:col-span-5 lg:col-span-1">
              <div className="mb-8 inline-block transform bg-[#E6E6E6] px-8 py-4 transition-transform duration-300 hover:scale-105">
                <span className="text-xl font-bold text-black">LOGO</span>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="col-span-full grid grid-cols-2 gap-x-8 gap-y-16 md:col-span-5 md:grid-cols-4 lg:col-span-4">
              {[
                {
                  title: "Company",
                  links: ["About", "Careers", "Partners", "News", "Contact"],
                },
                {
                  title: "Resources",
                  links: [
                    "Blog",
                    "Newsletter",
                    "Events",
                    "Help center",
                    "Tutorials",
                  ],
                },
                {
                  title: "Product",
                  links: ["Pricing", "Features", "Integrations", "FAQ", "API"],
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Security", "Status", "Sitemap"],
                },
              ].map((column, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-lg font-semibold tracking-wider text-white">
                    {column.title}
                  </h3>
                  <ul className="space-y-4">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href="#"
                          className="text-gray-300 transition-colors duration-200 hover:text-white hover:underline"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
