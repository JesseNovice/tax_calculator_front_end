import BlogDetailsArea from "@/component/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/component/common/Breadcrumb";
import blog_data from "@/component/data/BlogData";
import ContactForm from "@/component/homes/home-three/ContactForm";
import Wrapper from "@/layouts/Wrapper";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderThree from "@/layouts/headers/HeaderThree";

export const metadata = {
   title: "Blog Details Coindox - ICO & Crypto Landing React Next js Template",
};
const index = ({ params }: { params: { id: number } }) => {

   const single_blog = blog_data.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <HeaderThree />
         <Breadcrumb title="Blog single Page" page_title="Blog Details" />
         <BlogDetailsArea single_blog={single_blog} key={single_blog?.id} />
         <ContactForm />
         <FooterThree />
      </Wrapper>
   )
}

export default index