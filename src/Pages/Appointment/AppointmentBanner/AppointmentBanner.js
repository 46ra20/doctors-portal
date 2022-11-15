import React from 'react';
import { Calendar } from 'react-calendar';
import banner from '../../../assets/images/chair.png'

const AppointmentBanner = ({onChange, value}) => {
    return (
        <div className='container mx-auto flex items-center justify-around flex-col md:flex-row-reverse'>
            <img src={banner} className='w-full md:w-1/2' alt=''></img>
            <div className='w-full md:w-1/2'>
                <Calendar onChange={onChange} value={value} className='rounded p-4'></Calendar>
            </div>
        </div>
    );
};

export default AppointmentBanner;