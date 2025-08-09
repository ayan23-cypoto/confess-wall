import { ref, runTransaction } from 'firebase/database';
import { db } from '../../firebase';

export async function likeConfession(confessionId) {
  const confessionRef = ref(db, `confessions/${confessionId}/likes`);
  try {
    await runTransaction(confessionRef, (currentLikes) => {
      return (currentLikes || 0) + 1;
    });
  } catch (error) {
    console.error("Error liking confession:", error);
  }
}
