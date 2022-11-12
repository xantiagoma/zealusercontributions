"use client";

export default function ScrollTop() {
  return (
    <button
      className="fixed right-0 bottom-0 w-8 h-8 bg-gray-200 mr-2 mb-2 rounded-md hover:bg-gray-300"
      onClick={() => window.scrollTo(0, 0)}
    >
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
        />
      </svg>
    </button>
  );
}
