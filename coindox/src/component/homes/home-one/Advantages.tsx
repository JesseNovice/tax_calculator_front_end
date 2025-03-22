import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/img/icon/badge_active.svg";
import icon_2 from "@/assets/img/icon/badge_deactive.svg";

interface DataType {
   id: number;
   title: string;
   icon: StaticImageData[];
}[];

const advantage_data: DataType[] = [
   {
      id: 1,
      title: "coindox",
      icon: [icon_1, icon_2, icon_1, icon_2],
   },
   {
      id: 2,
      title: "Civic",
      icon: [icon_1, icon_2, icon_1, icon_2],
   },
   {
      id: 3,
      title: "Vilid.global",
      icon: [icon_1, icon_2, icon_1, icon_2],
   },
   {
      id: 4,
      title: "Hypr",
      icon: [icon_1, icon_1, icon_2, icon_1],
   },
]

const Advantages = () => {
   return (
      <section id="feature" className="advantages advantages-bg pb-120 pt-100" style={{ backgroundImage: `url(/assets/img/bg/advantages_bg.png)` }}>
         <div className="container">
            <div className="sec-title style2 text-center mb-60">
               <h2 className="sec-title__title text-50 mb-25">Comparison With Competitors and <br /> Our Advantages</h2>
               <p>Analyzing competitors showcases our standout advantages</p>
            </div>
            <table className="advantages-table table-responsive">
               <thead>
                  <tr>
                     <th>Futures</th>
                     <th>IDV System</th>
                     <th>Creating Apps</th>
                     <th>Confidentiality</th>
                     <th>Without Gadget</th>
                  </tr>
               </thead>
               <tbody>
                  {advantage_data.map((item) => (
                     <tr key={item.id}>
                        <td>{item.title}</td>
                        {item.icon.map((icon, i) => (
                           <td key={i}><Image src={icon} alt="" /></td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>
   )
}

export default Advantages
