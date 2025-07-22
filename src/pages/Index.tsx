import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import QualityAssurance from "@/components/QualityAssurance";
import EcoFriendly from "@/components/EcoFriendly";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <QuoteForm />
      <WhyChoose />
      <Services />
      <QualityAssurance />
      <EcoFriendly />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
