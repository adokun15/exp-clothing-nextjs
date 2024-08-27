import { db } from "@/firebase/init";
import { collection, getDocs, query } from "firebase/firestore";

export async function getProducts() {
  const docRef = query(collection(db, "Products"));

  let list = [];
  await getDocs(docRef)
    .then((productList) => {
      productList.forEach((product) => {
        list.push({ ...product.data(), id: product.id });
      });
    })
    .catch((e) => {
      console.log(e);
      return { error: e?.code || e?.message || "Something went wrong " };
    });
  return list;
  //   .then((data) => console.log(data.data()))
  //   .catch((e) => {
  //     throw new Error(e?.code);
  //  });
}
