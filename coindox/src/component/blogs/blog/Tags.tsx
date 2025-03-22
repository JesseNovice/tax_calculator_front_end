import Link from "next/link"

const Tags = () => {
   return (
      <>
         <div className="widget mt-30">
            <h3 className="widget__title">Follow Us</h3>
            <ul className="widget__social ul_li">
               <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
               <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
               <li><Link href="#!"><i className="fab fa-linkedin-in"></i></Link></li>
               <li><Link href="#!"><i className="fab fa-youtube"></i></Link></li>
               <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
            </ul>
            <div className="widget__divider mt-40 mb-40"></div>
            <Link className="thm-btn" href="#!">PURCHASE TOKEN</Link>
         </div>
         <div className="widget mt-30">
            <h3 className="widget__title">Tags</h3>
            <div className="tagcloud">
               <Link href="#!">ICO</Link>
               <Link href="#!">blockchain</Link>
               <Link href="#!">investments</Link>
               <Link href="#!">currency</Link>
               <Link href="#!">crypto trading</Link>
               <Link href="#!">crypto</Link>
               <Link href="#!">ico blockchain</Link>
               <Link href="#!">advisor</Link>
               <Link href="#!">web</Link>
               <Link href="#!">ICO Tokens</Link>
            </div>
         </div>
      </>
   )
}

export default Tags
