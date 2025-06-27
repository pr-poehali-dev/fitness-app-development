import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Dumbbell" size={32} className="text-orange-400" />
            <h1 className="text-3xl font-bold font-montserrat">FitForce</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Упражнения
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Программы
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Прогресс
            </a>
          </nav>
          <Icon name="Menu" size={24} className="md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
