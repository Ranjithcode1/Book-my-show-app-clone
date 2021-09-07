import React from "react";
import { BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";

function NavSm() {
  return <>sm</>;
}

function NavMd() {
  return <>md</>;
}
function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-100 h-10">
            <img src="2011021.webp" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none "
              placeholder="Search for Movies, Events.."
            />
          </div>
        </div>
        <div className=" flex items-center gap-3 ">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Chennai NCR <BiChevronDown />
          </span>
          <button className='bg-red-600 text-white px-2 py-2 text-sm rounded'>
              Sign In
          </button>
          <div className='w-8 h-8 text-white' >
              <BiMenu className='w-full h-full'/>
          </div>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <nav className="bg-Darkknight-700 px-4 py-3">
        <div className="md:hidden">
          {/* mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* medium/tab based */}
          <NavMd />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large Screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
