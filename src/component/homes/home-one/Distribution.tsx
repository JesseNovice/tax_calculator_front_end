import Image from "next/image"

import img_1 from "@/assets/img/icon/bitcoin_icon.png"
import img_2 from "@/assets/img/token/token-distribution.png"

const Distribution = () => {
   return (
      <section className="token-distribution p-relative z-index-1">
         <div className="container">
            <div className="row align-items-center mt-none-30">
               <div className="col-xl-5 col-lg-6 mt-30">
                  <div className="token-distribution__content pos-rel wow fadeInLeft">
                     <div className="token-distribution__bg"></div>
                     <div className="icon mb-45">
                        <Image src={img_1} alt="" />
                     </div>
                     <div className="sec-title style2 mb-45">
                        <h2 className="sec-title__title text-50 mb-25">Token Distribution</h2>
                        <p className="text-20 text-white mb-55">Token distribution refers to the process of allocating and distributing tokens within a blockchain ecosystem.</p>
                        <p>When a new blockchain project is launched, a specific number of tokens are created, and these tokens are distributed among various stakeholders, including founders.</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-6 mt-30">
                  <div className="token-distribution__img text-lg-end wow fadeInRight" data-wow-delay="100ms">
                     <Image src={img_2} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Distribution
