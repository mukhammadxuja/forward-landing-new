import { Brain } from 'lucide-react';

function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <div className="flex items-start gap-4 p-4 lg:p-6 border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm">
        <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">17+ shaharda</p>
          <p className="text-gray-500 text-xs lg:text-sm">butun O‘zbekiston bo‘ylab faoliyat</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 lg:p-6 border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm">
        <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">120+ loyihalar</p>
          <p className="text-gray-500 text-xs lg:text-sm">turli sohalar uchun joylashtirilgan</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 lg:p-6 border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm">
        <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">600k+ views</p>
          <p className="text-gray-500 text-xs lg:text-sm">kunlik ko‘rish qamrovi</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 lg:p-6 border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm">
        <Brain className="text-emerald-600/80 text-3xl lg:text-4xl" />
        <div>
          <p className="font-semibold text-sm lg:text-base">80% mijozlar</p>
          <p className="text-gray-500 text-xs lg:text-sm">xizmatdan to‘liq mamnun</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
