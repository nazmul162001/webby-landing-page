import Banner from "@/components/home/banner/Banner";
import FourthSection from "@/components/home/banner/FourthSection";
import ThirdSection from "@/components/home/banner/ThirdSection";
import SecondSection from "@/components/home/SecondSection";

export default function Home() {
  return (
    <section className="w-full h-full px-5 my-10">
      <main>
        <div>
          <Banner />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </div>
      </main>
    </section>
  );
}
