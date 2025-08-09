import React from 'react';
import { likeConfession } from './LikeConfessions';

export default function ConfessionCard({ id, title, description, likes }) {
  return (
    <div
      className="w-full max-w-3xl mx-auto p-8 
                 bg-white/80 dark:bg-gray-800/80 
                 backdrop-blur-md rounded-2xl shadow-lg space-y-4
                 sm:p-10"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
        {description}
      </p>
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => likeConfession(id)}
          className="px-3 py-1 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          ❤️ Like
        </button>
        <span className="text-sm text-gray-500">
          {likes} {likes === 1 ? 'like' : 'likes'}
        </span>
      </div>
    </div>
  );
}
