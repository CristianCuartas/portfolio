import React, { Fragment } from 'react';
import {useHistory} from 'react-router-dom';
import Presentation from "./../components/Presentation"
import Navbar from "./../components/Navbar"
import Portfolio from "./../components/Portfolio"

const MainPage = (props) =>{
    const history = useHistory();
    const onClickHandler = () =>{
        console.log('click', history)
    };

    return (
        <Fragment>
            <Presentation/>            
            <Navbar/>
            <Portfolio/>
        </Fragment>
    )
}
export default MainPage;