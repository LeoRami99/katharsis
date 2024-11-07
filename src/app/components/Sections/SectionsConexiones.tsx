"use client";
import React from 'react';
import './ObservationsSection.css';
import { FaRegLightbulb, FaHandsHelping } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const observations = [
  { id: 'O1', observation: 'Soledad', connection: 'C1', action: 'Un bootcamp cada 2 meses, para resolver un reto de manera colaborativa' },
  { id: 'O2', observation: 'Depresión', connection: 'C2', action: 'Kit de rescate comunicacional' },
  { id: 'O3', observation: 'Está próximo a saltar por un abismo', connection: 'C3', action: 'Salta y Conecta: El desafío de entender al otro' },
  { id: 'O4', observation: 'Pensativo', connection: 'C4', action: 'Mural de tarjetas de cambio de perspectiva' },
  { id: 'O5', observation: 'Reflexión', connection: 'C5', action: 'Día del Intercambio de Roles' },
  { id: 'O6', observation: 'Desespero', connection: 'C6', action: 'Festival de Fracasos (con humor y creatividad)' },
  { id: 'O7', observation: 'Desconcierto', connection: 'C7', action: 'Orquesta de ideas para solucionar problemas en conjunto.' },
  { id: 'O8', observation: 'Contraste de luz a su derecha pero oscuridad a su izquierda', connection: 'C8', action: 'Día de sombra (pasan el día laboral como sombra de otro compañero)' },
  { id: 'O9', observation: 'Fuera de las 4 paredes, podría haber una solución', connection: 'C9', action: 'Espacios de conexión en forma de almuerzos o cafés' },
  { id: 'O10', observation: 'Atravesar la puerta puede ser su renacer', connection: 'C10', action: 'Open Office virtual o presencial con los ejecutivos de cada área' },
  { id: 'O11', observation: 'Claridad en otro lugar', connection: 'C11', action: 'Comités semanales en lugares fuera de lo común' },
  { id: 'O12', observation: 'Necesidad de huir', connection: 'C12', action: 'Juego de “Escape Room” Organizacional, basada en la misión o desafíos de la empresa.' },
  { id: 'O13', observation: 'Reflejo de la vida cotidiana', connection: 'C13', action: 'Taller: “El escenario del conflicto”' },
  { id: 'O14', observation: 'Contraste de clases sociales', connection: 'C14', action: '"Tertulias Transparentes": Espacios de Preguntas y Respuestas entre Niveles Jerárquicos' },
  { id: 'O15', observation: 'La vida se percibe diferente fuera y dentro del bus', connection: 'C15', action: '"Vista desde el Bus": Analizando el Lenguaje según el Rol' },
  { id: 'O16', observation: 'Una zona horaria en el que el ritmo de vida es más tranquilo y lento', connection: 'C16', action: 'Un Reloj Corporativo con Ritmo Lento (espacios de reflexión para pensar con cabeza fría)' },
  { id: 'O17', observation: 'Me imagino estando allí', connection: 'C17', action: 'Diario de comunicación asertiva' },
  { id: 'O18', observation: 'Todos piensan y se expresan de diversas maneras', connection: 'C18', action: 'Muro de los Puntos de Vista' },
  { id: 'O19', observation: 'Los adultos disfrutan más de las cosas simples de la vida', connection: 'C19', action: 'Cada semana, los miembros del equipo deben sacar una tarjeta de la "Caja de Simplicidad"' },
  { id: 'O20', observation: 'Sector de oficinas', connection: 'C20', action: 'Paredes de conversación' },
  { id: 'O21', observation: 'Cultura y civilización', connection: 'C21', action: 'Crear una plataforma corporativa híbrida, "Civitas Conexión"' },
  { id: 'O22', observation: 'Reflejo de emociones: Tristeza, estrés, tranquilidad, neutral, feliz', connection: 'C22', action: '"EmoCom" es una plataforma de comunicación integrada en la cultura, que utiliza tecnología de análisis emocional en tiempo real.' },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ObservationsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black text-6xl font-bold text-center mt-10 mb-16">
          Conexiones Forzadas 
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          A continuación se presentan las observaciones identificadas y las acciones propuestas para cada una, con el objetivo de mejorar el ambiente organizacional y promover el bienestar de los colaboradores.
        </p>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="carousel-container">
          {observations.map(({ id, observation, connection, action }) => (
            <div key={id} className="p-4">
              <div className="flip-card puzzle-piece transition-transform transform hover:scale-105">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
                    <FaRegLightbulb className="text-yellow-500 text-5xl mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">{id}</h3>
                  </div>
                  <div className="flip-card-back bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
                    <p className="text-gray-700 text-center"><strong>Observación:</strong> {observation}</p>
                  </div>
                </div>
              </div>
              <div className="flip-card puzzle-piece transition-transform transform hover:scale-105 mt-8">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
                    <FaHandsHelping className="text-green-500 text-5xl mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">{connection}</h3>
                  </div>
                  <div className="flip-card-back bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
                    <p className="text-gray-700 text-center"><strong>Acción Propuesta:</strong> {action}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ObservationsSection;
