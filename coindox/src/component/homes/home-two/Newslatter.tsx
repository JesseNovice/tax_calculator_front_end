"use client"
const Newslatter = () => {
   return (
      <section className="newslatter">
         <div className="container">
            <h2 className="btc-newslatter__title border-left mb-45">Join our mailing list to get the latest updates & <br /> <span>accouchement&apos;s</span></h2>
            <form onSubmit={(e) => e.preventDefault()} className="btc-newslatter__form pos-rel">
               <input type="text" placeholder="infocoinweb@gmail.com" />
               <button className="btc-btn w-100">Subscribe Newslatter<i className="far fa-chevron-right"></i></button>
            </form>
         </div>
      </section>
   )
}

export default Newslatter
