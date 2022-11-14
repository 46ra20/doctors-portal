import React from 'react';

const InfoCard = ({card}) => {
    const {icon, name, description,bg} = card;
    return (
        <div className={`${bg} shadow lg:flex rounded-xl mx-3 lg:mx-0`}>
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl block md:inline mx-auto w-20 h-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;