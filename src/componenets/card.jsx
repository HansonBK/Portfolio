import React from "react";


function Card(props){

    return(


            

        <>

            <div className="grid-cont">


                

                <div className="grid-item"> 


                    <div className="card-img" ><img src={props.src} alt="logo" /></div>

                    <div className="card-h"><h1>{props.header}</h1></div>

                    <div className="card-p"><p>{props.text}</p></div>

                    <div className="card-b"><a target="_blank" rel="noopener noreferrer" href= {props.link} ><button>button</button></a></div>



                </div>                  





            </div>  

            
                      

        </>
    )
}

export default Card;