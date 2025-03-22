import HomeContact from "@/component/forms/HomeContact"
import Image from "next/image"

import shape_1 from "@/assets/img/shape/f_shape1.png"
import shape_2 from "@/assets/img/shape/f_shape2.png"
import shape_3 from "@/assets/img/shape/f_shape3.png"
import shape_4 from "@/assets/img/shape/c_shape1.png"
import shape_5 from "@/assets/img/shape/c_shape2.png"

const ContactForm = () => {
   return (
      <section className="ico-contact pos-rel">
         <div className="container">
            <div className="ico-contact__wrap">
               <h2 className="title">Contact with coindox</h2>
               <HomeContact />
               <div className="ico-contact__shape-img">
                  <div className="shape shape--1">
                     <div data-parallax='{"y" : -50}'>
                        <Image src={shape_4} alt="" />
                     </div>
                  </div>
                  <div className="shape shape--2">
                     <div data-parallax='{"y" : 60}'>
                        <Image src={shape_5} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ico-contact__shape">
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
      </section>
   )
}

export default ContactForm
