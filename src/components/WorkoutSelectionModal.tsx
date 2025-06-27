import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WorkoutSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWorkoutSelect: (workoutType: string) => void;
}

const workoutTypes = [
  {
    title: "Верх тела",
    description: "Грудь, спина, плечи, руки",
    icon: "💪",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Низ тела",
    description: "Ноги, ягодицы, икры",
    icon: "🦵",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Кор",
    description: "Пресс, косые мышцы",
    icon: "🔥",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    title: "Полное тело",
    description: "Комплексная тренировка",
    icon: "⚡",
    color: "bg-purple-500 hover:bg-purple-600",
  },
];

const WorkoutSelectionModal = ({
  isOpen,
  onClose,
  onWorkoutSelect,
}: WorkoutSelectionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Выберите тип тренировки
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-3">
          {workoutTypes.map((workout) => (
            <button
              key={workout.title}
              onClick={() => onWorkoutSelect(workout.title)}
              className={`${workout.color} text-white p-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-4`}
            >
              <span className="text-2xl">{workout.icon}</span>
              <div className="text-left">
                <h3 className="font-semibold text-lg">{workout.title}</h3>
                <p className="text-sm opacity-90">{workout.description}</p>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkoutSelectionModal;
