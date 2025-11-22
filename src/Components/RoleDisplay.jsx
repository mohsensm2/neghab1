import React from "react";

export default function RoleDisplay({ role, onNextRole }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 pt-24 pb-24 bg-gray-50">
      
      {/* عنوان نقش */}
      <h2 className="text-3xl font-bold mb-6">{role}</h2>
      
      {/* تصویر گرافیکی نقش */}
      <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center text-6xl mb-6">
        🎭
      </div>

      {/* دکمه نقش بعدی */}
      <button
        onClick={onNextRole}
        className="nextRoleBtn px-6 py-3 bg-darkgreen text-white rounded-lg hover:bg-green-700 transition duration-300 text-xl w-48"
      >
        نقش بعدی
      </button>
    </div>
  );
}
