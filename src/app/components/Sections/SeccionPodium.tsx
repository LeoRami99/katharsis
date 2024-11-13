"use client"
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

type PodiumPosition = {
  name: string;
  image: string;
  popup?: string;
  positivo?: string;
  negativo?: string;
  incierto?: string;
};

type PodiumProps = {
  positions: [PodiumPosition, PodiumPosition, PodiumPosition];
};

const Podium: React.FC<PodiumProps> = ({ positions }) => {
  const [second, first, third] = positions;
  const [selectedPosition, setSelectedPosition] = useState<PodiumPosition | null>(null);

  const handlePositionClick = (position: PodiumPosition) => {
    setSelectedPosition(position);
  };

  const handleClosePopup = () => {
    setSelectedPosition(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-4" id='pin5'>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-center">Las Ideas Pin</h1>
      <div className="flex items-end justify-center w-full max-w-5xl flex-wrap md:flex-nowrap gap-8 md:gap-4">
        {/* Second Place */}
        <div
          className="flex flex-col items-center transform hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={() => handlePositionClick(second)}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg mb-4">
            <img src={second.image} alt={second.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-400 w-28 h-32 md:w-36 md:h-40 lg:w-40 lg:h-44 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">{second.name}</span>
          </div>
          <div className="text-2xl md:text-4xl font-bold text-gray-600 mt-2">2</div>
        </div>

        {/* First Place */}
        <div
          className="flex flex-col items-center transform hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={() => handlePositionClick(first)}
        >
          <div className="w-28 h-28 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl mb-4">
            <img src={first.image} alt={first.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-yellow-500 w-32 h-40 md:w-48 md:h-56 lg:w-56 lg:h-64 flex flex-col items-center justify-end rounded-t-lg p-4 shadow-lg">
            <span className="text-lg md:text-3xl font-bold text-white drop-shadow-lg">{first.name}</span>
          </div>
          <div className="text-3xl md:text-5xl font-bold text-yellow-600 mt-2">1</div>
        </div>

        {/* Third Place */}
        <div
          className="flex flex-col items-center transform hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={() => handlePositionClick(third)}
        >
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-orange-400 shadow-md mb-4">
            <img src={third.image} alt={third.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-orange-400 w-24 h-28 md:w-36 md:h-40 lg:w-40 lg:h-48 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-lg md:text-xl font-bold text-white drop-shadow-md">{third.name}</span>
          </div>
          <div className="text-xl md:text-3xl font-bold text-orange-600 mt-2">3</div>
        </div>
      </div>

      {/* Popup */}
      {selectedPosition && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
            <button title='Cerrar' aria-label='Cerrar'
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition"
              onClick={handleClosePopup}
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPosition.name}</h2>
            {selectedPosition.popup && (
              <p className="text-gray-600">{selectedPosition.popup}</p>
            )}
            <p>
              <strong> + Positivo:</strong> {selectedPosition.positivo}
            </p>
            <p>
              <strong>- Negativo:</strong> {selectedPosition.negativo}
            </p>
            <p>
              <strong>? Incierto:</strong> {selectedPosition.incierto}
            </p>


            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              onClick={handleClosePopup}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Additional Content */}
      <div className="flex flex-col items-center justify-center mt-10 gap-5 w-full max-w-md">
        <div className="w-full">
          <input type="radio" name="my-accordion-1" id="fourth-place" className="hidden" defaultChecked />
          <label htmlFor="fourth-place" className="block bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-300 transition">
            <div className="text-xl font-medium">4th Puesto: C18</div>
          </label>
          <div className="bg-white p-4 rounded-lg shadow-inner mt-2">
            <p>Muro de los Puntos de Vista</p>
          </div>
        </div>
        <div className="w-full">
          <input type="radio" name="my-accordion-1" id="fifth-place" className="hidden" />
          <label htmlFor="fifth-place" className="block bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-300 transition">
            <div className="text-xl font-medium">5th Puesto: C5</div>
          </label>
          <div className="bg-white p-4 rounded-lg shadow-inner mt-2">
            <p>Día del Intercambio de Roles</p>
          </div>
        </div>
      </div>

      {/* Black Sheep Image */}
      <img
        src="/ovejav4.png"
        alt="Oveja"
        className="w-[150px] md:w-[300px] lg:w-[450px] absolute bottom-0 right-0 z-10 hidden md:block"
      />
    </div>
  );
};

export default function Component() {
  const podiumData: [PodiumPosition, PodiumPosition, PodiumPosition] = [
    {
      name: 'C8',
      image: 'https://ui-avatars.com/api/?length=3&name=🥈&color=000&background=fff',
      popup: 'Día de sombra (pasan el día laboral como sombra de otro compañero)',
      positivo: "Permite que los empleados aprendan directamente de otros compañeros. Esto ayuda a conocer mejor las tareas de otros departamentos o roles, mejora la comprensión del trabajo en equipo y promueve la colaboración.",
      negativo: "Si el empleado que 'hace sombra' interrumpe mucho al compañero o no está preparado para observar sin participar, puede convertirse en una distracción.",
      incierto: "Esto dependerá de la disposición y la habilidad tanto del 'sombra' como del 'mentor' para hacer que la experiencia sea provechosa para ambos.",
    },
    {
      name: 'C10',
      image: 'https://ui-avatars.com/api/?length=3&name=🥇&color=000&background=fff',
      popup: 'Open Office virtual o presencial con los ejecutivos de cada área',
      positivo: "Estos espacios permiten mejorar la comunicación entre los empleados y los ejecutivos, generando una cercanía entre las áreas, resolviendo dudas rápidamente, conocer mejor los proyectos y consolidar el trabajo en equipo.",
      negativo: "Si el espacio es demasiado abierto o si los ejecutivos están constantemente disponibles, puede haber muchas interrupciones.",
      incierto: "Se debe evaluar previamente si todos los ejecutivos se sentirán cómodos con esta modalidad, especialmente si tienen agendas muy llenas y coordinar los horarios puede ser una dificultad",
    },
    {
      name: 'C14',
      image: 'https://ui-avatars.com/api/?length=3&name=🥉&color=000&background=fff',
      popup: 'Tertulias Transparentes: Espacios de preguntas y respuestas entre niveles jerárquicos',
      positivo: "Esto promueve una cultura de transparencia, ya que todos los niveles jerárquicos tienen la oportunidad de expresar sus inquietudes y recibir respuestas claras.",
      negativo: "Las preguntas de los empleados pueden ser incómodas para los directivos, o los empleados pueden sentirse temerosos de hacer preguntas difíciles debido a la jerarquía.",
      incierto: "Si no se fomenta adecuadamente la participación, es posible que solo un pequeño grupo de empleados se involucre, y no todos se beneficien de la iniciativa.",

    },
  ];

  return <Podium positions={podiumData} />;
}
