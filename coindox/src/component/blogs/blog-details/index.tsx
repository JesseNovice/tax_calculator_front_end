import Breadcrumb from "@/component/common/Breadcrumb"
import BlogDetailsArea from "./BlogDetailsArea"
import ContactForm from "@/component/homes/home-three/ContactForm"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const BlogDetails = () => {
   return (
      <>
         <HeaderThree />
         <Breadcrumb title="Blog single Page" page_title="Blog single Page" />
         <BlogDetailsArea />
         <ContactForm />
         <FooterThree />
      </>
   )
}

export default BlogDetails
