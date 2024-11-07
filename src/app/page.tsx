// import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionsBitacoras from "./components/Sections/SectionsBitacoras";
import SectionConexionesForzadas from "./components/Sections/SectionsConexiones";
import SectionQuestion from "./components/Sections/SectionQuestion";

export default function Home() {
  return (
    <>
      <Navbar/>
    <main>
      <Hero/>
      <SectionsBitacoras/>
      <SectionQuestion/>
      <SectionConexionesForzadas/>
      
    </main>
    </>
  );
}
