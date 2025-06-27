import Icon from "@/components/ui/icon";

interface ExerciseCardProps {
  title: string;
  description: string;
  iconName: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  duration: string;
}

const ExerciseCard = ({
  title,
  description,
  iconName,
  difficulty,
  duration,
}: ExerciseCardProps) => {
  const difficultyColors = {
    Легко: "bg-green-100 text-green-800",
    Средне: "bg-yellow-100 text-yellow-800",
    Сложно: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <Icon
            name={iconName as any}
            size={24}
            className="text-white"
            fallback="Activity"
          />
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 font-open-sans">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500">
          <Icon name="Clock" size={16} className="mr-1" />
          <span className="text-sm">{duration}</span>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
          Начать
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
