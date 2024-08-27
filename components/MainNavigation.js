"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartIcon from "./CartIcon";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CurrencyExchange from "./Currency";
import { SearchForm } from "./SearchForm";
import { useState } from "react";
import SidebarModal from "./Sidebar-modal";

export default function MainNavigation() {
  const [showSearch, toggleSearch] = useState(false);
  const [showSidebar, toggleSideBar] = useState(false);
  const offSearch = () => toggleSearch(false);
  const offmodal = () => toggleSideBar(false);
  return (
    <>
      <nav className="flex justify-between sticky py-6 px-[5%]">
        <button onClick={() => toggleSideBar(true)} className="block ">
          <FontAwesomeIcon
            className="text-black block font-sans text-3xl"
            icon={faBars}
          />
        </button>
        <div>
          <Link href="/" className="text-3xl font-[200] block">
            ExP Clothing
          </Link>
        </div>
        <div className="flex first:mr-5 gap-8 *:block items-center">
          <CurrencyExchange />
          <button
            onClick={() => toggleSearch(true)}
            className="block cursor-pointer"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <CartIcon />
        </div>
      </nav>
      {showSearch && <SearchForm />}
      {showSidebar && <SidebarModal offmodal={offmodal} />}
    </>
  );
}
