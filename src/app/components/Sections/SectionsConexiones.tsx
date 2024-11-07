"use client";
import { FaPuzzlePiece } from "react-icons/fa";

const CONEXIONES_FORZADAS = {
    "observaciones": [
        {
            "id": "O1",
            "respaldoTarjeta": "Reflejo de la vida cotidiana",
            "conexionForzada": "C1",
            "detalleConexionForzada": "Taller: “El escenario del conflicto” Aplicando la empatía en situaciones laborales conflictivas entendiendo el contexto de los demás."
        },
        {
            "id": "O2",
            "respaldoTarjeta": "Contraste de clases sociales",
            "conexionForzada": "C2",
            "detalleConexionForzada": "\"Tertulias Transparentes\": Espacios de Preguntas y Respuestas entre Niveles Jerárquicos"
        },
        {
            "id": "O3",
            "respaldoTarjeta": "La vida se percibe diferente fuera y dentro del bus",
            "conexionForzada": "C3",
            "detalleConexionForzada": "\"Vista desde el Bus\": Analizando el Lenguaje según el Asiento (cambio de roles para entender las situaciones de cada área)"
        },
        {
            "id": "O4",
            "respaldoTarjeta": "Una zona horaria en el que el ritmo de vida es más tranquilo y lento",
            "conexionForzada": "C4",
            "detalleConexionForzada": "\"El Reloj de la Asertividad\": Un Reloj Corporativo con Ritmo Lento (espacios de reflexión para pensar con cabeza fría y ser asertivos con las soluciones corporativas)"
        },
        {
            "id": "O5",
            "respaldoTarjeta": "Me imagino estando allí",
            "conexionForzada": "C5",
            "detalleConexionForzada": "Este diario no es solo un espacio para \"hablar de lo que hizo\", sino que está estructurado para fomentar la reflexión profunda sobre la comunicación asertiva en situaciones cotidianas."
        },
        {
            "id": "O6",
            "respaldoTarjeta": "Todos piensan y se expresan de diversas maneras",
            "conexionForzada": "C6",
            "detalleConexionForzada": "En un lugar común de la empresa (puede ser físico o digital, dependiendo del entorno), se instala un \"Muro de los Puntos de Vista\". Este muro tiene una estructura de múltiples \"espacios\" o \"paneles\", donde se publican regularmente preguntas, desafíos o temas de interés que requieren una respuesta o reflexión por parte de los empleados."
        },
        {
            "id": "O7",
            "respaldoTarjeta": "Los adultos disfrutan más de las cosas simples de la vida",
            "conexionForzada": "C7",
            "detalleConexionForzada": "Desafío de las Simplicidades: Cada semana, los miembros del equipo deben sacar una tarjeta de la \"Caja de Simplicidad\" (o elegir un gesto simple del espacio digital) y usar ese gesto o frase en una interacción de trabajo real."
        },
        {
            "id": "O8",
            "respaldoTarjeta": "Sector de oficinas",
            "conexionForzada": "C8",
            "detalleConexionForzada": "Las oficinas cuentan con paneles interactivos y \"paredes de conversación\" que se iluminan o emiten colores dependiendo del tono de la conversación que se está llevando a cabo."
        },
        {
            "id": "O9",
            "respaldoTarjeta": "Cultura y civilización",
            "conexionForzada": "C9",
            "detalleConexionForzada": "Crear una plataforma corporativa híbrida, \"Civitas Conexión\", que transforma la manera en que las empresas construyen, mantienen y practican su cultura organizacional, usando la idea de \"civilización\" como un modelo para una comunicación profunda, inclusiva y respetuosa."
        },
        {
            "id": "O10",
            "respaldoTarjeta": "Reflejo de emociones: Tristeza, estrés, tranquilidad, neutral, feliz",
            "conexionForzada": "C10",
            "detalleConexionForzada": "\"EmoCom\" es una plataforma de comunicación integrada en la cultura de la empresa, que utiliza tecnología de análisis emocional en tiempo real para reflejar el estado emocional de los empleados durante sus interacciones y proporcionar recomendaciones personalizadas para mejorar la comunicación asertiva."
        }
    ]
};

const SectionConexionesForzadas = () => {
    return (
        <section className="min-h-screen py-10" id="conexiones-forzadas">
            <h1 className="text-black text-6xl font-bold text-center mt-10 mb-16">Conexiones Forzadas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
                {CONEXIONES_FORZADAS.observaciones.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition duration-500 ease-in-out flex flex-col items-center">
                        <FaPuzzlePiece className="text-blue-600 text-6xl mb-4" />
                        <h2 className="text-xl font-bold mb-2">{item.respaldoTarjeta}</h2>
                        <h3 className="text-lg font-semibold mb-4 text-gray-500">{item.conexionForzada}</h3>
                        <p className="text-gray-700 text-center">{item.detalleConexionForzada}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionConexionesForzadas;
