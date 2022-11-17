import React, { useState } from 'react';

const AppointmentOption = ({option, setModal,modal}) => {
    const {name, slots} = option;
    const [slot, setSlot] = useState(slots[0])  
    const handleChange =(e) =>{
        setSlot(modal.selectSlot=e.target.value)
    } 
    const handleModal = ()=>{
        const dataForModal = [{"name":name},{"slot":slot}]
        setModal(dataForModal)
    }

    return (
        <div className='min-h-full'>
            <div className="card shadow-lg">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    {
                        slots.length>1?
                            <>
                                <select className='select select-ghost' onChange={handleChange}>
                                    {
                                        slots.map(s => <option key={s}>{s}</option>)
                                    }
                                </select>

                                <p>{slots.length} space available</p>
                            </>
                    :
                    <p>No free slot</p>
                    }
                    <div className="card-actions justify-end">
                        <label 
                        htmlFor="bookYourAppointment" 
                        className="btn btn-primary text-white" 
                        disabled={slots.length > 1 ? false : true}
                        onClick={handleModal}
                        >BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;