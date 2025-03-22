import FooterThree from "@/layouts/footers/FooterThree"
import Breadcrumb from "../common/Breadcrumb"
import ForgotForm from "../forms/ForgotForm"
import ContactForm from "../homes/home-three/ContactForm"
import HeaderThree from "@/layouts/headers/HeaderThree"

const ResetPassWord = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Reset PassWord" page_title="Reset PassWord" />
         <ForgotForm />
         <ContactForm />
         <FooterThree />
      </main>
   )
}

export default ResetPassWord
