import React from 'react'

type PodiumPosition = {
  name: string
  score: number
  image: string
}

type PodiumProps = {
  positions: [PodiumPosition, PodiumPosition, PodiumPosition]
}

const Podium: React.FC<PodiumProps> = ({ positions }) => {
  const [second, first, third] = positions

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-10 text-blue-800">Podium</h1>
      <div className="flex items-end justify-center w-full max-w-3xl">
        {/* Second Place */}
        <div className="flex flex-col items-center mb-4 mx-2">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 mb-2">
            <img src={second.image} alt={second.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-300 w-48 h-40 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-2xl font-bold text-gray-800">{second.name}</span>
            <span className="text-xl text-gray-600">{second.score}</span>
          </div>
          <div className="text-4xl font-bold text-gray-600">2</div>
        </div>

        {/* First Place */}
        <div className="flex flex-col items-center mb-4 mx-2 transform hover:scale-105 transition-transform duration-500">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 mb-2">
            <img src={first.image} alt={first.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-yellow-400 w-56 h-52 flex flex-col items-center justify-end rounded-t-lg p-4 shadow-lg">
            <span className="text-3xl font-bold text-white drop-shadow-md">{first.name}</span>
            <span className="text-2xl text-white drop-shadow-md">{first.score}</span>
          </div>
          <div className="text-5xl font-bold text-yellow-600">1</div>
        </div>

        {/* Third Place */}
        <div className="flex flex-col items-center mb-4 mx-2">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-300 mb-2">
            <img src={third.image} alt={third.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-orange-300 w-44 h-32 flex flex-col items-center justify-end rounded-t-lg p-4">
            <span className="text-xl font-bold text-white drop-shadow-md">{third.name}</span>
            <span className="text-lg text-white drop-shadow-md">{third.score}</span>
          </div>
          <div className="text-3xl font-bold text-orange-600">3</div>
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  const podiumData: [PodiumPosition, PodiumPosition, PodiumPosition] = [
    {
      name: "Sarah",
      score: 8750,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Michael",
      score: 9100,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Emma",
      score: 8500,
      image: "/placeholder.svg?height=200&width=200"
    }
  ]

  return <Podium positions={podiumData} />
}
