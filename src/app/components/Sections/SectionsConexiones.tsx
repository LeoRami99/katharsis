"use client";
import { Fade } from "react-awesome-reveal";
import { FaPuzzlePiece } from "react-icons/fa";

const SectionConexionesForzadas = () => {
    return (
        <section className="min-h-screen py-10" id="bitacoras">
            <h1 className="text-black text-6xl font-bold text-center mt-10 mb-16">Conexiones Forzadas</h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 px-4 md:px-20">
                {/* Pieza de rompecabezas izquierda */}
                <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3 transform hover:scale-105 transition duration-500 ease-in-out flex items-center justify-center flex-col">
                    <FaPuzzlePiece className="text-blue-600 text-6xl mb-4" />
                    <h2 className="text-xl font-bold mb-4">Elemento A (Ox)</h2>
                    <p className="text-gray-700 text-center">Representa el concepto de "Ox", que será una parte esencial para conectar con el siguiente componente.</p>
                </div>

                {/* Pieza de rompecabezas derecha */}
                <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3 transform hover:scale-105 transition duration-500 ease-in-out flex items-center justify-center flex-col">
                    <FaPuzzlePiece className="text-yellow-600 text-6xl mb-4" />
                    <h2 className="text-xl font-bold mb-4">Elemento B (Cx)</h2>
                    <p className="text-gray-700 text-center">El componente "Cx" encaja perfectamente con "Ox", creando una conexión que simboliza la unión forzada de dos ideas para obtener un resultado novedoso.</p>
                </div>
            </div>
            <div className="mt-16 px-4 md:px-20 text-center">
                <p className="text-lg text-gray-700">Esta sección representa la unión de elementos a través de conexiones no convencionales, como si fueran piezas de un rompecabezas que encajan para formar una idea más completa y creativa.</p>
            </div>
        </section>
    );
};

export default SectionConexionesForzadas;
