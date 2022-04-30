import { useHistory } from "react-router-dom";
import Navbar from './Navbar'
import Button from './Button';

const Welcome = () => {
    const history = useHistory();

     const array=JSON.parse(localStorage.getItem("array"))

    return ( 
        <>
        <Navbar/>
        <Button array={array}/>
        <div className="welcome">
            <div className="container-jumbotron">
                    <div className="jumbotron">
                        <h1 className="display-4" style={{fontSize:50}}>Hello, World</h1>
                        <p className="lead">This is a simple hero unit , a simple  sit amet consectetur adipisicing elit.</p>
                        <hr className="my-4" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. The Pali-Aike volcanic field is a volcanic field in Argentina that straddles the border with</p>
                        <div className="btn btn-primary btn-lg" onClick={(e)=>history.push("/home")} role="button">Check out Our Blog</div>
                    </div>
                </div>
        </div>
        </>
     );
}
export default Welcome;