"use client";
import React, { useState } from 'react';
import { Card } from './learnCard';

export const LearningModule = ({ module, onBack }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const getCardsForModule = (module: string) => {
    switch (module) {
      case "Alphabets":
        return Array.from({ length: 26 }, (_, i) => ({
          image: `/image/${String.fromCharCode(97 + i)}.png`,
          title: String.fromCharCode(65 + i),
        }));

      case "Numbers":
        return Array.from({ length: 10 }, (_, i) => ({
          image: `/image/${i}.png`,
          title: i.toString(),
        }));

      case "Words":
        const words = ["cat", "ball", "dog"]; // Add more words as needed
        return words.map((word) => ({
          image: `/image/${word}.png`,
          title: word.toUpperCase(),
        }));

      default:
        return [];
    }
  };

  const cards = getCardsForModule(module);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const progressPercentage = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="learning-module">
      {/* Back button and module name */}
      <div className="flex items-center mb-4">
        <button 
          onClick={onBack} 
          className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full text-lg"
        >
          ←
        </button>
        <h1 className="text-2xl font-bold ml-4 uppercase">{module}</h1>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-1 bg-gray-300 rounded mb-4">
        <div 
          className="absolute top-0 left-0 h-1 bg-blue-500 rounded" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Cards Display */}
      {isMobile ? (
        <div className="flex justify-center">
          <Card card={cards[currentIndex]} onNext={handleNextCard} isMobile={isMobile}/>
        </div>
      ) : (
        <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card: any, index: number) => (
            <Card key={index} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};
