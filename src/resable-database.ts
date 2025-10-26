import { db } from './firebase';
import { ref, onValue } from 'firebase/database';

export function listenScores(callback: (scores: any) => void) {
  const skorRef = ref(db, 'skorlar');
  onValue(skorRef, (snapshot) => {
    callback(snapshot.val());
  });
}
