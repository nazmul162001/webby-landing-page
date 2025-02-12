import Banner from "@/components/home/banner/Banner";
import FourthSection from "@/components/home/banner/FourthSection";
import SectionFive from "@/components/home/banner/SecctionFive";
import ThirdSection from "@/components/home/banner/ThirdSection";
import DownloadApp from "@/components/home/DownloadApp";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Form from "@/components/home/Form";
import SecondSection from "@/components/home/SecondSection";
import SectionEight from "@/components/home/SectionEight";
import SectionSix from "@/components/home/SectionSix";

export default function Home() {
  return (
    <section className="w-full h-full px-5 my-10">
      <main>
        <div>
          <Banner />
          <SecondSection />
          <ThirdSection />
          <FourthSection url="bg_2" />
          <SectionFive />
          <SectionSix />
          <FourthSection url="bg_33" />
          <Form />
          <DownloadApp />
          {/* <ImageGallery /> */}
          <SectionEight />
          <FAQ />
          <Footer />
        </div>
      </main>
    </section>
  );
}
