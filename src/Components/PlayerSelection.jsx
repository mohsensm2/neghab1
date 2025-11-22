import React from "react";

const playerOptions = [10, 12, 13, 15, 21]; // تعداد‌های مختلف بازیکنان

export default function PlayerSelection({ onSelectPlayerCount }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 overflow-x-hidden">
      <div className="flex flex-col w-full max-w-md space-y-6">
        {/* ردیف‌های مربع‌ها */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {playerOptions.map((count) => (
            <div
              key={count}
              className={`bg-${getRandomColor()}-300 rounded-xl shadow-md p-6 flex items-center justify-center cursor-pointer hover:shadow-xl transition duration-300 w-full h-32`}
              onClick={() => onSelectPlayerCount(count)}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="text-4xl">👤</div> {/* آیکن یوزر */}
                <h2 className="text-lg font-semibold">{`${count} نفر`}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// تابعی برای دریافت رنگ‌های تصادفی
function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'indigo'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
