"use client"
import React, { useState } from 'react';

type PodiumPosition = {
  name: string;

  image: string;
  popup?: string;
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
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-6xl font-extrabold mb-10 ">Podio</h1>
      <div className="flex items-end justify-center w-full max-w-5xl">
        {/* Second Place */}
        <div
          className="flex flex-col items-center mx-4 transform hover:scale-105 transition-transform duration-500 ease-in-out"
          onClick={() => handlePositionClick(second)}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg mb-4">
            <img src={second.image} alt={second.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-400 w-40 h-44 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-2xl font-bold text-white drop-shadow-lg">{second.name}</span>
          </div>
          <div className="text-4xl font-bold text-gray-600 mt-2">2</div>
        </div>

        {/* First Place */}
        <div
          className="flex flex-col items-center mx-4 transform hover:scale-110 transition-transform duration-500 ease-in-out"
          onClick={() => handlePositionClick(first)}
        >
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl mb-4">
            <img src={first.image} alt={first.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-yellow-500 w-48 h-56 flex flex-col items-center justify-end rounded-t-lg p-4 shadow-lg">
            <span className="text-3xl font-bold text-white drop-shadow-lg">{first.name}</span>
          </div>
          <div className="text-5xl font-bold text-yellow-600 mt-2">1</div>
        </div>

        {/* Third Place */}
        <div
          className="flex flex-col items-center mx-4 transform hover:scale-105 transition-transform duration-500 ease-in-out"
          onClick={() => handlePositionClick(third)}
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-400 shadow-md mb-4">
            <img src={third.image} alt={third.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-orange-400 w-36 h-36 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-xl font-bold text-white drop-shadow-md">{third.name}</span>
          </div>
          <div className="text-3xl font-bold text-orange-600 mt-2">3</div>
        </div>
      </div>

      {selectedPosition && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedPosition.name}</h2>

            {selectedPosition.popup && (
              <p className="text-gray-600">
                {selectedPosition.popup}
              </p>
            )}
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={handleClosePopup}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center mt-10 gap-5">
        <div className="collapse">
          <input type="radio" name="my-accordion-1" defaultChecked title="4th Puesto: C18" />
          <div className="collapse-title text-xl font-medium">
            4th Puesto: C18
          </div>
          <div className="collapse-content">
            <p>
              Muro de los Puntos de Vista
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="radio" name="my-accordion-1" title="5th Puesto: C5" />
          <div className="collapse-title text-xl font-medium">
            5th Puesto: C5
          </div>
          <div className="collapse-content">
            <p>Día del Intercambio de Roles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Component() {
  const podiumData: [PodiumPosition, PodiumPosition, PodiumPosition] = [
    {
      name: 'C14',
      image: 'https://ui-avatars.com/api/?length=3&name=C14&color=000&background=fff',
      popup: 'Tertulias Transparentes: Espacios de preguntas y respuestas entre niveles jerárquicos',
    },
    {
      name: 'C10',
      image: 'https://ui-avatars.com/api/?length=3&name=C10&color=000&background=fff',
      popup: 'Open Office virtual o presencial con los ejecutivos de cada área',
    },
    {
      name: 'C8',
      image: 'https://ui-avatars.com/api/?length=3&name=C8&color=000&background=fff',
      popup: 'Día de sombra (pasan el día laboral como sombra de otro compañero)',
    },
  ];

  return <Podium positions={podiumData} />;
}
