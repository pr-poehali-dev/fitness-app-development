interface HeroProps {
  onStartWorkout: () => void;
}

const Hero = ({ onStartWorkout }: HeroProps) => {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-blue-600 to-orange-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
          Силовые Упражнения
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-open-sans">
          Развивай силу и выносливость с помощью эффективных упражнений
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onStartWorkout}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Начать тренировку
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            Смотреть видео
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
