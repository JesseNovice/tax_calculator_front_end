import Image from "next/image"
import Link from "next/link"

import thumb_1 from "@/assets/img/blog/img_05.jpg"
import thumb_2 from "@/assets/img/icon/quote.svg"
import thumb_3 from "@/assets/img/blog/img_06.jpg"
import thumb_4 from "@/assets/img/blog/img_07.jpg"
import PostFooter from "./PostFooter"


const BlogDetailsArea = ({ single_blog }: any) => {
  return (
    <section className="blog-single pt-125 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="blog-single__wrap">
              <div className="blog-single__top">
                <h2 className="blog-single__title">{single_blog?.title ? single_blog.title : "Crypto Frontier Awaits: Join our ICO to Be at the Forefront of Innovation Ideas"}</h2>
                <ul className="blog__meta ul_li mb-30">
                  <li><Link href="#!"><i className="far fa-user"></i>{single_blog?.user ? single_blog.user : "Liam James"}</Link></li>
                  <li><i className="far fa-clock"></i>Dec 28, 2022</li>
                  <li><Link href="#!"><i className="far fa-comment"></i>(04) Coments</Link></li>
                </ul>
              </div>
              <div className="blog-single__thumb">
                {single_blog?.thumb ? <Image src={single_blog.thumb} alt="image" /> : <Image src={thumb_1} alt="image" />}
              </div>
              <div className="blog-single__content mt-10">
                <p>In the ever-evolving landscape of technology and finance, cryptocurrencies have emerged as a revolutionary force, promising to reshape the way we perceive and interact with money. At the heart of this transformation lies the Initial Coin Offering (ICO), a groundbreaking fundraising method that has given birth to countless groundbreaking projects. In this blog, we invite you to embark on a journey of exploration into the realm of cryptocurrency and blockchain innovation, as we present our exciting ICO opportunity that promises to put you at the forefront of revolutionary ideas.</p>
                <p>The cryptocurrency frontier is a vast and uncharted territory, rife with opportunities waiting to be discovered. Blockchain technology, the backbone of cryptocurrencies, has the potential to disrupt traditional industries and create new, decentralized ecosystems. As we witness the rise of decentralized finance (DeFi), non-fungible tokens (NFTs), and smart contract platforms, it becomes evident that the crypto frontier is not only a realm of financial possibilities but also a hotbed for technological innovation.</p>
                <div className="mt-50">
                  <blockquote className="text-center">
                    <div className="icon">
                      <Image src={thumb_2} alt="" />
                    </div>
                    There are no secrets to success. It is the result of preparation, hard work, and learning from failure.
                    <span>- Chris Prouty</span>
                  </blockquote>
                </div>
                <div className="blog-single__images mt-55">
                  <div className="row mt-none-20">
                    <div className="col-lg-6 col-md-6 mt-20">
                      <Image src={thumb_3} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-20">
                      <Image src={thumb_3} alt="" />
                    </div>
                  </div>
                </div>
                <p>An ICO represents more than just a fundraising event; it serves as a catalyst for community engagement and a means to gather like-minded individuals who share a vision for the future. By participating in our ICO, you become an essential part of our mission, supporting us as we strive to turn innovative ideas into reality. Unlike traditional fundraising methods, an ICO democratizes investment opportunities</p>
                <p>As an ICO participant, you gain access to cutting-edge projects that have the potential to redefine industries and elevate technological standards. Whether it&apos;s a blockchain-based solution to streamline supply chains, a new DeFi protocol empowering financial inclusion, or an NFT platform revolutionizing digital ownership, being at the forefront of innovation means seizing .</p>
              </div>
              <PostFooter />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetailsArea
