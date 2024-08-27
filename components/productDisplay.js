import Image from "next/image";
import Link from "next/link";

export default async function ProductsDisplay({ products }) {
  return (
    <div className="py-5 my-4 justify-between items-center mx-[4%] grid grid-cols-2 md:grid-cols-4 transition-all">
      {products &&
        products.map((product) => (
          <Link
            href={`/products/${product?.id}`}
            className="list-none block "
            key={product.id}
          >
            <div>
              <Image
                width={300}
                height={300}
                src={product?.product_image}
                alt={product?.product_name}
              />
            </div>
            <p className="text-[14px] text-balance tracking-tight text-center">
              {product?.product_name}
            </p>
            <p className="text-[14px] tracking-tight text-center">
              ${product?.price}
            </p>
          </Link>
        ))}
    </div>
  );
}
