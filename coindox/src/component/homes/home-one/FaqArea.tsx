import React from 'react'
interface DataType {
  id: number;
  page: string;
  title: string;
  desc: JSX.Element;
}[];

const faq_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    title: "What is Blockchain?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 2,
    page: "home_1",
    title: "How is Blockchain Secure?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 3,
    page: "home_1",
    title: "What is the Difference Between Public and Private Blockchains?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 4,
    page: "home_1",
    title: "How Can I Get Started with Blockchain?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 5,
    page: "home_1",
    title: "What Are Some Real-World Use Cases of Blockchain?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
]
const FaqArea = () => {
  return (
    <section className="faq pb-75">
      <div className="container">
        <div className="sec-title style2 text-center mb-40">
          <h2 className="sec-title__title text-50 mb-25">Frequently Asked Questions</h2>
          <p>Have questions? We have answers!</p>
        </div>
        <div className="faq__blockchain">
          <div className="accordion_box clearfix accordion" id="accordionOne">
            {faq_data.map((item) => (
              <div key={item.id} className={`block accordion-item  ${item.id === 1 ? "" : "collapsed"}`} id={`heading${item.id}`}>
                <button className={`acc-btn accordion-button ${item.id === 1 ? "" : "collapsed"}`} type='button'
                  data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true"
                  aria-controls={`collapse${item.id}`}>
                  {item.title}
                  <span className="arrow"><span></span></span>
                </button>
                <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`}
                  data-bs-parent="#accordionOne">
                  <div className="content accordion-body">{item.desc}</div>
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
