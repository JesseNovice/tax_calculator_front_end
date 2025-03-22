import Link from "next/link"

const Categories = () => {
   return (
      <div className="widget mt-30">
         <h3 className="widget__title">Categories</h3>
         <ul className="widget__category list-unstyled">
            <li><Link href="#!">Blockchain <span>05</span></Link></li>
            <li><Link href="#!">Web Development <span>03</span></Link></li>
            <li><Link href="#!">Cryptocurrency <span>06</span></Link></li>
            <li><Link href="#!">Branding Design <span>05</span></Link></li>
            <li><Link href="#!">Uncategorized <span>02</span></Link></li>
            <li><Link href="#!">UI/UX Design <span>04</span></Link></li>
            <li><Link href="#!">Email Marketing <span>05</span></Link></li>
         </ul>
      </div>
   )
}

export default Categories
