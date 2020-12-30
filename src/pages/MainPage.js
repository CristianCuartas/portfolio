import React, { Fragment } from 'react';
import {useHistory} from 'react-router-dom';
import Presentation from "./../components/Presentation"
import Navbar from "./../components/Navbar"
import Portfolio from "./../components/Portfolio"
import SkillSet from "./../components/SkillSet"
import Experience from "./../components/Experience"
import Contact from "./../components/Contact"

const MainPage = (props) =>{
    const history = useHistory();
    const onClickHandler = () =>{
        console.log('click', history)
    };

    return (
        <Fragment>
            <Presentation/>
            <br/>         
            <Navbar/>
            <br/> 
            <Portfolio/>
            {/* <br/> 
            <SkillSet/>
            <br/> 
            <Experience/>
            <br/> 
            <Contact/> */}
        </Fragment>
    )
}
export default MainPage;