import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/img/icon/sc.svg"

const Hero = () => {
   return (
      <section className="hero hero__blockchain pos-rel bg_img" style={{ backgroundImage: `url(assets/img/bg/blockchain_hero_bg.png)` }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-7">
                  <div className="blockchain-hero__content">
                     <h1 className="title text-80 mb-35 -tracking-2/4">Creating Manageable and Automated Tax calculations and withdrawls <br /></h1>

                     <p className="mb-50 text-20 leading-30">Accountant? Tax Adviser? Lawyer?<br /> CoinClear.</p>
                     <div className="btns">
                        <Link className="blc-btn" href="#!">get started</Link>
                        <Link className="blc-btn blc-btn--white" href="#!">white paper</Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="hero__blockchain-icon pos-rel">
                     <div className="icon ul_li icon--1 absolute">
                        <span className="text-white mr-5">Secure & Safe</span>
                        <Image src={icon_1} alt="" />
                     </div>
                     <div className="icon ul_li icon--2 absolute">
                        <span className="text-white mr-5">Tested</span>
                        <Image src={icon_1} alt="" />
                     </div>
                     <div className="icon ul_li icon--3 absolute">
                        <span className="text-white mr-5">Trustworthy</span>
                        <Image src={icon_1} alt="" />
                     </div>
                     <div className="icon ul_li icon--4 absolute">
                        <Image src={icon_1} alt="" />
                        <span className="text-white ml-5">Optimized</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
