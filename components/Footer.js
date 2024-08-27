"use client";

import PaymentCards from "./PaymentCards";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CURRENCY_LIST = [
  "USD | UNITED STATE",
  "AUD | AUSTRIA",
  "EUR | EUROPE",
  "CAD | CANADA",
  "EUR | FINLAND",
  "EUR | FRANCES",
  "GBP | UNITES KINGDOM",
];

function Currency() {
  const [currentlySelected, setCurrentCurrency] = useState(null);
  const [toggle, settogle] = useState(false);

  return (
    <div className="relative md:block hidden space-y-3">
      <div className=" flex gap-2">
        <p className="underline">{currentlySelected || "USD | UNITED STATE"}</p>
        <button onClick={() => settogle((p) => !p)}>
          {!toggle ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </button>
      </div>
      {toggle && (
        <div className="absolute space-y-3 px-4 py-1 rounded w-[15rem] overflow-y-scroll h-[8rem] shadow-slate-400 z-10  origin-top-right  bg-white shadow">
          {CURRENCY_LIST?.map((cur) => (
            <li
              key={cur}
              className="list-none cursor-pointer"
              onClick={() => {
                settogle(false);
                setCurrentCurrency(cur);
              }}
            >
              {cur}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <div className="px-[10%] pt-[5%] min-h-[15vh] border-t">
      <article className="flex mb-8 justify-between">
        <Currency />
        <PaymentCards />
      </article>

      <p className="text-slate-400 text-[16px] text-center">
        @2024 exP clothing
      </p>
    </div>
  );
}
