import React from 'react';
import chair from '../../../assets/images/chair.png'
import bgImage from '../../../assets/images/bg.png'

const Header = () => {
    return (
        <div className='mx-auto container' style={{backgroundImage:`url(${bgImage})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}}>
            <div className="hero py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className='w-full lg:w-1/2' alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;