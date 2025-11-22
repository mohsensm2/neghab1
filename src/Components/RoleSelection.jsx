import React from "react";

export default function RoleSelection({ roles, onRoleClick }) {
  const getGridCols = () => {
    const count = roles.length;
    if (!count) return "grid-cols-2";
    if (count > 20) return "grid-cols-6";
    return count % 2 === 0 ? "grid-cols-4" : "grid-cols-5";
  };

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className={`grid ${getGridCols()} gap-4 w-full max-w-lg`}>
        {roles.map((role, index) => (
          <div
            key={index}
            className="cursor-pointer flex items-center justify-center w-20 h-20 rounded-xl bg-transparent hover:shadow-md transition text-4xl"
            onClick={() => onRoleClick(role, index)}
          >
            🎭
          </div>
        ))}
      </div>
    </div>
  );
}
