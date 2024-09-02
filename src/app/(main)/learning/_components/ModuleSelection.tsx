"use client";
import { useState, useEffect } from "react";

const ModuleSelection = ({ onSelectModule }: any) => {
  const modules = [
    { name: 'Alphabets', color: 'bg-purple-300' },
    { name: 'Numbers', color: 'bg-yellow-200' },
    { name: 'Words', color: 'bg-blue-400' },
  ];

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center md:justify-start">
        <div className="text-2xl font-semibold">Modules</div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {modules.map((module) => (
          <button
            key={module.name}
            onClick={() => onSelectModule(module.name)}
            className={`${module.color} w-72 h-40 rounded-2xl p-4 flex items-center justify-between transition-transform transform hover:scale-105`}
          >
            <span className="text-lg font-semibold">{module.name}</span>
            <span className="text-2xl">&rarr;</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleSelection;
