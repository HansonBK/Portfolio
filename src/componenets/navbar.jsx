import React,{ useState,useRef} from "react";
import logo from "../images/logo/logo3.svg";


function NavBar(){

    const [isActive, setIsActive] = useState(false)
    
    
    function handleClick()
    {
        setIsActive(prevState => !prevState);           
                
            
    }

return(

    <>

      
        <div className="tog-div" style={{display: isActive? 'block': 'none'}}>

          
            <ul className="tog-ul">

                <a className="tog-about" href="#" >
                    <li className="tog-li">

                        <h1>About</h1>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolor saepe enim quos nam asperiores deserunt, odio debitis esse ea nobis quia delectus tenetur ex repellendus cum ad impedit natus!</p>

                    </li>                
                </a>
             
                <a  className="tog-a" href="#"><li className="tog-li">GitHub</li></a>

                <a  className="tog-a" href="#"><li className="tog-li">LinkedIn</li></a>
               
                <a  className="tog-a" href="#"><li className="tog-li">FaceBook</li></a>
               
               
            </ul> 


        </div>

        <header>

            <img src={logo} alt="logo" className="logo"/>

            <nav>
                
                <ul className="nav_links">
                    <li className="li_items"><a href="#" className="a-item">Projects</a></li>

                    <li className="li_items"><a href="#" className="a-item">Services</a></li>

                    <li className="li_items"><a href="#" className="a-item">Resume</a></li>

                </ul>                

                
            </nav>

            <a href="#" className="cont-a-btn ">
                
                <button 

                className="cont-btn" 
                 onClick={handleClick} 
                 >
                    
                    Contact

                </button>
                
            </a>



        </header>
      

    </>
);

}

export default NavBar;