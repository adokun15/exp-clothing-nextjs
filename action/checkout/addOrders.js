import { db } from "@/firebase/init";
import { doc, updateDoc } from "firebase/firestore";

export async function addtoOrder(prevTransaction, newOrder) {
  const docRef = doc(db, "user", prevTransaction.uid);
  await updateDoc(docRef, {
    orders: [...prevTransaction.orders, newOrder],
  })
    .then(() => "your Order has been added successfully!")
    .catch((e) => {
      throw new Error(e?.code);
    });
}
