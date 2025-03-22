import Image from "next/image"

import img_1 from "@/assets/img/about/about_img.png"
import img_2 from "@/assets/img/shape/about_shape.png"
import img_3 from "@/assets/img/shape/s_shape2.png"
import icon_1 from "@/assets/img/icon/a_arrow.svg"

const About = () => {
   return (
      <section id="about" className="about pos-rel pb-140 pt-100">
         <div className="container">
            <div className="row align-items-center mt-none-30">
               <div className="col-lg-6 mt-30">
                  <div className="about__img pos-rel wow fadeInLeft">
                     <Image src={img_1} alt="" />
                     <div className="about__shape">
                        <Image src={img_2} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 mt-30">
                  <div className="about__content wow fadeInRight" data-wow-delay="100ms">
                     <div className="sec-title mb-35">
                        <h5 className="sec-title__subtitle">WHAT IS ICO CRYPTO</h5>
                        <h2 className="sec-title__title mb-25">Invest in our popular ICO and become part of the future of digital finance.</h2>
                        <p>In an ICO, a project or startup issues a new digital token, typically based on a blockchain platform such as Ethereum. These tokens serve a specific purpose within the project&apos;s ecosystem, such as accessing services</p>
                     </div>
                     <ul className="about__list ul_li">
                        <li><Image src={icon_1} alt="" />Decentralized Platform</li>
                        <li><Image src={icon_1} alt="" />Rewards Meachanism</li>
                        <li><Image src={icon_1} alt="" />Crowd Wisdom</li>
                        <li><Image src={icon_1} alt="" />Investor Protection</li>
                        <li><Image src={icon_1} alt="" />Token Sale Phases</li>
                        <li><Image src={icon_1} alt="" />Exchange Listing</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="about__sec-shape">
            <Image src={img_3} alt="" />
         </div>
      </section>
   )
}

export default About
