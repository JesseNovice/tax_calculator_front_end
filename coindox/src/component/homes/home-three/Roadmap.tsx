import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/rm_01.svg"
import icon_2 from "@/assets/img/icon/rm_02.svg"
import icon_3 from "@/assets/img/icon/rm_03.svg"
import icon_4 from "@/assets/img/icon/rm_04.svg"

import shape_1 from "@/assets/img/shape/s_shape1.png"
import shape_2 from "@/assets/img/shape/s_shape2.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   list: JSX.Element[];
   year: number;
}[];

const roadmap_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Project Plan",
      list: [(<>Website Design</>), (<>Website Live</>), (<>Smart Contract</>), (<>Deployment</>),],
      year: 2022,
   },
   {
      id: 2,
      icon: icon_2,
      title: "Presale",
      list: [(<>Contract Testing</>), (<>Project Prototype</>), (<>Metaverse Demo</>), (<>(Alpha)</>)],
      year: 2023,
   },
   {
      id: 3,
      icon: icon_3,
      title: "Pre-Listing",
      list: [(<>Partnerships</>), (<>Marketing to reach <br /> wider Audiences</>), (<>Metaverse <br /> Development</>)],
      year: 2024,
   },
   {
      id: 4,
      icon: icon_4,
      title: "Token Launch",
      list: [(<>NFT MarketPlace</>), (<>NFT Launch</>), (<>Exchanges Listing</>), (<>Dex Listing</>)],
      year: 2025,
   },
   {
      id: 5,
      icon: icon_1,
      title: "Alpha Test",
      list: [(<>In-house testing <br /> of functional</>), (<>App development</>), (<>Further <br /> Development</>)],
      year: 2026,
   },
];

const Roadmap = () => {
   return (
      <section id="roadmap" className="roadmap pt-lg-80 pb-md-100 pt-145 pos-rel pb-200">
         <div className="container">
            <div className="sec-title text-center mb-60">
               <h5 className="sec-title__subtitle">Road map</h5>
               <h2 className="sec-title__title">Our project plan</h2>
            </div>
            <div className="roadmap__wrap ul_li_between">
               {roadmap_data.map((item) => (
                  <div key={item.id} className="roadmap__item">
                     <div className="roadmap__head ul_li">
                        <div className="icon">
                           <Image src={item.icon} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                     </div>
                     <ul className="roadmap__info list-unstyled">
                        {item.list.map((listItem, i) => (
                           <li key={i}>{listItem}</li>
                        ))}
                     </ul>
                     <span className="number">Q{item.id} <br />{item.year}</span>
                  </div>
               ))}
            </div>
         </div>

         <div className="roadmap__sec-shape">
            <div className="shape shape--1">
               <Image src={shape_1} alt="" />
            </div>
            <div className="shape shape--2">
               <Image src={shape_2} alt="" />
            </div>
         </div>
      </section>
   )
}

export default Roadmap
