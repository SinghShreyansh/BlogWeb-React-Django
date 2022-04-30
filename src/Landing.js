import React from 'react';
import Welcome from './temp/welcome.mp4'
import './Landing.css'
import { useHistory } from "react-router-dom";

const Landing = () => {

    const history = useHistory();

    const getStarted=()=>{
        if(JSON.parse(localStorage.getItem("array"))){
            history.push('/welcome')
        }else{
            history.push('/category')
        }

    }

  return (
    <div>
      <div className="landing-main">
          <video  height={"1000%"} width={"100%"} className='welcomeVideo'>
              <source src={Welcome} type="video/mp4" />
              
          </video>
          <button className='loginButton' onClick={getStarted}>Get Started with Blogs</button>
      </div>
    </div>
  );
}

export default Landing;
