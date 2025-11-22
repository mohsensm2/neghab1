import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Neghab from "./Neghab";
import PlayerSelection from "./PlayerSelection";
import RoleDisplay from "./RoleDisplay";

// لیست نقش‌ها
const rolesList = [
  "کارآگاه",
  "دکتر",
  "اسنایپر",
  "شهروند ساده",
  "شهروند ساده",
  "زره پوش",
  "خبرنگار",
  "مذاکره کننده",
  "مافیا ساده",
  "رییس مافیا"
];

// تابع شافل
const shuffleArray = (array) => {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function Home() {
  const [step, setStep] = useState("scenario"); // scenario | playerCount | roleSelection | roleDisplay
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [playerCount, setPlayerCount] = useState(0);
  const [roles, setRoles] = useState([]); // لیست نقش‌ها برای انتخاب
  const [currentRole, setCurrentRole] = useState(null); // نقش فعلی برای نمایش

  // انتخاب سناریو
  const handleScenarioSelection = (scenario) => {
    setSelectedScenario(scenario);
    setStep("playerCount");
  };

  // انتخاب تعداد نفرات
  const handlePlayerCountSelection = (count) => {
    setPlayerCount(count);

    // فقط وقتی هنوز roles خالی است، شافل کن
    if (roles.length === 0) {
      const initialRoles = [];
      for (let i = 0; i < count; i++) {
        initialRoles.push(rolesList[i % rolesList.length]);
      }
      setRoles(shuffleArray(initialRoles));
    }

    setStep("roleSelection");
  };

  // کلیک روی نقش
  const handleRoleClick = (index) => {
    setCurrentRole(roles[index]);
    setStep("roleDisplay");
  };

  // بعدی در صفحه نمایش نقش
  const handleNextRole = () => {
    if (currentRole) {
      // حذف نقش انتخاب شده از لیست
      setRoles((prev) => prev.filter((r) => r !== currentRole));
      setCurrentRole(null);
      setStep("roleSelection");
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <Header showBack={false} />

      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-24 pb-24 w-full">

        {step === "scenario" && (
          <Neghab onSelectScenario={handleScenarioSelection} />
        )}

        {step === "playerCount" && (
          <PlayerSelection onSelectPlayerCount={handlePlayerCountSelection} />
        )}

        {step === "roleSelection" && (
          <div className="grid grid-cols-4 gap-4 w-full max-w-lg mt-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center justify-center text-4xl bg-transparent rounded-xl p-6 hover:shadow-xl transition"
                onClick={() => handleRoleClick(index)}
              >
                🎭
              </div>
            ))}
          </div>
        )}

        {step === "roleDisplay" && currentRole && (
          <RoleDisplay
            role={currentRole}
            onNextRole={handleNextRole}
          />
        )}

      </main>

      <Footer />
    </div>
  );
}
