import ExerciseCard from "./ExerciseCard";

interface Exercise {
  title: string;
  description: string;
  iconName: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  duration: string;
}

interface ExerciseCategoryProps {
  title: string;
  exercises: Exercise[];
  categoryIcon: string;
}

const ExerciseCategory = ({
  title,
  exercises,
  categoryIcon,
}: ExerciseCategoryProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-4">
            <span className="text-2xl">{categoryIcon}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 font-montserrat">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              title={exercise.title}
              description={exercise.description}
              iconName={exercise.iconName}
              difficulty={exercise.difficulty}
              duration={exercise.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseCategory;
