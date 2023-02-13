import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white max-w-full mx-auto shadow-sm">
        <div className="flex space-x-7">
          <div className="px-5 xl:px-12 flex w-full items-center">
            <div className="py-4 px-10">
              <a href="#">
                <img src="/src/assets/LOGO HAN STORE.png" alt="" className="h-14 w-14" />
              </a>
            </div>
            <ul className="flex m-auto justify-center gap-7 font-semibold decoration-[#272343]">
              <li className="relative">
                <a href="#" className="hover-underline">
                  Home
                </a>
              </li>
              <li className="relative">
                <a href="#" className="hover-underline">
                  Shop
                </a>
              </li>
              <li className="relative">
                <a href="#" className="hover-underline">
                  Contact
                </a>
              </li>
              <li className="relative">
                <a href="#" className="hover-underline">
                  About
                </a>
              </li>
            </ul>

            {/* button chart */}
            <div className="px-10">
              <ul className="flex gap-3">
                <li className="md:hidden">
                  <a href="">
                    <span className="material-symbols-outlined">person</span>
                  </a>
                </li>
                <li className="flex">
                  <a href="">
                    <span class="material-symbols-outlined">shopping_cart</span>
                  </a>
                  <p className="font-light opacity-50">(0)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
