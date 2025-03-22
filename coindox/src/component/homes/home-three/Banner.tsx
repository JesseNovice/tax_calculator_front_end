import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import CountdownClock from "@/component/common/CountDownClock"

import icon_1 from "@/assets/img/icon/coin1.png"
import icon_2 from "@/assets/img/icon/coin2.png"
import icon_3 from "@/assets/img/icon/coin3.png"
import icon_4 from "@/assets/img/icon/coin4.png"
import icon_5 from "@/assets/img/icon/coin5.png"
import icon_6 from "@/assets/img/icon/coin6.png"

import shape_1 from "@/assets/img/shape/h_shape.png"
import shape_2 from "@/assets/img/shape/h_shape2.png"
import shape_3 from "@/assets/img/shape/h_shape3.png"

const Banner = () => {
   return (
      <section className="hero hero__ico pos-rel" >
         <div className="hero__bg" style={{ backgroundImage: `url(/assets/img/bg/hero_bg.png)` }}></div>
         <div className="container">
            <div className="row">
               <div className="col-lg-7">
                  <div className="hero__content">
                     <h1 className="title mb-45">Participate in the <span>Ongoing ICO Token</span> Sale </h1>
                     <div className="btns">
                        <Link className="thm-btn" href="#!">PURCHASE TOKEN</Link>
                        <Link className="thm-btn thm-btn--dark" href="#!">WHITEPAPPER</Link>
                     </div>
                     <div className="hero__progress mt-50">
                        <div className="progress-title ul_li_between"><span><span>Raised -</span> 1,450 Tokens</span> <span><span>Target -</span> 150,000 Tokens</span></div>
                        <div className="progress">
                           <div className="progress-bar" style={{ width: "75%" }}></div>
                        </div>
                        <ul className="ul_li_between">
                           <li>Pre Sell</li>
                           <li>Soft Cap</li>
                           <li>Bonus</li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="col-lg-5">
                  <div className="hero__explore-wrap text-center">
                     <div className="hero__explore text-center">
                        <div className="scroll-down"></div>
                        <span>Explore Causes</span>
                     </div>
                     <div className="hero__countdown">
                        <h6 className="text-center">ICO Will Start in..</h6>
                        <CountdownClock />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="hero__shape">
            <div className="shape shape--1">
               <Image src={shape_1} alt="" />
            </div>
            <div className="shape shape--2">
               <Image src={shape_2} alt="" />
            </div>
            <div className="shape shape--3">
               <Image src={shape_3} alt="" />
            </div>
         </div>

         <div className="hero__coin">
            <div className="coin coin--1">
               <Image src={icon_1} alt="" />
            </div>
            <div className="coin coin--2">
               <Image src={icon_2} alt="" />
            </div>
            <div className="coin coin--3">
               <Image src={icon_3} alt="" />
            </div>
            <div className="coin coin--4">
               <Image src={icon_4} alt="" />
            </div>
            <div className="coin coin--5">
               <Image src={icon_5} alt="" />
            </div>
            <div className="coin coin--6">
               <Image src={icon_6} alt="" />
            </div>
         </div>
      </section>
   )
}

export default Banner
