import React from 'react';
import NavBar from '../../Pages/sheared/NavBar/NavBar';
import PageFooter from '../../Pages/sheared/PageFooter/PageFooter';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
        </div>
    );
};

export default MainLayOut;