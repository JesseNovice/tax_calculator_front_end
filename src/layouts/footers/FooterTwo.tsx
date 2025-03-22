import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo-3.svg"

const FooterTwo = () => {
   return (
      <footer className="site-footer footer__btc pt-100">
         <div className="container">
            <div className="row mt-none-30 pb-100">
               <div className="col-lg-4 col-md-6 mt-30">
                  <div className="footer__btc-about pl-40">
                     <Link href="/" className="footer__logo">
                        <Image src={logo} alt="" />
                     </Link>
                     <div className="footer__btc-social mt-110">
                        <span>Social Proof</span>
                        <ul className="footer__social ul_li">
                           <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                           <li><Link href="#!"><i className="fab fa-linkedin-in"></i></Link></li>
                           <li><Link href="#!"><i className="fab fa-telegram-plane"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mt-30">
                  <div className="footer__widget-btc">
                     <h3>Useful Link</h3>
                     <ul className="footer__btc-links list-unstyled">
                        <li><Link href="#!">Product</Link></li>
                        <li><Link href="#!">Features</Link></li>
                        <li><Link href="#!">Customers services</Link></li>
                        <li><Link href="#!">Social Media</Link></li>
                        <li><Link href="#!">Contact</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mt-30">
                  <div className="footer__widget-btc">
                     <h3>Any Question?</h3>
                     <ul className="footer__btc-links list-unstyled">
                        <li><Link href="#!">What is Bitcoin ?</Link></li>
                        <li><Link href="#!">What is manning ?</Link></li>
                        <li><Link href="#!">How it works ?</Link></li>
                        <li><Link href="#!">Who we are ?</Link></li>
                        <li><Link href="#!">How Coindox work ?</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer__copyright-btc ul_li_between">
               <div className="copyright-text mt-15">
                  Copyright © 2024 Coindox. All rights reserved.
               </div>
               <div className="footer-text mt-15">
                  Developed  by XpressBuddy
               </div>

            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
