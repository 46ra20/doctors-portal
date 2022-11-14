import React from 'react';
import ContactUS from '../ContactUS/ContactUS';
import Header from '../Header/Header';
import InfoCards from '../InfoCards/InfoCards';
import MakeAnAppointment from '../MakeAnAppointment/MakeAnAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAnAppointment></MakeAnAppointment>
            <Testimonial></Testimonial>
            <ContactUS></ContactUS>
        </div>
    );
};

export default Home;