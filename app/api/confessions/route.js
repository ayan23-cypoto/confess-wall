import { db } from '@/firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description } = body;

    if (!title || !description) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    // Push a new confession to Realtime DB
    await push(ref(db, 'confessions'), {
      title,
      description,
      createdAt: Date.now(), // Realtime DB doesn’t have Firestore's serverTimestamp()
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error adding confession:', error);
    return new Response(JSON.stringify({ error: 'Failed to save confession' }), { status: 500 });
  }
}
