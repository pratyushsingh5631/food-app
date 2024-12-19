import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "./useOnlineStatus";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default function NavbarComponent() {
  const [buttonName, setButtonName] = useState("Log In");
  const [open, setOpen] = useState(false);
  const onlineStatus = useOnlineStatus(false);
  const {loggedInUser}=useContext(UserContext); 
  const cartItems=useSelector((state)=>state.cart.items)
  console.log(loggedInUser);
  return (
    <div className="flex mb-2 shadow-md w-full  justify-between items-center font-[Poppins]">
      <div className="p-2 flex mb-2 bg-white ">
        <div>
          <Link
            className="flex gap-2 items-center no-underline text-black"
            to={"/"}
          >
            <img
              className="object-cover max-w-20 max-h-20"
              src={LOGO_URL}
              alt="logo"
            />
            <span className="font-medium text-xl font-[Poppins]">
              Chef Food
            </span>
          </Link>
        </div>
      </div>

      <div>
      <ul className={`md:flex gap-4 mt-2 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 text-xl font-medium  transition-shadow duration-500 ease-in-out ${open ? 'top-[96px] ':'top-[-490px]'}`}>
        {/* <ul className={`hidden md:flex gap-8 text-xl ${open ? "top-28 " : "top-[-490px]"}`}> */}
          <li className="">Online: {onlineStatus ? "🟢" : "❌"}</li>
          <li className="">
            <Link
              className="text-black gap-2 no-underline"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black no-underline gap-4 "
              to="/About"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black no-underline  "
              to="/Contact"
            >
              Contact
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black no-underline font-semibold  "
              to="/Cart"
            >
              Cart ({cartItems.length} item) 
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black no-underline  "
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
        </ul>
      </div>
      <div>
      <button
              className="bg-indigo-600 text-white font-[Poppins] mx-2 mb-2 py-2 px-6 rounded hover:bg-indigo-400 duration-500"
              onClick={() => {
                setButtonName(buttonName === "Log In" ? "Log Out" : "Log In");
              }}
            >
              {buttonName}
            </button>
          <div  className="text-black no-underline ">Welcome {loggedInUser}</div>
      </div>

      <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer p-2 md:hidden"
        >
          {open ? <IoIosClose /> : <IoIosMenu />}
        </div>


    </div>
  );
}

//how const is updated
/* 
    whenever state changes it quickly rerenders whole Component
    here navbarComponent  (but it will only update the button name 
    it is done by react very fast using the diff algorithm and 
    reconciliation or React fiber ) and then the setButtonName is 
    called and that updates buttonName to Log out

    whenever state variable changes react triggers a reconciliation cycle(re-renders the component)
  */
