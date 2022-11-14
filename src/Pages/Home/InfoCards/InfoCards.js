import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const info = [
        {
            id:'01',
            name:'Opening Hours',
            icon:clock,
            description:'Lorem Ipsum is simply dummy text of the pri',
            bg:'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: '02',
            name: 'Visit our location',
            icon: marker,
            description: 'Brooklyn, NY 10036, United States',
            bg:'bg-[#3A4256]'
        },
        {
            id: '03',
            name: 'Contact us now',
            icon: phone,
            description: '+000 123 456789',
            bg:'bg-gradient-to-r to-cyan-500 from-blue-500'
        },
    ]
    return (
        <div className='mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white'>
            {
                info.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;