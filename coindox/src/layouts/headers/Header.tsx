"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import UseSticky from "@/component/hooks/UseSticky";

import logo_1 from "@/assets/img/logo/logo-2.svg";
import flag_1 from "@/assets/img/icon/chn_flag.png"
import flag_2 from "@/assets/img/icon/rsa_flag.png"
import flag_3 from "@/assets/img/icon/in_flag.png"

const Header = () => {

    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <header className="site-header header--transparent blockchain-header" id="header">
                <div id="sticky-header" className={`header__main-wrap stricky ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container-fluid">
                        <div className="header__main ul_li_between">
                            <div className="header__left ul_li">
                                <div className="header__logo">
                                    <Link href="/"><Image src={logo_1} alt="" /></Link>
                                </div>
                            </div>
                            <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                                <nav className="main-menu collapse navbar-collapse">
                                    <NavMenu />
                                </nav>
                            </div>

                            <div className="header__action ul_li">
                                <div className="d-lg-none">
                                    <a onClick={() => setIsActive(true)} className="header__bar hamburger_menu" style={{ cursor: "pointer" }}>
                                        <div className="header__bar-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="header__language blockchain-header__language">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="globe">
                                                <i className="far fa-globe"></i>
                                            </span>
                                            EN <i className="down-arrow fas fa-chevron-down"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <a className="dropdown-item" href="/"><Image src={flag_1} alt="" />CH</a>
                                            <a className="dropdown-item" href="/"><Image src={flag_2} alt="" />RU</a>
                                            <a className="dropdown-item" href="/"><Image src={flag_3} alt="" />IN</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blockchain-header__account">
                                    <Link className="blc-btn" href="/login"><span><i className="fas fa-user"></i>LOGIN</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isActive={isActive} setIsActive={setIsActive} Sidebar="slide-bar-blockchain" />
        </>
    );
}

export default Header;
