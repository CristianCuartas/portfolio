import React, { useState } from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import "./style.css"
import weatherApp1 from './../../assets/img/weatherApp1.PNG'
import weatherApp2 from './../../assets/img/weatherApp2.PNG'
import weatherApp3 from './../../assets/img/weatherApp3.PNG'
import customerApp1 from './../../assets/img/customersApp1.PNG'
import customerApp2 from './../../assets/img/customerApp2.PNG'
import customerApp3 from './../../assets/img/customerApp3.PNG'
import scrollingAnimation from './../../assets/img/scrollingAnimation.PNG'

  const items = [
    {
      id: 1,
      src: weatherApp1,
      altText: '',
      caption: ''
    },
    {
      id: 2,
      src: weatherApp2,
      altText: '',
      caption: ''
    },
    {
      id: 3,
      src:weatherApp3,
      altText: '',
      caption: ''
    }
  ];

  const itemsCustomersApp = [
    {
      id: 1,
      src: customerApp1,
      altText: '',
      caption: ''
    },
    {
      id: 2,
      src: customerApp2,
      altText: '',
      caption: ''
    },
    {
      id: 3,
      src:customerApp3,
      altText: '',
      caption: ''
    }
  ];

const Portfolio = (props) =>{
  /* Weather app states - actions - component */
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  /* Customers app states - actions - component */
  const [activeIndexCustomers, setActiveIndexCustomers] = useState(0);
  const [animatingCustomers, setAnimatingCustomers] = useState(false);

/* Weather app actions*/
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  /* Customers app actions*/
const nextCustomers = () => {
    if (animatingCustomers) return;
    const nextIndex = activeIndexCustomers === itemsCustomersApp.length - 1 ? 0 : activeIndexCustomers + 1;
    setActiveIndexCustomers(nextIndex);
  }

  const previousCustomers = () => {
    if (animatingCustomers) return;
    const nextIndex = activeIndexCustomers === 0 ? itemsCustomersApp.length - 1 : activeIndexCustomers - 1;
    setActiveIndexCustomers(nextIndex);
  }

  const goToIndexCustomers = (newIndex) => {
    if (animatingCustomers) return;
    setActiveIndexCustomers(newIndex);
  }

 /* Weather app component */
  const slidesWeatherApp = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} style={{height:'300px', width:'100%'}}/>
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

/* Weather app component */
const slidesCustomersApp = itemsCustomersApp.map((item) => {
  return (
    <CarouselItem
      className="custom-tag"
      tag="div"
      key={item.id}
      onExiting={() => setAnimatingCustomers(true)}
      onExited={() => setAnimatingCustomers(false)}
    >
      <img src={item.src} alt={item.altText} style={{height:'300px', width:'100%'}}/>
      <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  );
});

    return (
        <div className="row" id="portfolio-seccion">
           <div className="col-md-12" >
                <h4 className="d-flex justify-content-center">Portfolio</h4>
                <hr/>
            </div>
            <div className="col-md-4">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Weather App</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://openweathermap.org/api" target="_blank">Weather API</a></CardSubtitle>
                        </CardBody>
                        <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slidesWeatherApp}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
        <CardBody>
          <CardText className="text-justify">Application to consult the climate in real time of the different cities of the world. </CardText>
          <CardText className="text-justify">
          The application is developed in React JS, and I use the material-ui core, I apply fundamental knowledge in testing, I use the Storybook tool to model the components and I implement react hooks and redux. 
          </CardText>
          <CardText className="text-justify">
          <a href="https://github.com/CristianCuartas/weather-app" target="_blank">Github repository</a>
          </CardText>
        </CardBody>
      </Card>
         </div>
         <div className="col-md-4">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Customers App</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                        <a href="https://coreui.io/" target="_blank">coreUI</a>
                          </CardSubtitle>
                        </CardBody>
                        <div>
      <Carousel
        activeIndex={activeIndexCustomers}
        next={nextCustomers}
        previous={previousCustomers}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndexCustomers} />
        {slidesCustomersApp}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousCustomers} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={nextCustomers} />
      </Carousel>
    </div>
        <CardBody>
          <CardText className="text-justify">Application to prepare sales to customers on special occasions, such as birthdays and business events.</CardText>
          <CardText className="text-justify">The application is developed in React JS, using CoreUI's React Bootstrap 4 template, implemented forms validation with Formik and Yup, applied scalable data structure with Redux and the use of React Hooks.</CardText>
          <CardText className="text-justify">
          <a href="https://github.com/CristianCuartas/rh_app" target="_blank">Github repository</a>
          </CardText>
        </CardBody>
      </Card>
         </div>
         <div className="col-md-4">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Scrolling animation</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          <a href="https://scrolling-animation-apple.herokuapp.com/" target="_blank">Go!</a>
                         </CardSubtitle>
                        </CardBody>
        <img width="100%" src={scrollingAnimation} alt="Card image scrolling animation" />
        <CardBody>
          <CardText className="text-justify">Image sequence animation, using JavaScript, HTML and CSS.</CardText>
          <CardText className="text-justify">
          <a href="https://github.com/CristianCuartas/scrolling-animation" target="_blank">Github repository</a>
          </CardText>
        </CardBody>
      </Card>
         </div>
         
    </div>
    )
 
}

export default Portfolio