const SectionQuestion = () => {
    return (
        <section className="flex justify-center items-center h-screen bg-white relative">
            <div className="md:w1/2">
                <h1 className="text-black p-4 md:text-6xl font-bold text-center mt-10 mb-16 uppercase">¿Cómo podemos mejorar la falta de comunicación efectiva entre las diferentes áreas de Katharsis?</h1>
            </div>
            <img
                src="/ovejav3.png"
                alt=""
                className="w-[300px] md:w-[450px] absolute bottom-0  z-10"
            />
        </section>
    );
};

export default SectionQuestion;
