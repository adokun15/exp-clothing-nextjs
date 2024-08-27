import { db } from "@/firebase/init";
import { doc, getDocs } from "firebase/firestore";

export async function getSearchedProduct(query) {
  const docRef = doc(db, "products");
  await getDocs(docRef)
    .then((data) => console.log(data.data()))
    .catch((e) => {
      throw new Error(e?.code);
    });
}
