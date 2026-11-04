import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Claude Application</h1>
        <p className="text-gray-600">Full-stack React + Express with tRPC</p>
      </header>
      <main className="max-w-4xl mx-auto">
        <p className="text-gray-700">
          This is the client-side React application built with Vite and Tailwind CSS.
          It connects to the backend API via tRPC.
        </p>
      </main>
    </div>
  );
};

export default App;
