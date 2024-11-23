import React from 'react';
import aboutContent from './about.md';

const About = () => {
  // Split the markdown content into sections
  const sections = aboutContent.split('###').map(section => section.trim());

  // Extract the mission and description
  const mission = sections.find(section => section.startsWith('Mission')).replace('Mission', '').trim();
  const description = sections.find(section => section.startsWith('Description')).replace('Description', '').trim();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Large Image Placeholder */}
      <div className="w-full h-96 bg-gray-200 mb-8 flex items-center justify-center overflow-hidden">
        <img 
          src="/api/placeholder/1200/600"
          alt="About Us" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Mission Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
        <div className="w-24 h-[1px] bg-gray-400 mx-auto mb-6"></div>
        <p className="text-lg leading-relaxed">{mission}</p>
      </div>

      {/* Description Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">About Us</h2>
        <div className="w-24 h-[1px] bg-gray-400 mx-auto mb-6"></div>
        <div className="mx-auto max-w-4xl px-8">
          <p className="text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;