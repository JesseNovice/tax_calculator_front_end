import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import thumb_1 from "@/assets/img/product/prd_01.png"
import thumb_2 from "@/assets/img/product/prd_02.png"
import thumb_3 from "@/assets/img/product/prd_03.png"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   price: JSX.Element;
}[];

const product_data: DataType[] = [
   {
      id: 1,
      thumb: thumb_1,
      title: "Gamming PC",
      price: (<>$99/ <span>$79.00</span></>),
   },
   {
      id: 2,
      thumb: thumb_2,
      title: "Mining RIG",
      price: (<>$299/ <span>$189.00</span></>),
   },
   {
      id: 3,
      thumb: thumb_3,
      title: "Mining Farm",
      price: (<>$299/ <span>$199.00</span></>),
   },
];

const Product = () => {
   return (
      <section id="product" className="product pt-130 pb-130 pb-xs-80">
         <div className="container">
            <div className="row align-items-center mb-40">
               <div className="col-lg-8">
                  <h2 className="btc-title border-left mb-20">How to earn?</h2>
               </div>
               <div className="col-lg-4">
                  <p className="border-left btc-title__text mb-20">It comes down to your PC’s Processing <br/> power and luck</p>
               </div>
            </div>
            <div className="row justify-content-center mt-none-30">
               {product_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mt-30">
                     <div className="product__single">
                        <Link className="thumb" href="#!"><Image src={item.thumb} alt="" /></Link>
                        <div className="product__holder mb-45">
                           <h4>{item.price}</h4>
                           <h3>{item.title}</h3>
                        </div>
                        <Link className="btc-btn w-100" href="#!">Buy now<i className="far fa-chevron-right"></i></Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Product


