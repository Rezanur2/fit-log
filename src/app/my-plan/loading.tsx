import React from "react";

const BooksLoading = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-lg text-my-brand"></span>
      <p className="text-sm text-[#8A92A0]">Loading workouts…</p>
    </div>
  );
};

export default BooksLoading;
