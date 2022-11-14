import React from 'react';
import NavBar from '../../Pages/sheared/NavBar/NavBar';
import Home from '../../Pages/Home/Home/Home';
import PageFooter from '../../Pages/sheared/PageFooter/PageFooter';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <PageFooter></PageFooter>
        </div>
    );
};

export default MainLayOut;