import React, { Fragment, useState }from 'react';
import { Jumbotron, Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import IconJavaScript from './../../assets/img/icons/JS.png'
import IconHTML from './../../assets/img/icons/HTML.png'
import IconReact from './../../assets/img/icons/React.png'
import IconCSS from './../../assets/img/icons/CSS.png'
import IconRedux from './../../assets/img/icons/Redux.png'
import IconExpo from './../../assets/img/icons/Expo.png'
import IconBootstrap from './../../assets/img/icons/Bootstrap.png'
import IconStorybook from './../../assets/img/icons/Storybook.png'
import IconNode from './../../assets/img/icons/Node.png'
import IconAdobe from './../../assets/img/icons/AdobeXd.png'
import IconPostman from './../../assets/img/icons/Postman.png'
import IconNginx from './../../assets/img/icons/Nginx.png'
import IconIIS from './../../assets/img/icons/IIS.png'
import IconGit from './../../assets/img/icons/Git.png'

const PopoverItem = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
<span>
    <Button
        className="mr-1"
        color="light"
        id={"Popover-" + id}
        type="button"
        style={{
          width:'100px', 
          height:'100px'
        }}
        title={item.title}
      >
         <img width="100%" src={item.img} alt={`Icon ${item.title}`}/>
      </Button>
      <Popover
        placement={'top'}
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
      >
        <PopoverHeader>{item.title}</PopoverHeader>
        <PopoverBody>
          {item.description}
        </PopoverBody>
      </Popover>
    </span>
    
  );
};

const SkillSet = (props) =>{
const skills = [
  { 
    id:1,
    title:"HTML",
    img: IconHTML,
    description: 'Cuento con 2 años de experiencia trabajando con lenguaje de marcado de hipertexto (HTML), mi nivel de habilidad es avanzado.'
  },
  { 
    id:2,
    title:"CSS",
    img: IconCSS,
    description: 'Cuento con 2 años de experiencia trabajando con hojas de estilo en cascada (CSS), mi nivel de habilidad es intermedio.'
  },
  { 
    id:3,
    title:"JavaScript",
    img: IconJavaScript,
    description: 'Cuento con 2 años de experiencia trabajando con el lenguaje JavaScript, mi nivel de habilidad es intermedio.'
  },
  { 
    id:4,
    title:"React JS",
    img: IconReact,
    description: 'Cuento con más de 1 año de experiencia trabajando con el framework React JS, mi nivel de habilidad es intermedio.'
  },
  { 
    id:5,
    title:"Redux",
    img: IconRedux,
    description: 'Cuento con más de 1 año de experiencia trabajando con la libreria Redux, mi nivel de habilidad es intermedio.'
  },
  { 
    id:6,
    title:"Bootstrap",
    img: IconBootstrap,
    description: 'Cuento con 2 años de experiencia trabajando con la libreria Bootstrap, mi nivel de habilidad es intermedio.'
  },
  { 
    id:7,
    title:"Adobe Xd",
    img: IconAdobe,
    description: 'Cuento con más de 1 año de experiencia trabajando con la plataforma Adobe Xd, mi nivel de habilidad es intermedio.'
  },
  { 
    id:8,
    title:"Storybook",
    img: IconStorybook,
    description: 'Cuento con más de 1 año de experiencia trabajando con la libreria Storybook mi nivel de habilidad es intermedio.'
  },
  { 
    id:9,
    title:"Git",
    img: IconGit,
    description: 'Cuento con más de 1 año de experiencia trabajando con el control de versiones Git, Github, mi nivel de habilidad es intermedio.'
  },
  { 
    id:10,
    title:"Postman",
    img: IconPostman,
    description: 'Cuento con más de 1 año de experiencia trabajando con la plataforma Postman, mi nivel de habilidad es intermedio.'
  },
  { 
    id:11,
    title:"Node JS",
    img: IconNode,
    description: 'Cuento con 1 año de experiencia trabajando en proyectos especificos con la plataforma Node JS, mi nivel de habilidad es novato.'
  },
  { 
    id:12,
    title:"Expo",
    img: IconExpo,
    description: 'Cuento con 1 año de experiencia trabajando en proyectos especificos con la libreria Expo para desarrollo de aplicaciones moviles, mi nivel de habilidad es conocimientos fundamentales.'
  },
  { 
    id:13,
    title:"IIS",
    img: IconIIS,
    description: 'Cuento con 1 año de experiencia trabajando en despliegues con Internet Information Services (IIS), mi nivel de habilidad es novato.'
  },
  { 
    id:14,
    title:"Nginx",
    img: IconNginx,
    description: 'Cuento con 1 año de experiencia trabajando en despliegues con Nginx, mi nivel de habilidad es novato.'
  }
];

return(
    <div className="row" id="skillset-seccion">
    <div className="col-md-12" >
         <h4 className="d-flex justify-content-center">Skill set</h4>
         <hr/>
     </div>
    <div className="col-md-12">
      <Jumbotron>
    {skills.map((popover, i) => {
        return (
          <Fragment>
            <PopoverItem key={i} item={popover} id={i} />
          </Fragment>
        )
      })}
      </Jumbotron>
    </div>
     </div>
)
}

export default SkillSet;