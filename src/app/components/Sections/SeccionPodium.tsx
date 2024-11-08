import React from 'react';

type PodiumPosition = {
  name: string;
  score: number;
  image: string;
};

type PodiumProps = {
  positions: [PodiumPosition, PodiumPosition, PodiumPosition];
};

const Podium: React.FC<PodiumProps> = ({ positions }) => {
  const [second, first, third] = positions;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-indigo-800">Podium</h1>
      <div className="flex items-end justify-center w-full max-w-5xl">
        {/* Second Place */}
        <div className="flex flex-col items-center mx-4 transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg mb-4">
            <img src={second.image} alt={second.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-400 w-40 h-44 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-2xl font-bold text-white drop-shadow-lg">{second.name}</span>
            <span className="text-xl text-white drop-shadow-md">{second.score}</span>
          </div>
          <div className="text-4xl font-bold text-gray-600 mt-2">2</div>
        </div>

        {/* First Place */}
        <div className="flex flex-col items-center mx-4 transform hover:scale-110 transition-transform duration-500 ease-in-out">
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl mb-4">
            <img src={first.image} alt={first.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-yellow-500 w-48 h-56 flex flex-col items-center justify-end rounded-t-lg p-4 shadow-lg">
            <span className="text-3xl font-bold text-white drop-shadow-lg">{first.name}</span>
            <span className="text-2xl text-white drop-shadow-md">{first.score}</span>
          </div>
          <div className="text-5xl font-bold text-yellow-600 mt-2">1</div>
        </div>

        {/* Third Place */}
        <div className="flex flex-col items-center mx-4 transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-400 shadow-md mb-4">
            <img src={third.image} alt={third.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-orange-400 w-36 h-36 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-xl font-bold text-white drop-shadow-md">{third.name}</span>
            <span className="text-lg text-white drop-shadow-sm">{third.score}</span>
          </div>
          <div className="text-3xl font-bold text-orange-600 mt-2">3</div>
        </div>
      </div>
    </div>
  );
};

export default function Component() {
  const podiumData: [PodiumPosition, PodiumPosition, PodiumPosition] = [
    {
      name: 'Sarah',
      score: 8750,
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      name: 'Michael',
      score: 9100,
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      name: 'Emma',
      score: 8500,
      image: '/placeholder.svg?height=200&width=200',
    },
  ];

  return <Podium positions={podiumData} />;
}
