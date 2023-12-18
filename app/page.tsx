import About from "@/components/pages/about";
import ContactUs from "@/components/pages/contactUs";
import Features from "@/components/pages/features";
import HomeHeader from "@/components/pages/home";
import Products from "@/components/pages/products";
import BigHeader from "@/components/ui/bigHeader";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <About />
      <Features />
      <Products />
      <BigHeader />
      <ContactUs />
    </>
  );
}
