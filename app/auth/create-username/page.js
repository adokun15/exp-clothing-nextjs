export default function EditUserName() {
  return (
    <>
      <div className="mx-[5%] py-6 md:mx-[20%] my-10 px-4 bg-white shadow shadow-slate-400">
        <h1 className="text-3xl">Create a Username</h1>
        <form className="*:block my-3 *:font-oswald space-y-5">
          <label className="space-y-1">
            <input
              type="text"
              placeholder="Enter New Username"
              className="ring-2 ring-inset ring-black  rounded w-full py-2 px-1"
            />
            <p className="text-[12px]">
              Must not start with: number, hyphen or alphanumeric character
            </p>
          </label>

          <div className="flex space-x-4">
            <button
              className={`bg-black shadow-slate-600 shadow text-white py-1 px-3 hover:scale-105 focus:scale-95 text rounded-xl  
              transition-colors duration-500 ease-in-out focus:translate-y-1
                `}
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
