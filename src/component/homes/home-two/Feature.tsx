interface DataType {
   id: number;
   title: string;
   sub_title: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
}[];

const feature_data: DataType[] = [
   {
      id: 1,
      title: "Start build you",
      sub_title: "Career",
      desc_1: (<>As the world of cryptocurrencies continues to evolve, Bitcoin mining offers a unique opportunity to be part of the blockchain revolution while potentially reaping substantial</>),
      desc_2: (<>Cloud mining is the easiest and most efficient way to earn money from cryptocurrency</>),
   },
   {
      id: 2,
      title: "Best cloud mining",
      sub_title: "service with",
      desc_1: (<>In the rapidly evolving landscape of cryptocurrency, cloud mining has emerged as an enticing solution for individuals seeking to participate in hardware setup and maintenance.</>),
      desc_2: (<>Among the various options available, one service stands out as a leader in the realm of cloud mining.</>),
   },
   {
      id: 3,
      title: "Receive daily your",
      sub_title: "mind bitcoins",
      desc_1: (<>Imagine waking up every day to a stream of Bitcoin rewards flowing directly into your digital wallet. With our advanced cloud mining service, you can turn this reality.</>),
      desc_2: (<>We’re excited to introduce a seamless and secure way for you to daily Bitcoin mining rewards</>),
   },
];

const Feature = () => {
   return (
      <section className="feature pb-140 pb-xs-80">
         <div className="container">
            <div className="row justify-content-center mt-none-30">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mt-30">
                     <div className="feature__single">
                        <h3 className="border-left">{item.title} <br /> <span>{item.sub_title}</span></h3>
                        <p>{item.desc_1}</p>
                        <p>{item.desc_2}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Feature
