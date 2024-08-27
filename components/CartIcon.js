"use client";
import Link from "next/link";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartIcon() {
  return (
    <Link href="/cart" className="text-3xl font-[200] block">
      <FontAwesomeIcon icon={faShoppingBag} className="text-2xl" />
    </Link>
  );
}
