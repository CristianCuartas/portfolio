import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const Experience = (props) =>{
    return(
        <div className="row" id="experience-seccion">
             <div className="col-md-12" >
                <h4>Experience</h4>
                <hr/>
            </div>
            <div className="col-md-4">
            <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
            </div>
            
        </div>
    )
}
export default Experience