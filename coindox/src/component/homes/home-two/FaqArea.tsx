"use client"
import faq_data from "@/component/data/FaqData"
import faq_data_two from "@/component/data/FaqDataTwo";
import { useState } from "react";

const tab_title: string[] = ["General - Qa", "Minning", "Affiliate Program"];

const FaqArea = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <section className="faq pb-120 pb-xs-80">
         <div className="container">
            <div className="row mb-20 align-items-end">
               <div className="col-lg-6 col-md-5 mb-30">
                  <h2 className="btc-title border-left">Question</h2>
               </div>
               <div className="col-lg-6 col-md-7 mb-20">
                  <ul className="nav faq__nav ul_li_right nav-tabs" id="myTab" role="tablist">
                     {tab_title.map((tab, index) => (
                        <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                           <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="faq__btc">
               <div className="tab-content" id="myTabContent">
                  {faq_data_two.map((items, index) => (
                     <div key={items.id} className={`tab-pane animated fadeInUp show ${activeTab === index ? "active" : ""}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="accordion_box clearfix" id="accordionTwo">
                           {items.faq_data.map((item) => (
                              <div key={item.id} className={`block accordion-item`} id={`heading${item.id}`}>
                                 <button className={`acc-btn accordion-button ${item.id === 2 ? "" : "collapsed"}`} type='button'
                                    data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true"
                                    aria-controls={`collapse${item.id}`}>
                                    {item.title}
                                    <span className="arrow"><span></span></span>
                                 </button>
                                 <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 2 ? "show" : ""}`}
                                    data-bs-parent="#accordionTwo">
                                    <div className="content accordion-body">{item.desc}</div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default FaqArea
