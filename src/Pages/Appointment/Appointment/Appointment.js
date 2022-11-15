import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {

    const [value, onChange] = useState(new Date())
    return (
        <div>
            <AppointmentBanner onChange={onChange} value={value}></AppointmentBanner>
        </div>
    );
};

export default Appointment;