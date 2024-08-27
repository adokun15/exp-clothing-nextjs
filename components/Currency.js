"use client";
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

export default function CurrencyExchange() {
  const [currentlySelected, setCurrentCurrency] = useState(null);
  const [toggle, settogle] = useState(false);

  return (
    <div className="relative space-y-3">
      <div className="relative flex gap-2">
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
