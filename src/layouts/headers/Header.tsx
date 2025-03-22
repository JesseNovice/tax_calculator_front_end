"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ethers } from "ethers";

import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import UseSticky from "@/component/hooks/UseSticky";

import logo_1 from "@/assets/img/logo/logo-2.svg";
import logo_4 from "@/assets/img/logo/testlogo.png"
import flag_1 from "@/assets/img/icon/chn_flag.png"
import flag_2 from "@/assets/img/icon/rsa_flag.png"
import flag_3 from "@/assets/img/icon/in_flag.png"

const Header = () => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string>("");

    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                const address = accounts[0];
                setWalletAddress(address);
            } catch (err) {
                console.error("User denied wallet connection", err);
            }
        } else {
            alert("Please install MetaMask to connect your wallet.");
        }
    };

    const getShortAddress = (addr: string) => {
        return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
    };

    return (
        <>
            <header className="site-header header--transparent blockchain-header" id="header">
                <div id="sticky-header" className={`header__main-wrap stricky ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container-fluid">
                        <div className="header__main ul_li_between">
                            <div className="header__left ul_li">
                                <div className="header__logo w-12 h-12">
                                    <Link href="/"><Image src={logo_1} width={200} height={200} alt="test" /></Link>
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
                                    {walletAddress ? (
                                        <span className="blc-btn"><i className="fas fa-wallet"></i>{getShortAddress(walletAddress)}</span>
                                    ) : (
                                        <button className="blc-btn" onClick={connectWallet}>
                                            <span><i className="fas fa-wallet"></i>Connect Wallet</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isActive={isActive} setIsActive={setIsActive} Sidebar="slide-bar-blockchain" />
        </>
    );
};

export default Header;
