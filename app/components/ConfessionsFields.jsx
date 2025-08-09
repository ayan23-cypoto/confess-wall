import React from 'react';

const baseInput =
  "block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " +
  "focus:ring-blue-500 focus:border-blue-500 " +
  "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " +
  "dark:focus:ring-blue-500 dark:focus:border-blue-500";

export default function ConfessionFields({ title, setTitle, description, setDescription }) {
  return (
    <>
      <input
        id="title"
        type="text"
        placeholder="Title"
        className={baseInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        id="description"
        placeholder="Write your confession..."
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`${baseInput} resize-y`}
      />
    </>
  );
}
