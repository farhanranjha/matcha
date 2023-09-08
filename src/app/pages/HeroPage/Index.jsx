// ------ components --------
import Header from "@/app/components/Header";
import TopSection from "./TopSection";
import AboutUs from "./AboutUs";
import SuccessStories from "./SuccessStories";
import Footer from "@/app/components/Footer";

export default function HeroPage() {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] m-auto">
        <TopSection />
        <AboutUs />
        <SuccessStories />
      </div>
      <Footer />
    </>
  );
}
