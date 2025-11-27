import React from "react";
import { useForm } from "react-hook-form";
import "./wfh.css";

const WorkForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        trigger
    } = useForm();

    // --------------------------
    // SUBMIT FUNCTION
    // --------------------------
    const onSubmit = () => {
        alert("Thank you! Your details have been submitted 😊");
        reset();
    };

    // Custom submit button handler
    const Submitbtn = async (e) => {
        e.preventDefault(); // stop default submit

        const isValid = await trigger(); // validate all fields NOW

        if (isValid) {
            handleSubmit(onSubmit)(); // manually call submit
        } else {
            alert("Looks like some details are missing. Please complete the form 😊");
        }
    };

    // --------------------------
    // RESET FUNCTION FIXED
    // --------------------------
    const resetbtn = (e) => {
        e.preventDefault();
        alert("All fields cleared! You can start fresh now 😊");
        reset();
    };

    return (
        <form className="premium-form">
            <h2 className="title">React Hook Form</h2>

            <div className="form-grid">

                {/* Name */}
                <div className="form-group">
                    <label>Name</label>
                    <input
                        {...register("name", { required: "Your name is required" })}
                        placeholder="Enter your name"
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format",
                            },
                        })}
                        placeholder="example@gmail.com"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        {...register("phone", {
                            required: "Phone number is required",
                            minLength: { value: 10, message: "Phone must be 10 digits" },
                            maxLength: { value: 10, message: "Phone must be 10 digits" },
                        })}
                        placeholder="9876543210"
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>

                {/* Age */}
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        {...register("age", {
                            required: "Age is required",
                            min: { value: 18, message: "Minimum age is 18" },
                        })}
                        placeholder="18+"
                    />
                    {errors.age && <p>{errors.age.message}</p>}
                </div>

                {/* Gender */}
                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Male"
                                {...register("gender", { required: "Select gender" })}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Female"
                                {...register("gender", { required: "Select gender" })}
                            />
                            Female
                        </label>
                    </div>
                    {errors.gender && <p>{errors.gender.message}</p>}
                </div>

                {/* Country */}
                <div className="form-group">
                    <label>Country</label>
                    <select
                        {...register("country", { required: "Country is required" })}
                    >
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="UAE">UAE</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                    {errors.country && <p>{errors.country.message}</p>}
                </div>

                {/* Address */}
                <div className="form-group full-width">
                    <label>Address</label>
                    <textarea
                        rows="3"
                        {...register("address", { required: "Address is required" })}
                        placeholder="Enter full address"
                    />
                    {errors.address && <p>{errors.address.message}</p>}
                </div>

                {/* Password */}
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password required",
                            minLength: { value: 6, message: "Min 6 characters" },
                        })}
                        placeholder="Enter password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirm password",
                            validate: (value) =>
                                value === watch("password") || "Passwords do not match",
                        })}
                        placeholder="Confirm password"
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>

            </div>

            {/* BUTTONS */}
            <div className="button-group">
                <button type="button" className="btn-primary" onClick={Submitbtn}>
                    Submit
                </button>

                <button type="button" className="btn-reset" onClick={resetbtn}>
                    Reset
                </button>
            </div>
        </form>
    );
};

export default WorkForm;
