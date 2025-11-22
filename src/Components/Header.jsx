import React from "react";

export default function Header({ title, showBack = true, onBack }) {
  return (
    <header className="w-full bg-white shadow-md flex items-center p-4 sticky top-0 z-10">
      {showBack && (
        <button onClick={onBack} className="text-2xl mr-4 cursor-pointer">
          ←
        </button>
      )}
      <p style={{fontSize:'20px'}} className="text-lg sm:text-xl font-bold flex-1 text-center">کافه نقاب</p>
    </header>
  );
}
