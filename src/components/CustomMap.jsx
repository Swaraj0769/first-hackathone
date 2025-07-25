import React, { useState } from 'react';

const locations = [
  { x: 15, y: 180, name: 'New York', details: 'John F. Kennedy Intl. Airport' },
  { x: 120, y: 100, name: 'London', details: 'Heathrow Airport' },
  { x: 230, y: 120, name: 'Dubai', details: 'Dubai Intl. Airport' },
  { x: 350, y: 140, name: 'Singapore', details: 'Changi Airport' },
  { x: 300, y: 250, name: 'Singapore', details: 'Changi Airport' },
  { x: 170, y: 280, name: 'Singapore', details: 'Changi Airport' },
  { x: 45, y: 250, name: 'Singapore', details: 'Changi Airport' },
];

const CustomMap = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative bg-amber-800 w-full max-w-50rem h-screen mx-auto">
      
      <svg viewBox="0 50 400 300" className="w-280 ml-50 h-auto">
        {/* Dashed flight path */}
        <path
          d="M15,180 C120,0 390,190 350,130 C350,150 350,310 170,280 C40,230 70,300 15,180"
          fill="none"
          stroke="#6B7280"
          strokeWidth="3"
          strokeDasharray="6,6"
        />

        {/* Location markers */}
        {locations.map((pt, idx) => (
          <g
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer"
          >
            <circle cx={pt.x} cy={pt.y} r="8" fill="#EF4444" />
            <circle cx={pt.x} cy={pt.y} r="12" fill="none" stroke="#EF4444" strokeWidth="2" />

            {/* Tooltip */}
            {hoveredIndex === idx && (
              <foreignObject x={pt.x + 10} y={pt.y - 50} width="150" height="50">
                <div className="bg-white text-sm text-gray-800 shadow-lg rounded px-2 py-1 border border-gray-300">
                  <strong>{pt.name}</strong>
                  <div>{pt.details}</div>
                </div>
              </foreignObject>
            )}
          </g>
        ))}

        {/* Airplane Icon (static for now) */}
        <text x="250" y="70" fontSize="24" className="fill-current text-gray-800" transform="rotate(45 200 120)">
          ✈️
        </text>
      </svg>
    </div>
  );
};

export default CustomMap;