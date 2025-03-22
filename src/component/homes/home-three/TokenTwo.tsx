import Image from "next/image"

import shape_1 from "@/assets/img/shape/ti_shape.png"
import shape_2 from "@/assets/img/shape/ti_shape2.png"
import img_1 from "@/assets/img/token/t_info_img.png"

const TokenTwo = () => {
   return (
      <section className="token-info pos-rel pt-200 pb-20">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 offset-xl-4">
                  <div className="token-info__title sec-title mb-95 text-center text-xl-start">
                     <h5 className="sec-title__subtitle">ICO coindox Token</h5>
                     <h2 className="sec-title__title">ICO Tokens <br /> Details and Sale</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4">
                  <div className="token-info__img">
                     <Image src={img_1} alt="" />
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="token-info--info-wrap ul_li">
                     <ul className="token-info__list token-info--start">
                        <li>
                           <h4>Start</h4>
                           <span>June 8, 2023 (9:00AM GMT)</span>
                        </li>
                        <li>
                           <h4>Number of Tokens for Sale</h4>
                           <span>1.000.000 Tokens</span>
                        </li>
                        <li>
                           <h4>Minimal Transaction</h4>
                           <span>10 Tokens / Transaction</span>
                        </li>
                     </ul>
                     <ul className="token-info__list token-info--end">
                        <li>
                           <h4>End</h4>
                           <span>June 8, 2024 (9:00AM GMT)</span>
                        </li>
                        <li>
                           <h4>Tokens exchange rate</h4>
                           <span>1 ETH = 650 ICC, 1 BTC = 1940 ICC</span>
                        </li>
                        <li>
                           <h4>Acceptable currencies</h4>
                           <span>ETH, BTC, LTC</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="token-info__shape">
            <div className="shape shape--1">
               <Image src={shape_1} alt="" />
            </div>
            <div className="shape shape--2">
               <Image src={shape_2} alt="" />
            </div>
         </div>
      </section>
   )
}

export default TokenTwo
