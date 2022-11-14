import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import CustomerReview from './CustomerReview';
import customerReviewBG from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    const customerReview =[
        {
            id:'01',
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address:'California',
            userImage: people1
        },
        {
            id: '02',
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            userImage:people2
        },
        {
            id: '03',
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            userImage:people3
        }
        
    ]
    return (
        <div className='mx-auto container'>
            <div className='flex flex-row-reverse justify-between mt-10 mx-3 md:mx-auto items-center'>
                <img src={customerReviewBG} className='w-1/4 md:w-1/5' alt=''></img>
                <div>
                    <h2 className='text-primary text-3xl'>Testimonial</h2>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    customerReview.map(review => <CustomerReview review={review} key={review.id}></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Testimonial;