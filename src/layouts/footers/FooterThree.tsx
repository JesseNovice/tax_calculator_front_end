"use client"
import Image from "next/image"
import Link from "next/link"

import pdf from "@/assets/img/icon/pdf.svg"
import logo from "@/assets/img/logo/logo.svg"
import shape_1 from "@/assets/img/shape/f_icon1.png"
import shape_2 from "@/assets/img/shape/f_icon2.png"

const FooterThree = () => {
   return (
      <footer className="site-footer footer__ico pos-rel" style={{backgroundImage:`url(/assets/img/bg/footer_bg.png)`}}>
         <div className="container">
            <div className="row mt-none-30">
               <div className="col-lg-4 mt-30">
                  <div className="footer__widget footer__subscribe">
                     <h2>Subscribe newsletter</h2>
                     <p>Pre-ICOs typically offer early access to the <br /> project&apos;s tokens before the main ICO.
                     </p>
                     <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="coindox@gmail.com" />
                        <button><i className="fas fa-paper-plane"></i></button>
                     </form>
                  </div>
               </div>
               <div className="col-lg-8 mt-30">
                  <div className="footer__widget text-lg-end">
                     <h2>Download Documents</h2>
                     <div className="footer__document ul_li_right">
                        <Link href="#!" className="footer__document-item text-center">
                           <div className="icon">
                              <Image src={pdf} alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>white paper</span>
                        </Link>
                        <Link href="#!" className="footer__document-item text-center">
                           <div className="icon">
                              <Image src={pdf} alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>one paper</span>
                        </Link>
                        <Link href="#!" className="footer__document-item text-center">
                           <div className="icon">
                              <Image src={pdf} alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>privacy policy</span>
                        </Link>
                        <Link href="#!" className="footer__document-item text-center">
                           <div className="icon">
                              <Image src={pdf} alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>terms of sale</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom ul_li_between mt-50">
               <div className="footer__logo mt-20">
                  <Link href="/"><Image src={logo} alt="" /></Link>
               </div>
               <ul className="footer__social ul_li mt-20">
                  <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link href="#!"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link href="#!"><i className="fab fa-telegram-plane"></i></Link></li>
               </ul>
            </div>
         </div>
         <div className="footer__copyright mt-35">
            <div className="container">
               <div className="footer__copyright-inner ul_li_between">
                  <div className="footer__copyright-text mt-15">
                     Copyright © 2024 coindox. All rights reserved.
                  </div>
                  <ul className="footer__links ul_li_right mt-15">
                     <li><Link href="#!">Privacy</Link></li>
                     <li><Link href="#!">Cookies</Link></li>
                     <li><Link href="#!">Terms</Link></li>
                     <li><Link href="#!">About</Link></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer__icon-shape">
            <div className="icon icon--1">
               <div data-parallax='{"x" : -80}'>
                  <Image src={shape_1} alt="" />
               </div>
            </div>
            <div className="icon icon--2">
               <div data-parallax='{"x" : 80}'>
                  <Image src={shape_2} alt="" />
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterThree
