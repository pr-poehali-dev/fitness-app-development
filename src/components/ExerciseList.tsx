import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface Exercise {
  title: string;
  description: string;
  iconName: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  duration: string;
}

interface ExerciseListProps {
  category: string;
  exercises: Exercise[];
  onBack: () => void;
}

const ExerciseList = ({ category, exercises, onBack }: ExerciseListProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Верх тела":
        return "💪";
      case "Низ тела":
        return "🦵";
      case "Кор":
        return "🔥";
      case "Полное тело":
        return "⚡";
      default:
        return "🏋️";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко":
        return "bg-green-100 text-green-800";
      case "Средне":
        return "bg-yellow-100 text-yellow-800";
      case "Сложно":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{getCategoryIcon(category)}</span>
          <h1 className="text-3xl font-bold text-gray-900">{category}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon
                  name={exercise.iconName as any}
                  size={24}
                  className="text-blue-600"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {exercise.title}
                </h3>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    exercise.difficulty,
                  )}`}
                >
                  {exercise.difficulty}
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{exercise.description}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Icon name="Clock" size={16} />
              <span>{exercise.duration}</span>
            </div>

            <div className="mt-6">
              <Button className="w-full">Начать упражнение</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
