import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/up_01.svg";
import icon_2 from "@/assets/img/icon/up_02.svg";
import middle_icon from "@/assets/img/bg/uo_bg.png";
import check from "@/assets/img/icon/check_badge.svg";

interface DataType {
   id: number;
   title: string;
   icon: StaticImageData;
   list: {
      title: string;
      desc: string;
   }[];
};

const user_option_data: DataType[] = [
   {
      id: 1,
      title: "Base Tier",
      icon: icon_1,
      list: [
         { title: "Transactions", desc: "100 Transactions per Financial Year" },
         { title: "Automation", desc: "Nice profit! We'll handle the rest." },
         { title: "Vaulting", desc: "Taxes are vaulted with the option to stake using NZDD" },
      ],
   },
   {
      id: 2,
      title: "Pro Tier",
      icon: icon_2,
      list: [
         { title: "Transactions", desc: "Unlimited Transactions, buy baby buy!" },
         { title: "Automation", desc: "Auto Swap from Native Token to NZDD" },
         { title: "Vaulting", desc: "Multiple Vaulting Options, different staking timeframes" },
      ],
   },
]
const UserOption = () => {
   return (
      <section className="user-option pb-110">
         <div className="container">
            <div className="sec-title style2 text-center mb-20">
               <h2 className="sec-title__title text-50 mb-25">Subscription Options </h2>
               <p>Convenient Subscription Model for all User Types</p>
            </div>
            <div className="row align-items-center">
               {user_option_data.slice(0, 1).map((item => (
                  <div key={item.id} className="col-lg-4">
                     <div className="user-option__item">
                        <div className="icon pos-rel ">
                           <Image src={item.icon} alt="" />
                        </div>
                        <h3 className="heading">{item.title}</h3>
                        <ul className="user-option__list list-unstyled mt-45">
                           {item.list.map((list, i) => (
                              <li key={i}>
                                 <span><Image src={check} alt="" /></span>
                                 <h4>{list.title}</h4>
                                 <p>{list.desc}</p>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               )))}
               <div className="col-lg-4">
                  <div className="user-option__img text-center">
                     <Image src={middle_icon} alt="" />
                  </div>
               </div>
               {user_option_data.slice(1, 2).map((item => (
                  <div key={item.id} className="col-lg-4">
                     <div className="user-option__item style2">
                        <div className="icon pos-rel ">
                           <Image src={item.icon} alt="" />
                        </div>
                        <h3 className="heading">{item.title}</h3>
                        <ul className="user-option__list list-unstyled mt-45">
                           {item.list.map((list, i) => (
                              <li key={i}>
                                 <span><Image src={check} alt="" /></span>
                                 <h4>{list.title}</h4>
                                 <p>{list.desc}</p>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               )))}
            </div>
         </div>
      </section>
   )
}

export default UserOption
