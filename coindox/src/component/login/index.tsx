import FooterThree from "@/layouts/footers/FooterThree"
import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import ContactForm from "../homes/home-three/ContactForm"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Login = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Login" page_title="Login" />
         <LogingArea style={false} />
         <ContactForm />
         <FooterThree />
      </main>
   )
}

export default Login
