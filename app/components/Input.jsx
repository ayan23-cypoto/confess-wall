'use client';
import React, { useState } from 'react';
import ConfessionFields from './ConfessionsFields';
import SubmitButton from './SubmitButton';

export default function Input() {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/confessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        console.error(await res.json());
        return;
      }

      setTitle('');
      setDescription('');
      setExpanded(false);
    } catch (err) {
      console.error('Error posting confession:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="w-full max-w-3xl mx-auto p-8 
                 bg-white/80 dark:bg-gray-800/80 
                 backdrop-blur-md rounded-2xl shadow-lg space-y-4
                 sm:p-10"
      onClick={() => !expanded && setExpanded(true)}
      onSubmit={handleSubmit}
    >
      {!expanded ? (
        <input
          type="text"
          placeholder="Make a confession..."
          className="block w-full p-5 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50/80
                     focus:ring-blue-500 focus:border-blue-500
                     dark:bg-gray-700/80 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                     dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      ) : (
        <>
          <ConfessionFields
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          />
          <SubmitButton loading={loading} />
        </>
      )}
    </form>
  );
}
