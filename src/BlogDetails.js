import { useHistory, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import Navbar from './Navbar'



const BlogDetails = () => {
    let blogData = []
    const[blog,setBlog]=useState();
    const {id}= useParams()


   
    useEffect(() => {
        axios.get("https://blogvesit.herokuapp.com/blogs/?id="+id)
          .then(response => {
            if (response.data) {
              blogData=response.data
              setBlog(response.data);
              document.getElementById("detailTitle").innerHTML= blogData[0].title;
              document.getElementById("detailAuthor").innerHTML=blogData[0].author;
              document.getElementById("detailBody").innerHTML=blogData[0].body;
            }
    
          })
      }, []);

      const history= useHistory();
    const handleClick=() => {
        fetch("https://blogvesit.herokuapp.com/blogs/?id="+blog[0].id,{
            method:"DELETE"
        }).then(()=>{
            history.push("/home")
        })
    }
   
    
    
    return ( 
        <>
        <Navbar/>

        <div className="blog-details">
            {/* {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>} */}
             
                <article>
                    <br></br>
                    <h2 id="detailTitle"></h2>
                    <p style={{fontSize:20,fontWeight:300}}>Written by <span id="detailAuthor"></span> </p>
                    <br></br>
                    <div id="detailBody"></div>
                    <button onClick={handleClick}>Delete</button>
                </article>
          
        </div>
        </> 
    );
}
 
export default BlogDetails;