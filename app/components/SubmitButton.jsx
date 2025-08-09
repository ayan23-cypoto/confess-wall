import React from 'react';

export default function SubmitButton({ loading }) {
  return (
    <div className="text-center">
      <button
        type="submit"
        disabled={loading}
        className={`px-6 py-2 text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 
                    font-medium rounded-lg text-sm 
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Posting...' : 'Post'}
      </button>
    </div>
  );
}
