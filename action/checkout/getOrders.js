import { db } from "@/firebase/init";
import { doc, getDoc } from "firebase/firestore";

export async function getOrders(uid) {
  const docRef = doc(db, "user", uid);
  await getDoc(docRef)
    .then((data) => console.log(data.data()))
    .catch((e) => {
      throw new Error(e?.code);
    });
}
