import React from 'react';

const CustomerReview = ({review}) => {
    const {name, review: userReview, userImage, address} = review;
    return (
        <div>
            <div className="card shadow-xl rounded mx-3 md:mx-0">
                <div className="card-body">
                    <p>{userReview}.</p>
                    <div className="card-actions justify-start items-center mt-2">
                        <img src={userImage} alt='' className='h-16 w-16 border-indigo-600 border-2 rounded-full'></img>
                        <div className='ml-2'>
                            <p>{name}</p>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;