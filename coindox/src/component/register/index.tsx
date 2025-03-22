import FooterThree from "@/layouts/footers/FooterThree"
import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import ContactForm from "../homes/home-three/ContactForm"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Register = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Register" page_title="Register" />
         <LogingArea style={true} />
         <ContactForm />
         <FooterThree />
      </main>
   )
}

export default Register
