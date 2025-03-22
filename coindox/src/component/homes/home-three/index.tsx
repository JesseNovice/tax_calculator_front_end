import FooterThree from "@/layouts/footers/FooterThree"
import About from "./About"
import Banner from "./Banner"
import Brand from "./Brand"
import ContactForm from "./ContactForm"
import FaqArea from "./FaqArea"
import Feature from "./Feature"
import Team from "./Team"
import Token from "./Token"
import TokenTwo from "./TokenTwo"
import HeaderThree from "@/layouts/headers/HeaderThree"
import Roadmap from "./Roadmap"

const HomeThree = () => {
  return (
    <div className="body_wrap">
      <main>
        <HeaderThree />
        <Banner />
        <About />
        <Feature />
        <Token />
        <Roadmap />
        <TokenTwo />
        <Team />
        <FaqArea />
        <Brand />
        <ContactForm />
        <FooterThree />
      </main>
    </div>
  )
}

export default HomeThree
