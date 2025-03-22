import Image, { StaticImageData } from "next/image";

import service_1 from "@/assets/img/icon/srv_01.svg";
import service_2 from "@/assets/img/icon/srv_02.svg";
import service_3 from "@/assets/img/icon/srv_03.svg";
import service_4 from "@/assets/img/icon/srv_04.svg";
import service_5 from "@/assets/img/icon/srv_05.svg";
import service_6 from "@/assets/img/icon/srv_06.svg";

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
}[];

const service_data: DataType[] = [
   {
      id: 1,
      icon: service_1,
      title: "Instant Payout"
   },
   {
      id: 2,
      icon: service_2,
      title: "Internal Integration"
   },
   {
      id: 3,
      icon: service_3,
      title: "Granted Security"
   },
   {
      id: 4,
      icon: service_4,
      title: "Multiple Cryptocurrencies"
   },
   {
      id: 5,
      icon: service_5,
      title: "Data Protection"
   },
   {
      id: 6,
      icon: service_6,
      title: "Expert Support Team"
   },
];
const Services = () => {
   return (
      <section id="services" className="service pt-130 pt-xs-80 pb-130 pb-xs-80">
         <div className="container">
            <h2 className="btc-title border-left mb-65">Services</h2>
            <div className="row mt-none-30">
               {service_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mt-30">
                     <div className="service__single">
                        <div className="icon mb-25">
                           <Image src={item.icon} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Services
