import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import cvSpanish from "./../../assets/files/curriculumVitaeSpanish.pdf"
import cvEnglish from "./../../assets/files/curriculumVitaeEnglish.pdf"

const Experience = (props) =>{
    return(
        <div className="row" id="experience-seccion">
             <div className="col-md-12" >
                <h4 className="d-flex justify-content-center">Experience</h4>
                <hr/>
            </div>
            <div className="col-md-4">
            <Card>
        <CardBody>
          <CardTitle tag="h5">Desarrollador de software front-end practicante</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Lexco S.A - Bogotá, Colombia 2019</CardSubtitle>
          <CardText className="text-justify">En mi etapa practica fui el encargado de apoyar las mejoras en la interfaz web, asegurándome del flujo correcto de datos en cada interacción. Apoye procesos de traducción del aplicativo al idioma inglés tanto a nivel de código y de la correcta utilización del lenguaje. Me fueron asignadas tareas más grandes como la creación de nuevas vistas y funcionalidades del software.</CardText>
        </CardBody>
      </Card>
            </div>
            <div className="col-md-4">
            <Card>
        <CardBody>
          <CardTitle tag="h5">Analista de desarrollo de software</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Lexco S.A - Bogotá, Colombia 2019-2020</CardSubtitle>
          <CardText className="text-justify">En Octubre del 2019 firmo un contrato con la compañía para ocupar el puesto de Analista de desarrollo, rol en el cual asisto a la toma de desiciones y me sigo desempeñando como desarrollador front-end trabajando en potenciar la calidad del software implementando arquitectura escalable de datos, utilizando React-Redux además de una linea de librerias para el manejo del flujo de datos y desarrollo de funcionalidades propias del software.</CardText>
        </CardBody>
      </Card>
            </div>
            <div className="col-md-4">
            <Card>
        <CardBody>
          <CardTitle tag="h5">Curriculum vitae</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
         Enlaces de descarga
          </CardSubtitle>
          <CardText className="text-justify">
            <a href={cvEnglish} download="cv-CristianCuartas.pdf">
              <b>Curriculum vitae in english</b>
            </a>
          </CardText>
          <CardText className="text-justify">
            <a href={cvSpanish} download="cv-CristianCuartas.pdf">
              <b>Curriculum vitae in spanish</b>
            </a>
          </CardText>
        </CardBody>
      </Card>
            </div>
        </div>
    )
}
export default Experience