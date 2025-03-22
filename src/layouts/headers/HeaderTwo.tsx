"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import UseSticky from "@/component/hooks/UseSticky";
import Sidebar from "./Menu/Sidebar";

import logo_1 from "@/assets/img/logo/logo-3.svg";
import user from "@/assets/img/icon/user.svg"

const HeaderTwo = () => {

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header className="site-header header--transparent btc-header">
            <div className={`header-area stricky ${sticky ? "sticky-menu" : ""}`}>
               <div className="container">
                  <div className="header-wrap ul_li_between">
                     <Link className="header__logo" href="/"><Image src={logo_1} alt="" /></Link>
                     <div className="header__action ul_li">
                        <Link className="login" href="/login"><Image src={user} alt="" />LOgin</Link>
                        <a onClick={() => setIsActive(true)} style={{ cursor: "pointer" }} className="header__bar hamburger_menu">
                           <div className="header__bar-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar isActive={isActive} setIsActive={setIsActive} style_1={true} Sidebar="slide-bar-bitcoin" />
      </>
   )
}

export default HeaderTwo
