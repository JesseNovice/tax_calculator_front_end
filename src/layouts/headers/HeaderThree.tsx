"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavMenuThree from "./Menu/NavMenuThree";
import Sidebar from "./Menu/Sidebar";
import UseSticky from "@/component/hooks/UseSticky";

import logo_1 from "@/assets/img/logo/logo.svg";
import flag_1 from "@/assets/img/icon/chn_flag.png"
import flag_2 from "@/assets/img/icon/rsa_flag.png"
import flag_3 from "@/assets/img/icon/in_flag.png"
import flag_4 from "@/assets/img/icon/us_flag.png"

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header className="site-header header--transparent ico-header">
            <div className={`header__main-wrap stricky  ${sticky ? "sticky-menu" : ""}`}>
               <div className="container mxw_1640">
                  <div className="header__main ul_li_between">
                     <div className="header__left ul_li">
                        <div className="header__logo">
                           <Link href="/"><Image src={logo_1} width={200} height={200} alt="" /></Link>
                        </div>
                     </div>
                     <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                        <nav className="main-menu collapse navbar-collapse">
                           <NavMenuThree />
                        </nav>
                     </div>
                     <div className="header__action ul_li">
                        <div className="d-xl-none">
                           <a onClick={() => setIsActive(true)} className="header__bar hamburger_menu" style={{ cursor: "pointer" }}>
                              <div className="header__bar-icon">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </div>
                           </a>
                        </div>
                        <div className="header__language">
                           <div className="dropdown">
                              <button className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <Image src={flag_4} alt="" />ENGLISH <i
                                    className="fas fa-chevron-down"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                 <Link className="dropdown-item" href="/"><Image src={flag_1} alt="" />China</Link>
                                 <Link className="dropdown-item" href="/"><Image src={flag_2} alt="" />Russia</Link>
                                 <Link className="dropdown-item" href="/"><Image src={flag_3} alt="" />India</Link>
                              </div>
                           </div>
                        </div>
                        <div className="header__account">
                           <Link href="/login"><i className="fas fa-user"></i>LOGIN</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar isActive={isActive} setIsActive={setIsActive} style_2={true} />
      </>
   )
}

export default HeaderThree
