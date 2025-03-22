import img_1 from "@/assets/img/blog/w_01.jpg"
import img_2 from "@/assets/img/blog/w_02.jpg"
import img_3 from "@/assets/img/blog/w_03.jpg"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

interface DataType {
   id: number,
   thumb: StaticImageData;
   date: string;
   title: string;
}[];

const recent_blog: DataType[] = [
   {
      id: 1,
      thumb: img_1,
      date: "JULY 25,2023",
      title: "We Advocate Swapping Screen Time",
   },
   {
      id: 2,
      thumb: img_2,
      date: "MARCH 20,2023",
      title: "Utilizing mobile technology in the field",
   },
   {
      id: 3,
      thumb: img_3,
      date: "JULY 18,2023",
      title: "Building intelligent transportation systems",
   },
];

const RecentPost = () => {
   return (
      <div className="widget mt-30">
         <h3 className="widget__title">Recent Posts</h3>
         <div className="widget__post">
            {recent_blog.map((item) => (
               <div key={item.id} className="widget__post-item ul_li">
                  <div className="post-thumb">
                     <Link href="/blog-single"><Image src={item.thumb} alt="" /></Link>
                  </div>
                  <div className="post-content">
                     <span className="post-date">{item.date}</span>
                     <h4 className="post-title border-effect-2"><Link href="/blog-single">{item.title}</Link></h4>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default RecentPost
