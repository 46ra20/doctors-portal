import React from 'react';
import { Calendar } from 'react-calendar';
import banner from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({onChange, value}) => {
    return (
        <div className="hero" style={{background:`url(${bg})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                <img src={banner} alt='' className='w-full md:w-1/2'/>
                <div>
                    <Calendar onChange={onChange} value={value}></Calendar>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;