import React, { useContext } from 'react';
import { ContextProvider } from '../../../UserContext/UserContext';


const Login = () => {

    const { logInWithGoogle } = useContext(ContextProvider)

    const handleLoginWithGoogle =()=>{
        logInWithGoogle()
        .then(result => console.log(result.user))
        .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;
        console.log(userEmail, userPassword)
    }


    return (
        <div className='w-full md:w-96 border mx-auto'>
            <form className=' p-10  block mt-10' onSubmit={handleSubmit}>
                <h2 className='mb-5 text-3xl text-center'>Login</h2>
                <input type={'email'} name="userEmail" className="input input-ghost input-sm w-full bg-base-200"></input>
                <input type={'password'} name='userPassword' className="input input-ghost input-sm w-full bg-base-200 my-8"></input>
                <input type={'submit'} className='w-full btn btn-primary btn-sm'></input>
            </form>
            <div className='divider'>
                Or
            </div>
            <button className='bgn btn-primary w-4/5 block mx-auto btn-sm mb-5' onClick={handleLoginWithGoogle}>Google</button>
        </div>
    );
};

export default Login;