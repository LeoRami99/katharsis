// import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionsBitacoras from "./components/Sections/SectionsBitacoras";
import SectionConexionesForzadas from "./components/Sections/SectionsConexiones";
import SectionQuestion from "./components/Sections/SectionQuestion";
import Podio from "./components/Sections/SeccionPodium";
import TeamSection from "./components/Sections/SectionTeams";
import SectionMatriz from "./components/Sections/SectionMatriz";
import Footer from "./components/Footer";
// const podiumData = [
//   { name: "Alice" },
//   { name: "Bob" },
//   { name: "Charlie" }
// ];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TeamSection />
        <SectionsBitacoras />
        <SectionQuestion />
        <SectionConexionesForzadas />
        <SectionMatriz />
        <Podio />
      </main>
      <Footer />
    </>
  );
}
