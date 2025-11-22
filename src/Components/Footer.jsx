import React from "react";

export default function Footer({ children }) {
  return (
    <footer className="w-full bg-white border-t p-3 text-center text-gray-500 text-sm sm:text-base sticky bottom-0">
      {children || "Mafia Role App — WebView Edition"}
    </footer>
  );
}
