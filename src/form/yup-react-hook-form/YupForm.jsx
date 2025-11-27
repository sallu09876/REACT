import React from 'react'
import './yupform.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; //validation library

//definiing the validation scheme
const schema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string.email('Invalid email').required('Email is required'),
    age: yup.number().positive().integer().required('Age is required')
})

const YupForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input
                {...register("name")}
                placeholder='Name'
            />
            <p>{errors.name?.message}</p>

            <input
                {...register("email")}
                placeholder='Email'
            />
            <p>{errors.email?.message}</p>

            <input
                {...register("age")}
                placeholder='Age'
            />
            <p>{errors.age?.message}</p>

            <button type='submit'>Submit</button>
            <button type='reset' onClick={() => reset()}>Reset</button>

        </form>
    )
}

export default YupForm
