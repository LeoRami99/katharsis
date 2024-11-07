"use client"
// import { Flip,Reveal, Slide } from "react-awesome-reveal";

const Hero = () => {
    return (
        
        <div
            className="hero min-h-screen -mt-28"
            style={{
                backgroundImage: "url(/oveja.webp)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-balance uppercase">Estamos list@s para reactivar la Energía Creativa de Nuestro Equipo</h1>
                </div>
            </div>
        </div>
        
    );
};

export default Hero;
