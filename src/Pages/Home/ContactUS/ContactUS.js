import React from 'react';
import contactUsBg from '../../../assets/images/appointment.png'

const ContactUS = () => {
    return (
        <div style={{background:`url(${contactUsBg})`}} className='mt-12'>
            <div className='container mx-auto'>
                <div className='text-center py-10'>
                    <h4 className='text-2xl font-bold text-primary'>Contact Us</h4>
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
                <form className='block w-full  md:w-2/4 lg:w-2/5 px-3 mx-auto md:px-auto pb-10'>
                    <input type="email" placeholder="Your email" className="input input-bordered w-full my-5" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                    <textarea className="textarea textarea-bordered block w-full my-5" placeholder="Your Massage"></textarea>
                    <button className="btn btn-primary block mx-auto">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUS;