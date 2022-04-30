import React,{useEffect} from 'react'

import './SelectCategory.css'
import Business from './temp/business.jpg'
import Culture from './temp/culture.png'
import Design from './temp/design.jfif'
import Environment from './temp/environment.jfif'
import Health from './temp/health.png'
import Opinion from './temp/opinion.png'
import Politics from './temp/politic.png'
import Science from './temp/science.png'
import Style from './temp/style.png'
import Tech from './temp/tech.png'
import Travel from './temp/travel.jfif'
import Update from './temp/update.png'
import Next from './temp/next.png'
import { useHistory } from "react-router-dom";

const SelectCategory = () => {

    const history = useHistory();

    let array = []
   

    const goHomePage=(e)=>{
        e.preventDefault()
        localStorage.clear()
        localStorage.setItem("array",JSON.stringify(array))
        history.push("/welcome")
    }

   useEffect(() => {
        console.log(window.location.href)
        console.log(window.location.pathname)
        console.log(window.location.hostname)


    }, []);

  return (
    <div>
        <div className="upper-lower">
            <div className="upperTitle">
                <h1>Select Blog Category </h1>
            </div>
            <div className="lower-category">
                <div className="row">
                    <div className="category" onClick={(e)=>{e.preventDefault(); array.push("business") ; e.target.style.background="#0088FF"}} >
                        <img src={Business}  className="category-img" alt='business'>

                        </img>
                        <div className="category-name">
                            Business
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {e.preventDefault();array.push("culture"); e.target.style.background="#0088FF"}}>
                        <img src={Culture} className="category-img"alt='culture'>

                        </img>
                        <div className="category-name">
                            Culture
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {e.preventDefault();array.push("design"); e.target.style.background="#0088FF"}}>
                        <img src={Design} className="category-img" alt='design'>

                        </img>
                        <div className="category-name">
                            Design
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {e.preventDefault();array.push("environment"); e.target.style.background="#0088FF"}}>
                        <img src={Environment} className="category-img" alt='environment'>

                        </img>
                        <div className="category-name">
                            Environment
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="category" onClick={(e)=> {array.push("health"); e.target.style.background="#0088FF"}}>
                        <img src={Health} className="category-img" alt='health'>

                        </img>
                        <div className="category-name">
                            Health
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {array.push("opinion"); e.target.style.background="#0088FF"}}>
                        <img src={Opinion} className="category-img" alt='opinion'>

                        </img>
                        <div className="category-name">
                            Opinions
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {array.push("politics"); e.target.style.background="#0088FF"}}>
                        <img src={Politics} className="category-img" alt='politic'>

                        </img>
                        <div className="category-name">
                            Politics
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {array.push("science"); e.target.style.background="#0088FF"}}>
                        <img src={Science} className="category-img" alt='science'>

                        </img>
                        <div className="category-name">
                            Science
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="category" onClick={(e)=> {array.push("style"); e.target.style.background="#0088FF"}}>
                        <img src={Style} className="category-img" alt='style'>

                        </img>
                        <div className="category-name">
                            Style
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {array.push("technology"); e.target.style.background="#0088FF"}}>
                        <img src={Tech} className="category-img" alt='technology'>

                        </img>
                        <div className="category-name">
                            Technology
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {array.push("travel"); e.target.style.background="#0088FF"}}>
                        <img src={Travel} className="category-img" alt='travel'>

                        </img>
                        <div className="category-name">
                            Travel
                        </div>
                    </div>
                    <div className="category" onClick={(e)=> {array.push("updates"); e.target.style.background="#0088FF"}}>
                        <img src={Update} className="category-img" alt='update'>

                        </img>
                        <div className="category-name">
                            Updates
                        </div>
                    </div>
                </div>


   
            </div>


            
        </div>

        <div className="next-button-category">
                <img src={Next} onClick={goHomePage} alt="next" />
            </div>
    </div>

  )
}

export default SelectCategory
