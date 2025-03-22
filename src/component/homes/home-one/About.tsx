import Image from "next/image"

import shape_1 from "@/assets/img/about/about_shape1.png";
import shape_2 from "@/assets/img/about/about_shape2.png";
import shape_3 from "@/assets/img/about/about_shape3.png";
import icon_1 from "@/assets/img/icon/syber_icon.svg";
import icon_2 from "@/assets/img/icon/ul_icon.svg"

const list_data: string[] = ["Privacy and Security", "Cost and Complexity", "Immutable Data", "Regulatory Compliance", "Interoperability", "Energy Consumption"];

const About = () => {
   return (
      <section className="blc-about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="z-index-1 blc-about__img pos-rel text-center  wow fadeInLeft">
                     <Image src={shape_1} alt="" />
                     <div className="shape shape--1">
                        <div data-parallax='{"y" : 60}'>
                           <Image src={shape_2} alt="" />
                        </div>
                     </div>
                     <div className="shape shape--2">
                        <div data-parallax='{"y" : -60}'>
                           <Image src={shape_3} alt="" />
                        </div>
                     </div>
                     <div className="icon">
                        <Image src={icon_1} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="blc-about__content wow fadeInRight" data-wow-delay="100ms">
                     <div className="sec-title style2 mb-40">
                        <h2 className="sec-title__title text-50 mb-25">Blockchain Addressing <br /> Industry Pain Points</h2>
                        <p>Blockchain technology has brought significant advancements to <br /> various industries. Here are some common pain points faced by <br /> industries when it comes to blockchain addressing.</p>
                     </div>
                     <ul className="blc-about__list ul_li mt-none-20">
                        {list_data.map((list, i) => (
                           <li key={i}><Image src={icon_2} alt="" />{list}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
