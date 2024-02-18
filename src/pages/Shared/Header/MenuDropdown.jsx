import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../provider/AuthProvider";

const MenuDropdown = () => {
  const { user,logout } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  // const toggleOpen = useCallback(() => {
  //     setIsOpen(value => !value)
  //   }, [])

    const handleLogOut = () => {
       console.log('logout kore ber hoye jan')
       logout()
       .then( ()=> {} )
       .catch( (error)=> {
            console.log(error.message)
       } )
    }


  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          AirCNC your home
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <img
              width="30"
              height="30"
              className="rounded-full"
              src= {user && user.photoURL ? user.photoURL : avatarImg }
              alt=""
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? ( 
             <div
                   onClick={handleLogOut}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                >
                  Logout
                </div> 
             ) : ( 
             <>
            <Link
              to="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Sign Up
            </Link>
            </> 
             )} 
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
