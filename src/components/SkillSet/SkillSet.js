import React from 'react';
import { Jumbotron } from 'reactstrap';

const SkillSet = (props) =>{
return(
    <div className="row" id="skillset-seccion">
    <div className="col-md-12" >
         <h4>Skill set</h4>
         <hr/>
     </div>
    <div className="col-md-12">
    <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>

      </Jumbotron>
    </div>
     </div>
)
}

export default SkillSet;