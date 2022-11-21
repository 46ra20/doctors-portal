import React from 'react';
import {useForm} from 'react-form-hook';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("name"));

    return (
        <div>
            <form className='w-full md:w-96 p-10 border block mx-auto mt-10' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='mb-5 text-3xl text-center'>Register</h2>
                <input type={'name'} {...register('userName')} className="input input-ghost input-sm w-full bg-base-200" placeholder='Your name'></input>

                <input 
                type={'file'} 
                name="userPhoto" 
                className=" my-8 input input-ghost input-sm w-full bg-base-200" placeholder='Your photo'
                accept="image/png, image/gif, image/jpeg"></input>

                <input type={'email'} name="userEmail" className="input input-ghost input-sm w-full bg-base-200" placeholder='Your Email ' required></input>

                <input type={'password'} name='userPassword' className="input input-ghost input-sm w-full bg-base-200 my-8" placeholder='######' required></input>
                <input type={'submit'} className='w-full btn btn-primary btn-sm'></input>
            </form>
        </div>
    );
}

export default Register;