import { db } from "@/firebase/init";
import { doc, updateDoc } from "firebase/firestore";

export async function addtoOrder(prevTransaction, name) {
  const docRef = doc(db, "user", prevTransaction.uid);
  await updateDoc(docRef, {
    username: name,
  })
    .then(() => "Username update successfully!")
    .catch((e) => {
      throw new Error(e?.code);
    });
}
