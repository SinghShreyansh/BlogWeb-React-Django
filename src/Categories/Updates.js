
import BlogList from "../BlogList";
import useFetch from "../useFetch";
import Navbar from '../Navbar'
import Button from '../Button';

const Updates = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");
    const array=JSON.parse(localStorage.getItem("array"))

    return ( 
        <>
        <Navbar/>
        <Button array={array}/>
        <div className="updates">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Updates")} title="Updates" />}
        </div>
        </>
     );
}
 
export default Updates;