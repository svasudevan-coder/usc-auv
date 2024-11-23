import React from 'react';
import joinContent from './join.md';

const Join = () => {
  // Split the markdown content into sections
  const sections = joinContent.split('###').map(section => section.trim());

  // Extract the blurb and meeting times
  const blurb = sections.find(section => section.startsWith('Blurb')).replace('Blurb', '').trim();
  const meetingTimes = sections.find(section => section.startsWith('Meeting Times')).replace('Meeting Times', '').trim();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Join Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Join Us</h1>
        <div className="w-24 h-[1px] bg-gray-400 mx-auto"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/api/placeholder/600/400"
            alt="Join USC AUV"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Blurb and Meeting Times */}
        <div className="md:w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">About Joining</h2>
            <p className="text-lg leading-relaxed">{blurb}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Meeting Times</h2>
            <p className="text-lg leading-relaxed whitespace-pre-wrap">{meetingTimes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;