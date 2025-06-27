import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExerciseCategory from "@/components/ExerciseCategory";
import {
  upperBodyExercises,
  lowerBodyExercises,
  coreExercises,
  fullBodyExercises,
} from "@/data/exercises";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      <div className="py-16">
        <ExerciseCategory
          title="Верх тела"
          exercises={upperBodyExercises}
          categoryIcon="💪"
        />

        <ExerciseCategory
          title="Низ тела"
          exercises={lowerBodyExercises}
          categoryIcon="🦵"
        />

        <ExerciseCategory
          title="Кор"
          exercises={coreExercises}
          categoryIcon="🔥"
        />

        <ExerciseCategory
          title="Полное тело"
          exercises={fullBodyExercises}
          categoryIcon="⚡"
        />
      </div>
    </div>
  );
};

export default Index;
