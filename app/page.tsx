import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import MyApp from "@/components/sections/MyApp";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import SocialMedia from "@/components/sections/SocialMedia";
import Footer from "@/components/sections/Footer";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <div className="px-4"><div className="h-[2px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" /></div>
      <MyApp />
      <div className="px-4"><div className="h-[2px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" /></div>
      <Experience />
      <div className="px-4"><div className="h-[2px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" /></div>
      <Projects />
      <div className="px-4"><div className="h-[2px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" /></div>
      <SocialMedia />
      <div className="px-4"><div className="h-[2px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" /></div>
      <Footer />
      {/* <About /> */}
    </main>
  );
}
