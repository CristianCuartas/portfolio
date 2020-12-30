import React from 'react';
import "./style.css"
import contactGitHub from "./../../assets/img/contactGithub.png"
import contactLinkedin from "./../../assets/img/contactLinkedin.png"
import contactGmail from "./../../assets/img/contactGmail.png"

const Contact = (props) =>{
    return(
        <div className="row d-flex justify-content-around" id="contact-seccion">
             <div className="col-md-12" >
                <h4 className="d-flex justify-content-center">Contact</h4>
                <hr/>
            </div>
            <div className="col-md-3">
             <a
                href="https://github.com/CristianCuartas"
                target="_blank"
                title={"Ir a github"}
             >
             <img
              className="iconContact" 
                src={contactGitHub} 
                alt="Card image scrolling animation" />
             </a>
            
           </div>
             <div className="col-md-3">
             <a
                href="https://www.linkedin.com/in/cristian-david-cuartas-hernandez-923314193/"
                target="_blank"
                title={"Ir a linkedin"}
             >
             <img
             className="iconContact" 
           
                src={contactLinkedin} 
                alt="Card image scrolling animation" />
             </a>
           </div>
           <div className="col-md-3">
             <a
                href="mailto:cristianhz1109@gmail.com"
                target="_blank"
                title={"send me an email"}
             >
             <img
           className="iconContact" 
                src={contactGmail} 
                alt="Card image scrolling animation" />
             </a>
            
           </div>            
            </div>

    )
}
export default Contact