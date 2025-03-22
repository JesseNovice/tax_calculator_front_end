import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import brand_1 from "@/assets/img/brand/br_01.png"
import brand_2 from "@/assets/img/brand/br_02.png"
import brand_3 from "@/assets/img/brand/br_03.png"
import brand_4 from "@/assets/img/brand/br_04.png"
import brand_5 from "@/assets/img/brand/br_05.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5];

const Brand = () => {
   return (
      <section className="brand pt-10">
         <div className="container">
            <div className="row align-items-center justify-content-center mt-none-30">
               <div className="col-lg-4">
                  <div className="brand__title border-left mt-30">
                     <h3>Our top Integration</h3>
                     <p>Cloud mining is the easiest and most </p>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="brand__logo-wrap ul_li_between">
                     {brand_data.map((item, i) => (
                        <Link key={i} className="brand__logo-item" href="#!">
                           <Image src={item} alt="" />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Brand
