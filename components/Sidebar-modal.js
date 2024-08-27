import { useState } from "react";

const Authencaticated = (user) => {
  return (
    <div className="border-b">
      <h1 className="text-2xl">@dANNY</h1>
      <p className="text-[15px] text-slate-500">amos@gmail.com</p>
    </div>
  );
};

export default function SidebarModal({ offmodal }) {
  const [isAuthenticated] = useState(false);
  return (
    <>
      <div
        onClick={() => offmodal(false)}
        className={`fixed h-[100vh] z-[10] backdrop-blur-sm w-full top-0 bg-[rgba(0,0,0,0.8)] `}
      ></div>
      <div className="fixed text-center space-y-[4%] py-[5%] text-2xl bg-white z-[20] top-0 w-[75%] md:w-[40%] h-full ">
        {isAuthenticated ? (
          <Authencaticated />
        ) : (
          <article className="border-b py-3 px-[10%] *:list-none space-y-4">
            <li>Login</li>
          </article>
        )}
        {isAuthenticated && (
          <article className="space-y-[4%]">
            <p>Your Orders</p>
            <p>Profile Setting</p>
          </article>
        )}
        <p>About Us </p>
        <p>Help </p>
        {isAuthenticated && (
          <button className="bg-black py-2 rounded-full text-white block w-3/5 m-auto">
            Logout
          </button>
        )}
      </div>
      <button
        onClick={offmodal}
        className="absolute left-[80%] md:left-[45%] text-3xl font-sans text-slate-200  top-10  z-[30]"
      >
        x
      </button>
    </>
  );
}
