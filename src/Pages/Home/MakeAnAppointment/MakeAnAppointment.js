import React from 'react';
import bg from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor-small.png'

const MakeAnAppointment = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`, backgroundSize:'100% 100%'}}>
            <div className="hero mt-24 container mx-auto">
                <div className="flex flex-col items-center lg:flex-row">
                    <img src={doctor} alt='' className="hidden lg:block rounded-lg -mt-20" />
                    <div className='p-10 md:p-0'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAnAppointment;