/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const SortbyDateDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Sort by Date");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dropdown w-[273px] h-[204px] left-[685px] top-0 absolute">
      <div className="w-[170px] h-[43px] left-0 top-[33px] absolute">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost rounded border border-black"
        >
          {selectedOption}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-white rounded-md w-52 font-normal font-Prompt mt-2"
        >
          <li>
            <a
              href="#"
              onClick={() => handleOptionClick("Status")}
              className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
            >
              Status
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortbyDateDropdown;
