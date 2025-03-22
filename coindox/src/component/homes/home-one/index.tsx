import FooterOne from "@/layouts/footers/FooterOne"
import About from "./About"
import Advantages from "./Advantages"
import Brand from "./Brand"
import Distribution from "./Distribution"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import Roadmap from "./Roadmap"
import Solution from "./Solution"
import Team from "./Team"
import Token from "./Token"
import TokenUpdate from "./TokenUpdate"
import UserOption from "./UserOption"
import Header from "@/layouts/headers/Header"

const HomeOne = () => {
  return (
    <div className="home-blockchain">
      <div className="body_wrap">
        <Header />
        <Hero />
        <UserOption />
        <Solution />
        {/*<Token /> */}
        <Roadmap />
        <FooterOne />
      </div>
    </div>
  )
}

export default HomeOne
