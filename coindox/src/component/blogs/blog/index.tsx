import Breadcrumb from "@/component/common/Breadcrumb"
import BlogArea from "./BlogArea"
import ContactForm from "@/component/homes/home-three/ContactForm"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Blog = () => {
   return (
      <>
         <HeaderThree />
         <Breadcrumb title="Blog & Article" page_title="Blog & Article" />
         <BlogArea />
         <ContactForm />
         <FooterThree />
      </>
   )
}

export default Blog
