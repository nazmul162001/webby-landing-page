import Banner from "@/components/home/banner/Banner";
import SecondSection from "@/components/home/SecondSection";

export default function Home() {
  return (
    <section className="px-5 my-10">
      <main>
        <div>
          <Banner />
          <SecondSection />
        </div>
      </main>
    </section>
  );
}
