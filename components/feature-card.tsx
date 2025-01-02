import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black p-8 rounded-2xl text-center hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-700">
      <div className="text-blue-400 mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">{title}</h3>
      <p className="text-gray-300 font-light">{description}</p>
    </div>
  );
}

