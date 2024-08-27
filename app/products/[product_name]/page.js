import Image from "next/image";
import { getSingleProduct } from "@/action/product/getSingleProduct";
import SubmitButton from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";

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
          <p className="mt-4 text-slate-400 font-thin text">${product.price}</p>
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
                type="number"
                className={`my-2 ring-2 focus:ring-4 block ring-black ring-offset-1 py-2 px-3 caret-blaack outline-none rounded w-full`}
                placeholder="Enter Quantity"
              />
              <SubmitButton className="my-4 py-4  rounded w-full bg-black text-white ">
                Add to cart
              </SubmitButton>
            </form>
          </section>
          <section className="tracking-wide my-4 space-y-4">
            <h3 className="tracking-wide leading-[2.4rem] text-xl">
              {product.descriptions?.header}
            </h3>
            {product?.descriptions?.list_of_desc.map((desc) => (
              <li key={desc} className="list-none">
                <FontAwesomeIcon icon={faListDots} />
                <span className="tracking-wide">{desc}</span>
              </li>
            ))}
          </section>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default SingleProductpage;
