import React from 'react';
import names from './eboard.md';

const Title = () => {
  return (
    <h1 className="text-4xl font-bold text-center mb-12">Eboard</h1>
  );
};

const EBoard = () => {
  // Parse the markdown content
  const lines = names.split('\n').filter(line => line.trim() !== '');
  const members = [];
  
  // Group lines into sets of 4 (name, position, major, linkedin)
  for (let i = 0; i < lines.length; i += 4) {
    if (lines[i] && lines[i + 1] && lines[i + 2] && lines[i + 3]) {
      members.push({
        name: lines[i].replace('# ', ''),
        position: lines[i + 1],
        major: lines[i + 2],
        linkedin: lines[i + 3]
      });
    }
  }

  // Create array of 16 items, fill remaining slots with placeholder data
  const gridItems = [...members];
  while (gridItems.length < 16) {
    gridItems.push({
      name: "Position Available",
      position: "Open Role", 
      major: "Any Major",
      linkedin: "#"
    });
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="flex flex-col items-center py-8">
        <Title />
        
        {/* Flex Container */}
        <div className="flex flex-wrap justify-center gap-5">
          {gridItems.map((member, index) => (
            <div
              key={index}
              className="w-56 flex flex-col items-center"
            >
              {/* Circular Placeholder Image */}
              <div className="w-48 h-48 bg-gray-200 mb-4 flex items-center justify-center overflow-hidden rounded-full shadow-md">
                <img 
                  src={`/api/placeholder/200/200`}
                  alt={`${member.name}'s photo`}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Member Details */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-0">{member.name}</h3>
                <p className="text-md text-gray-600 font-medium">{member.position}</p>
                <p className="text-sm text-gray-500 mt-0">{member.major}</p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 mt-1 text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EBoard;