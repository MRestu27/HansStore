import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-center items-center w-auto h-auto top-8 mt-5">
        <nav className="flex items-center justify-between hans-container">
          <ul className="flex items-center gap-2">
            <img src="/src/images/LOGO HAN STORE.png" alt="" className="w-30 h-12" />
            <li className="font-semibold text-xl">Hans Store</li>
          </ul>
          <ul className="flex items-center justify-between gap-7 font-light md:hidden">
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <span className="material-symbols-outlined">person</span>
            <img src="" alt="" />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;