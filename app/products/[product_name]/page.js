import Image from "next/image";
import { getSingleProduct } from "@/action/product/getSingleProduct";
import SubmitButton from "@/components/Button";

//Server action
const SingleProductpage = async ({ params }) => {
  const product = await getSingleProduct(params.product_name);

  if (product?.error) {
    return <p>{product.error}</p>;
  }
  return (
    <>
      <article className="md:flex w-full px-[10%]">
        <div className="md:3/5 grow">
          <Image
            width={500}
            height={500}
            src={product?.product_image}
            alt={product?.product_name}
          />
        </div>
        <div className="md:w-2/5 py-7">
          <h2 className="text-3xl">{product?.product_name}</h2>
          <p className="mt-4 bg-slate-400 font-thin text">${product.price}</p>
          <section className="*:list-none space-y-3 my-5">
            <li>
              <p>
                Color
                <span
                  className={`my-2 ring-2 focus:ring-4 block ring-black ring-offset-1 py-2 px-3 caret-blaack outline-none rounded w-full`}
                >
                  {product?.color}
                </span>
              </p>
            </li>
            <li>
              <p>
                Size
                <span
                  className={`my-2 ring-2 focus:ring-4 block ring-black ring-offset-1 py-2 px-3 caret-blaack outline-none rounded w-full`}
                >
                  {product?.size}
                </span>
              </p>
            </li>
          </section>
          <section>
            <form>
              <input
                className={`my-2 ring-2 focus:ring-4 block ring-black ring-offset-1 py-2 px-3 caret-blaack outline-none rounded w-full`}
                placeholder="Enter Quantity"
              />
              <SubmitButton>Add to cart</SubmitButton>
            </form>
          </section>
          <section className="my-4">
            <h3>{product.descriptions?.header}</h3>
          </section>
        </div>
      </article>
    </>
  );
};

export default SingleProductpage;
