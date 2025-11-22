import React from "react";

const scenarios = [
  { key: "tavakor", title: "تکاور", players: [10, 12, 13, 15], icon: "🛡️" },
  { key: "mozaker", title: "مذاکره", players: [10], icon: "💬" },
  { key: "bazparras", title: "بازپرس", players: [10, 12, 13], icon: "🔍" },
  { key: "jabbar", title: "جبار", players: [10, 12], icon: "⚔️" }
];

export default function Neghab({ onSelectScenario }) {
  return (
    <div className="flex flex-col w-full space-y-4">
      {scenarios.map((s) => (
        <div
          key={s.key}
          className="bg-white rounded-2xl shadow-md p-4 flex items-center cursor-pointer hover:shadow-xl transition duration-300 w-full box-border"
          dir="rtl"
          onClick={() => onSelectScenario(s)}
        >
          <div className="text-3xl sm:text-4xl flex-shrink-0">{s.icon}</div>
          <h2 className="text-lg sm:text-xl font-semibold ml-3 flex-1 truncate">
            {s.title}
          </h2>
        </div>
      ))}
    </div>
  );
}
