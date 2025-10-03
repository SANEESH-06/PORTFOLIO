"use client";

export default function TransformBox() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* rotate and scale */}
      <div className="w-40 h-40 bg-pink-400 transform rotate-12 scale-110 flex items-center justify-center">
        Transformed Div
      </div>
    </div>
  );
}
