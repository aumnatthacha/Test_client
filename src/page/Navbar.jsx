import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-50 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" className="h-8" alt="" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            w
          </span> */}
        </a>
        <div className="text-black">Admin</div>
      </div>
    </div>
  );
};

export default Navbar;
