import React from 'react';

const teamMembers = [
    {
        name: 'Damaris García',
        position: 'Consultora de Innovación',
        image: '/dm.jpeg',
        description: "Guía en la creación de estrategias innovadoras que transforman ideas en soluciones competitivas, aprovechando el potencial creativo para generar un impacto real en el futuro."
    },
    {
        name: 'Camila Cardona',
        position: 'Consultora de Creatividad',
        image: '/cc.jpeg',
        description: "Facilitadora en el proceso de reconectar a las personas con su creatividad innata, despertando su 'oveja negra' para impulsar soluciones originales y disruptivas."
    },
];

const TeamSection = () => {
    return (
        <section className="py-20 " id="equipo-k">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">Equipo K</h2>
                <div className="flex flex-wrap justify-center md:gap-[100px] gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 justify-center items-center flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            <div className="avatar mb-5">
                                <div className="mask mask-hexagon w-[200px] md:w-[300px]">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="p-4 flex justify-center items-center flex-col text-center">
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                <p className="text-gray-600/80 text-center font-bold mb-2">{member.position}</p>
                                <p className="text-gray-600/80 text-center text-balance">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
