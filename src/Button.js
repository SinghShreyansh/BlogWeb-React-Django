import { Link } from "react-router-dom";

const Button = ({array}) => {
  console.log(array)
    return ( 
        
        <div className="buttons">

            {array && array.map((value)=>{
                const toPage="/home/"+value;
                console.log(toPage)
                return <Link className="btn btn-primary btn-lg" to={`${toPage}`} key={value} role="button" >{value}</Link>
            })}

        </div>
     );
}
 
export default Button;




