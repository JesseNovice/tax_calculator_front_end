import Categories from "../blog/Categories"
import RecentPost from "../blog/RecentPost"
import Tags from "../blog/Tags"

const BlogSidebar = () => {
   return (
      <div className="col-lg-4 mt-30">
         <div className="sidebar-area mt-none-30">
            <div className="widget mt-30">
               <h3 className="widget__title">Search</h3>
               <form className="widget__search" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Search your keyword" />
                  <button><i className="far fa-search"></i></button>
               </form>
            </div>
            <Categories />
            <RecentPost />
            <Tags />
         </div>
      </div>
   )
}

export default BlogSidebar
