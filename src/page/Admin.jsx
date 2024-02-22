/* eslint-disable react/no-unknown-property */
import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import FilterDropdown from "../Components/FilterDropdown";
import SortbyDateDropdown from "../Components/SortbyDateDropdown";
import OfItems from "../Components/OfItems";
import Active from "../Components/Active";
import DataSections from "../Components/dataSections";


const Admin = () => {
  return (
    <div className="">
      <div className="left-[340px] top-[111px] absolute text-cyan-900 text-[28px] font-medium font-['Prompt']">
        Users List
      </div>
      <div className="left-[343px] top-[155px] absolute text-stone-300 text-base font-normal font-['Prompt']">
        Admin Dashboard{" "}
      </div>

      {/* navbar */}
      <div className="w-[1920px] h-[65px] left-0 top-0 absolute bg-white border-b border-stone-300" />

      {/*  2*/}

      {/* แถบข้าง */}
      <div className="">
        <div className="">
          <div className="fixed top-0 left-0-0 bottom-0 w-64 p-4 bg-white shadow" />
        </div>
        <div className="w-[49px] h-[45px] left-[103px] top-[14px] absolute">
          <div className="left-0 top-0 absolute text-cyan-900 text-3xl font-bold font-['Prompt']">
            WR
          </div>
        </div>
        {/* logout */}
        <div className="left-[63px] top-[700px] absolute flex-col justify-center items-start gap-6 inline-flex">
          <div className="self-stretch pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </div>
            <button
              type=""
              className="text-red-500 text-base font-normal font-['Prompt']"
            >
              Logout
            </button>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="w-[250px] h-[50px] left-0 top-[103px] absolute">
        <div className="w-[250px] h-[50px] left-0 top-0 absolute bg-red-500 rounded-tr-[30px] rounded-br-[30px]" />
        <div className="left-[63px] top-[9px] absolute flex items-center text-white text-xl font-normal font-['Prompt']">
          {/* Icon ทางซ้ายของข้อความ */}
          <div className="w-6 h-6 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
          </div>
          {/* ข้อความ "Users List" */}
          Users List
        </div>
      </div>
     

      <div className="w-[1133px] h-[530px] left-[307px] top-[195px] absolute">
        <div className="w-[1092px] h-[527px] left-0 top-0 absolute bg-white rounded-xl" />
        {/* items */}
        <OfItems />
        {/* items */}

        {/* img Search */}
        <div className="w-8 h-8 left-[408px] top-[18px] absolute">
          <div className="w-[18px] h-[18px] left-[7.33px] top-[7.33px] absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-b"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className="w-[400px] h-6 left-[37px] top-[26px] absolute">
          <div className="w-[400px] h-[0px] left-0 top-[24px] absolute border border-stone-300"></div>
          <div className="left-0 top-0 absolute text-cyan-900 text-base font-light font-['Prompt']">
            Search Users
          </div>
        </div>
        {/* img */}

        {/* เส้นด้านล่าง */}
        <div className="w-[1000px] h-[0px] left-[44px] top-[429px] absolute border border-stone-300"></div>

        {/* menu bar */}
        <div className="w-[1007.09px] h-[299px] left-[26px] top-[91px] absolute">
          <div className="w-[1005.09px] h-12 left-0 top-[59px] absolute">
            <div className="w-[1005.09px] h-12 left-0 top-0 absolute">
              <div className="w-[1005.09px] h-12 left-0 top-0 absolute bg-neutral-100" />
            </div>
          </div>
          <div className="w-[1005.09px] h-12 left-0 top-[251px] absolute">
            <div className="w-[1005.09px] h-12 left-0 top-0 absolute">
              <div className="w-[1005.09px] h-12 left-0 top-0 absolute bg-neutral-100" />
            </div>
          </div>
          <div className="w-[1005.09px] h-12 left-0 top-[203px] absolute">
            <div className="w-[1005.09px] h-12 left-0 top-0 absolute">
              <div className="w-[1005.09px] h-12 left-0 top-0 absolute bg-white" />
            </div>
          </div>
          <div className="w-[1005.09px] h-12 left-0 top-[155px] absolute">
            <div className="w-[1005.09px] h-12 left-0 top-0 absolute">
              <div className="w-[1005.09px] h-12 left-0 top-0 absolute bg-neutral-100" />
            </div>
          </div>
          <div className="w-[1007.09px] h-12 left-0 top-[107px] absolute">
            <div className="w-[1007.09px] h-12 left-0 top-0 absolute">
              <div className="w-[1005.09px] h-12 left-[2px] top-0 absolute bg-white" />
              <div className="w-[1005.09px] h-12 left-0 top-0 absolute bg-white" />
            </div>
          </div>
          <div className="w-[1007px] h-[47px] left-0 top-0 absolute">
            <div className="w-[1007px] h-[47px] left-0 top-0 absolute bg-blue-600 rounded-lg border border-blue-600" />
          </div>
        </div>
        {/*  */}

        {/* btn active */}
        <Active />
        {/* btn active */}

        {/* Username */}
        <div className="w-[842px] h-6 left-[96px] top-[102px] absolute">
          <div className="left-0 top-0 absolute text-white text-base font-medium font-['Prompt']">
            Username
          </div>
          <div className="left-[190px] top-0 absolute text-white text-base font-medium font-['Prompt']">
            Firstname
          </div>
          <div className="left-[382px] top-0 absolute text-white text-base font-medium font-['Prompt']">
            Lastname
          </div>
          <div className="left-[556px] top-0 absolute text-white text-base font-medium font-['Prompt']">
            Email
          </div>
          <div className="left-[794px] top-0 absolute text-white text-base font-medium font-['Prompt']">
            Status
          </div>
        </div>
        {/*  */}

        {/* data User */}
          <DataSections/>
        {/*  */}

        {/* drop down */}
        <SortbyDateDropdown />
        <FilterDropdown />
      </div>
    </div>
  );
};

export default Admin;
