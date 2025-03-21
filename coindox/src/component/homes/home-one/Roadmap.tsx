import Image from "next/image";

import icon_1 from "@/assets/img/icon/rm_icon.png";

interface DataType {
   id: number;
   title: JSX.Element;
   list: string[];
}[];

const roadmap_data: DataType[] = [
   {
      id: 1,
      title: (<>Stage 1 <br /> Q1 - 2023</>),
      list: ["Ideation", "Proof of Concept", "Business Deck", "Security Audit", "Token on BEP 20"],
   },
   {
      id: 2,
      title: (<>Stage 2 <br /> Q2 - 2023</>),
      list: ["Mainnet Launch", "Smart Contract Upgrade", "Cross-Chain Interoperability", "Governance Model Implementation", "Whitepaper Release"],
   },
   {
      id: 3,
      title: (<>Stage 3 <br /> Q3 - 2023</>),
      list: ["Decentralized Finance Expansion", "Proof of Concept", "Privacy Enhancements", "Developer Grants Program", "BCL Mobile App"],
   },
   {
      id: 4,
      title: (<>Stage 4 <br /> Q4 - 2023</>),
      list: ["Builder NFT Airdrop", "Website Launch", "Legal Opinion", "NFT Marketplace Launch", "Whitepaper Release"],
   },
   {
      id: 5,
      title: (<>Stage 5 <br /> Q5 - 2024</>),
      list: ["Scalability Improvements", "Real-World Integration", "User-Friendly Wallet", "Sustainable Blockchain", "Global Community Expansion"],
   },
   {
      id: 6,
      title: (<>Stage 6 <br /> Q6 - 2024</>),
      list: ["Citizenship and land parcel", "Meta Event Arena Launch", "First Planet Phase 1 Launch", "NFT Artist Onboarding Release", "Initial Metaverse Offering Launce"],
   },
]

const Roadmap = () => {
   return (
      <section id="roadmap" className="roadmap pb-135 pt-120">
         <div className="container">
            <div className="sec-title style2 text-center mb-60">
               <h2 className="sec-title__title text-50 mb-25">Roadmap</h2>
               <p>blockchain a Solid Infrastructure for Growth</p>
            </div>
            <div className="roadmap__list pos-rel">
               {roadmap_data.map((item) => (
                  <div key={item.id} className="roadmap__list-box">
                     <div className="roadmap__list-inner">
                        <div className="icon">
                           <Image src={icon_1} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                        <ul className="list-unstyled">
                           {item.list.map((list, i) => (
                              <li key={i}>{list}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Roadmap
