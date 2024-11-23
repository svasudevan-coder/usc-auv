import React from 'react';
import auvContent from './auv.md';

const AUV = () => {
  // Split the markdown content into sections
  const sections = auvContent.split('###').map(section => section.trim());

  // Extract the electrical and mechanical system descriptions
  const electrical = sections.find(section => section.startsWith('Electrical')).replace('Electrical', '').trim();
  const mechanical = sections.find(section => section.startsWith('Mechanical')).replace('Mechanical', '').trim();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Large Image Placeholder */}
      <div className="w-full h-96 bg-gray-200 mb-8 flex items-center justify-center overflow-hidden">
        <img 
          src="/api/placeholder/1200/600"
          alt="AUV"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Electrical System Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-2">Electrical System</h2>
        <div className="w-24 h-[1px] bg-gray-400 mx-auto mb-6"></div>
        <div className="mx-auto max-w-4xl px-8">
          <p className="text-lg leading-relaxed">{electrical}</p>
        </div>
      </div>

      {/* Mechanical System Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Mechanical System</h2>
        <div className="w-24 h-[1px] bg-gray-400 mx-auto mb-6"></div>
        <div className="mx-auto max-w-4xl px-8">
          <p className="text-lg leading-relaxed">{mechanical}</p>
        </div>
      </div>
    </div>
  );
};

export default AUV;