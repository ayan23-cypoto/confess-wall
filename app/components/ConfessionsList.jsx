'use client';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase.js';
import ConfessionCard from './ConfessionsCard.jsx';

export default function ConfessionList() {
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    const confessionsRef = ref(db, 'confessions');

    const unsubscribe = onValue(confessionsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formatted = Object.entries(data).map(([id, value]) => ({
          id,
          title: value.title || '',
          description: value.description || '',
          likes: value.likes || 0,
        }));
        // latest first
        setConfessions(formatted.reverse());
      } else {
        setConfessions([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6">
      {confessions.length > 0 ? (
        confessions.map((c) => (
          <ConfessionCard
            key={c.id}
            id={c.id}
            title={c.title}
            description={c.description}
            likes={c.likes}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No confessions yet. Be the first to share!
        </p>
      )}
    </div>
  );
}
