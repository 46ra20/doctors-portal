import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
import img from '../../../assets/images/treatment.png'

const Services = () => {
    const services = [
        {
            id:'01',
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },
        {
            id: '02',
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: '03',
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        }
    ]
    return (
        <div className='mt-28 container mx-auto'>
            <div className='text-center'>
                <div>
                    <h4 className='uppercase text-xl text-[#19D3AE]'>Our services</h4>
                    <h2 className='text-3xl'>Services we provide</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6'>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
                
            </div>
            <div className='mt-12'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <img src={img} alt='' className="lg:w-1/2 lg:block lg:mx-auto rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;