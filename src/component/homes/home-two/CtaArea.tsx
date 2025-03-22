import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/img/bg/cta_bg1.png"
import shape_2 from "@/assets/img/bg/cta_bg2.png"

const CtaArea = () => {
   return (
      <section className="btc-cta pb-130 pb-xs-80">
         <div className="container">
            <div className="btc-cta__holder z-1 pos-rel text-center">
               <h2>Ready To Start Your Mining</h2>
               <p>Just create an account on our site and start your first mining.</p>
               <Link className="btc-btn" href="#!">Start Mininnig Now<i className="far fa-chevron-right"></i></Link>
               <div className="btc-cta__img">
                  <div className="cta-shape cta-shape--1">
                     <Image src={shape_1} alt="" />
                  </div>
                  <div className="cta-shape cta-shape--2">
                     <Image src={shape_2} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CtaArea
