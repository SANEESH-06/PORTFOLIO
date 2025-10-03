// components/PolygonDiv.jsx
import React from "react";

export default function PolygonDiv() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div
        className="
          w-80 h-80 bg-red-500 text-white flex items-center justify-center font-bold
          transition-transform duration-500 hover:scale-400
          [clip-path:polygon(0%_50%,50%_0%,100%_50%,50%_100%)]
        "
      >
        Polygon Div
      </div>
    </div>
  );
}
