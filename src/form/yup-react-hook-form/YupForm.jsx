import React, { useState } from 'react';
import './yupform.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation Schema
const schema = yup.object({
    name: yup.string().required("Name is required."),
    email: yup.string().email("Invalid email").required("Email is required"),
    age: yup
        .number()
        .typeError("Age must be a number")
        .positive("Age must be positive")
        .integer("Age must be an integer")
        .required("Age is required"),
});

const YupForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } =
        useForm({ resolver: yupResolver(schema) });

    const [alertMsg, setAlertMsg] = useState("");

    const showAlert = (msg) => {
        setAlertMsg(msg);

        setTimeout(() => {
            setAlertMsg("");
        }, 2000);
    };

    const onSubmit = (data) => {
        console.log(data);
        showAlert("Form submitted successfully!");
        reset();
    };

    const handleReset = () => {
        reset();
        showAlert("Form reset successfully!");
    };

    return (
        
        <div className="form-wrapper">

            {alertMsg && <div className="alert">{alertMsg}</div>}

            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name")} placeholder="Name" />
                <p className="error-text">{errors.name?.message}</p>

                <input {...register("email")} placeholder="Email" />
                <p className="error-text">{errors.email?.message}</p>

                <input {...register("age")} placeholder="Age" />
                <p className="error-text">{errors.age?.message}</p>

                <div className="button-group">
                    <button type="submit">Submit</button>
                    <button type="button" className="reset-btn" onClick={handleReset}>
                        Reset
                    </button>
                </div>

            </form>
        </div>


    );
};

export default YupForm;
