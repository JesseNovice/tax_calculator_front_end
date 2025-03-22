import Image from "next/image"

import thumb_1 from "@/assets/img/about/abt_01.png";
import thumb_2 from "@/assets/img/about/abt_02.png";

const About = () => {
   return (
      <section className="about">
         <div className="container">
            <div className="about__wrap pos-rel">
               <div className="row">
                  <div className="col-lg-6 offset-lg-4">
                     <div className="btc-about__content">
                        <h3 className="title">About Coindox- We Translate Your Dream Into Reality</h3>
                        <p>Welcome to Coindox Bitcoin Mining, where your dreams of entering the world of cryptocurrency mining transform into tangible reality. Our mission is simple yet powerful: to provide you with the tools, expertise,</p>
                        <p>Support needed to navigate the intricate world of Bitcoin mining and turn your aspirations into profitable outcomes.</p>
                        <div className="btc-about__img">
                           <div className="abt-img abt-img--1">
                              <Image src={thumb_1} alt="" />
                           </div>
                           <div className="abt-img abt-img--2">
                              <Image src={thumb_2} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
