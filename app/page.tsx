import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Statement from "@/components/Statement";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Hero />
      <About />
      <Statement />
      <Projects />
      <Contact />
    </div>
  );
}
