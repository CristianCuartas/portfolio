import React from 'react';
import { Media } from 'reactstrap';
const Contact = (props) =>{

    return(
        <div className="row" id="contact-seccion">
             <div className="col-md-12" >
                <h4>Contact</h4>
                <hr/>
            </div>
            <div className="col-md-12">
            <Media>
        <Media left href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
            </div>
        </div>
       
    )
}
export default Contact