import Image from "next/image"
import Link from "next/link"

import chart_1 from "@/assets/img/token/token_chart.png"
import chart_2 from "@/assets/img/token/token_chart2.png"

const Token = () => {
  return (
   <section className="token pt-125">
   <div className="container">
       <div className="row align-items-center mt-none-30">
           <div className="col-lg-5 mt-30">
               <div className="token__content wow fadeInLeft">
                   <div className="sec-title mb-20">
                       <h5 className="sec-title__subtitle">Tokenomics</h5>
                       <h2 className="sec-title__title">Token allocation & funds distribution</h2>
                   </div>
                   <ul className="nav nav-tabs token__tab" id="myTab" role="tablist">
                       <li className="nav-item" role="presentation">
                           <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                               data-bs-target="#home" type="button" role="tab" aria-controls="home"
                               aria-selected="true">Funding Allocation</button>
                       </li>
                       <li className="nav-item" role="presentation">
                           <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                               data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                               aria-selected="false">Token Allocation</button>
                       </li>
                    </ul>
                    <div className="token__info mt-40">
                       <h2>1 CNL = 0.0013 BTC</h2>
                       <p>A portion of the total token supply is often allocated as reserved <br/> tokens.
                           These tokens are set aside for the development </p>
                       <div className="token-btn mt-40">
                           <Link className="thm-btn" href="#!">buy now</Link>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-lg-7 mt-30">
               <div className="tab-content wow fadeInRight" data-wow-delay="100ms" id="myTabContent">
                   <div className="tab-pane fade show active" id="home" role="tabpanel"
                       aria-labelledby="home-tab">
                       <div className="token__img">
                           <Image src={chart_1} alt=""/>
                       </div>
                   </div>
                   <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                       <div className="token__img">
                           <Image src={chart_2} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
  )
}

export default Token
