
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useEffect } from "react";
import Navbar from './Navbar'
import Button from './Button';

const Home = () => {
    var {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    const array=JSON.parse(localStorage.getItem("array"))



useEffect(() => {
    // window.location.reload()

}, [blogs]);
    return ( 
        <>
        <Navbar/>
        <Button array={array}/>
        <div className="home">
            
            <div className="top-section">
                <i><div className="heading-top-section"><p>Style Trends of 2020</p></div></i>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. The Pali-Aike volcanic field is a volcanic field in Argentina that straddles the border with</p>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} array={array} title={"All Blogs"} />}
        </div>
        </>
     );
}
 
export default Home;