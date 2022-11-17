import React, { useContext } from 'react';
import { ContextProvider } from '../../../UserContext/UserContext';

const AppointmentModal = ({modal}) => {
    
    const getData = useContext(ContextProvider)
    console.log(getData);
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookYourAppointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookYourAppointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{modal[0]?.name}</h3>
                    <form>
                        <input className='input input-sm input-ghost w-full bg-base-200' type={'text'} value={`${modal.date.toDateString()}`} readOnly></input>
                        <input className='input input-sm input-ghost w-full bg-base-200 my-5' type={'text'} value={`${modal[1]?.slot}`} readOnly></input>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="bookYourAppointment" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;