"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SearchForm() {
  return (
    <div>
      <div
        className={`fixed h-[100vh] z-[10]  w-full top-0 bg-[rgba(0,0,0,0.8)] `}
      ></div>
      <form className="absolute gap-3 z-[20] top-0 h-[14vh] w-full shadow  bg-white py-6 px-[10%] flex">
        <input
          className={`ring-2 focus:ring-4 ring-black ring-offset-1 py-2 px-3 caret-black grow outline-none rounded `}
          placeholder="Enter product name"
        />
        <button className="block">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {/**Suggestion list */}
    </div>
  );
}
