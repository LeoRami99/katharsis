"use client";
import { Fade } from "react-awesome-reveal";

const SectionsBitacoras = () => {
    return (
        <section className="min-h-screen py-20" id="bitacoras">
            <h1 className="text-black text-6xl font-bold text-center mt-10 mb-16">Bitácoras</h1>
            <div className="space-y-16 px-4 md:px-20">
                {/* Sección con imagen a la izquierda y texto a la derecha */}
                <Fade direction="left" className="bg-gradient-to-b from-gray-100 via-white to-gray-100">
                    <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden bg-white transform hover:scale-105 transition duration-500 ease-in-out">
                        <img src="/picture1.jpeg" alt="Imagen" className="w-full md:w-1/2 h-auto object-cover" />
                        <div className="w-full md:w-1/2 p-6 md:p-12">
                            <h2 className="text-3xl font-bold mb-4 ">El autobús de Broadway en la calle Liberty (Broadway bus at Liberty Street) - Pintura</h2>
                            <h3 className="text-lg font-semibold mb-2 text-gray-500">1996</h3>
                            <h3 className="text-lg font-semibold mb-4 text-gray-500">Artista: Estes, Richard</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Colección: Arte <br />
                                Número de registro: AP3303 <br />
                                Denominación: Pintura <br />
                                Técnica y material: Óleo sobre tela <br />
                                Dimensiones: <br />
                                - Alto/largo: 86,0 cm <br />
                                - Ancho/diam: 121,0 cm <br />
                                - Prof/grosor: 0,0 cm <br />
                                Fecha de ingreso a la colección: 2002 <br />
                                Ubicación actual: Museo Botero
                            </p>
                            <p className="text-lg text-gray-700">Esta obra captura el dinamismo urbano de una forma muy realista y vibrante, mostrando el ambiente de Broadway en la calle Liberty.</p>
                            <a href="/Obra El AutoBus.pdf" className="btn btn-outline w-full mt-5" target="_blank">
                                Descargar PDF
                            </a>
                        </div>
                    </div>
                </Fade>


                <Fade direction="right" className="bg-gradient-to-b from-gray-100 via-white to-gray-100">
                    <div className="flex flex-col md:flex-row-reverse items-center rounded-lg overflow-hidden bg-white transform hover:scale-105 transition duration-500 ease-in-out">
                        <img src="/picture2.jpeg" alt="Imagen" className="w-full md:w-1/2 h-auto object-cover" />
                        <div className="w-full md:w-1/2 p-6 md:p-12">
                            <h2 className="text-3xl font-bold mb-4 ">Sin título (Puerta azul) - Pintura</h2>
                            <h3 className="text-lg font-semibold mb-2 text-gray-500">1971</h3>
                            <h3 className="text-lg font-semibold mb-4 text-gray-500">Artista: Cárdenas Arroyo, Juan</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Colección: Arte <br />
                                Número de registro: AP0469 <br />
                                Denominación: Pintura <br />
                                Técnica y material: Óleo sobre lona <br />
                                Dimensiones: <br />
                                - Alto/largo: 127,0 cm, 113,4 cm <br />
                                - Ancho/diam: 183,0 cm, 188,2 cm <br />
                                - Prof/grosor: 0,0 cm <br />
                                Fecha de ingreso a la colección: 1974
                            </p>
                            <p className="text-lg text-gray-700">Esta obra presenta una composición abstracta con énfasis en texturas y colores, donde la puerta azul resalta como un elemento central en la narrativa visual.</p>
                            <a href="/Obra Sin Título Puerta Azul.pdf" className="btn btn-outline w-full mt-5" target="_blank">
                                Descargar PDF
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default SectionsBitacoras;
