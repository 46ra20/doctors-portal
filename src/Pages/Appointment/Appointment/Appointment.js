import React, { useEffect, useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const Appointment = () => {

    const [value, onChange] = useState(new Date())
    const [modal, setModal] = useState({}) 
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])

    modal['date'] = value;
    return (
        <div className='container mx-auto'>
            <AppointmentBanner onChange={onChange} value={value}></AppointmentBanner>
            <p className='text-2xl text-secondary font-bold text-center'>
                {
                    value.toDateString()
                }
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} option={option} setModal={setModal} modal={modal}></AppointmentOption>)
                }
            </div>
            <AppointmentModal modal={modal}></AppointmentModal>
        </div>
    );
};

export default Appointment;