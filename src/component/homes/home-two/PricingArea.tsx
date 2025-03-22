import Link from "next/link";

interface DataType {
   id: number,
   contract: string;
   title: string;
   expiry: string;
   price: string;
   active?: string;
}[];

const pricing_data: DataType[] = [
   {
      id: 1,
      contract: "G20",
      title: "Bitcoin",
      expiry: "01 Year",
      price: "$4.20 Per 10 GH/s",
      active: "active",
   },
   {
      id: 2,
      contract: "!40",
      title: "Ethereum",
      expiry: "01 Year",
      price: "$4.20 Per 10 GH/s",
   },
   {
      id: 3,
      contract: "A40",
      title: "Litecoin",
      expiry: "01 Year",
      price: "$4.20 Per 10 GH/s",
   },
]

const PricingArea = () => {
   return (
      <section id="pricing" className="pricing pt-125 pt-xs-80">
         <div className="container">
            <div className="row align-items-center mb-40">
               <div className="col-lg-8 col-md-5">
                  <h2 className="btc-title border-left mb-20">Product</h2>
               </div>
               <div className="col-lg-4 col-md-7">
                  <p className="border-left btc-title__text mb-20">We are on a mission to empower innovation <br /> and revolutionize</p>
               </div>
            </div>
            <div className="row justify-content-center mt-none-30">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mt-30">
                     <div className={`pricing__single ${item.active ? "active" : ""}`}>
                        <div className="pricing__head mb-70">
                           <span>Contract <strong>{item.contract}</strong></span>
                           <h2>{item.title}</h2>
                        </div>
                        <div className="pricing__date">
                           <span>Expiry</span>
                           <h4>{item.expiry}</h4>
                        </div>
                        <div className="pricing__price mb-70">
                           <span>Min. Price</span>
                           <h4>{item.price}</h4>
                        </div>
                        <Link className="btc-btn w-100" href="#!">Start Mining<i className="far fa-chevron-right"></i></Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default PricingArea
