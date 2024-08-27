import { db } from "@/firebase/init";
import { doc, getDoc } from "firebase/firestore";

export async function getSingleProduct(id) {
  const docRef = doc(db, "Products", id);

  try {
    const product = await getDoc(docRef);
    return { ...product.data(), id: product.id };
  } catch (e) {
    return { errors: e?.code || e?.message || "Something went wrong " };
  }
}
