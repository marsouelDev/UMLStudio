"use client";

import { styles } from "./styles";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Stats        from "./components/Stats";
import Features     from "./components/Features";
import Steps        from "./components/Steps";
import Relations    from "./components/Relations";
import Testimonials from "./components/Testimonials";
import CTA          from "./components/Cta";
import Footer       from "./components/Footer";

export default function HomePage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <div style={styles.blueBar} />
      <Steps />
      <Relations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}