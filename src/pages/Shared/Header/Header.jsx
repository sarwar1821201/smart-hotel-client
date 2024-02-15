import React from "react";
import Container from "../Container";
import logoImg from "../../../../public/favicon.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">

           <Link to='/' >
           <div className="flex items-center text-red-700 ">    
              <img className="hidden md:block" src={logoImg} alt="" width="30" height="30" /> AirCnc
            </div>
           </Link>

            <div>  <Search></Search>   </div>

            <div>  <MenuDropdown></MenuDropdown> </div>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
