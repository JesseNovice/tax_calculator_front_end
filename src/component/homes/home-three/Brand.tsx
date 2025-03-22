import Image, { StaticImageData } from "next/image"
import Marquee from "react-fast-marquee";

import brand_1 from "@/assets/img/brand/img_01.png"
import brand_2 from "@/assets/img/brand/img_02.png"
import brand_3 from "@/assets/img/brand/img_03.png"
import brand_4 from "@/assets/img/brand/img_04.png"
import brand_5 from "@/assets/img/brand/img_05.png"
import brand_6 from "@/assets/img/brand/img_06.png"
import brand_7 from "@/assets/img/brand/img_07.png"
import brand_8 from "@/assets/img/brand/img_08.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8]

const Brand = () => {
   return (
      <section className="brand pb-150">
         <div className="container">
            <div className="sec-title text-center mb-65">
               <h5 className="sec-title__subtitle">trusted by 10,0000+ teams</h5>
            </div>
         </div>
         <Marquee className="brand__marquee">
            {brand_data.map((item, i) => (
               <div key={i} className="brand__item">
                  <Image src={item} alt="" />
               </div>
            ))}
         </Marquee>
      </section>
   )
}

export default Brand
