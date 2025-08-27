import React from 'react';

export default function LoadingScreen({ message = 'Loading ...' }) {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}
