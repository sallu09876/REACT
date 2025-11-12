import React, { use, useEffect, useState } from "react";
import "./crud.css";
const Crud = () => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        age: "",
    });
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    //load users from Loacalstorage
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.error("Error parsinf data", error)
                localStorage.removeItem("users") //clear corrupted data
            }
        }
        setIsLoading(true); //mark as load
    }, [])

    // save users to localStorage
    useEffect(() => {
        if (isLoading) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users, isLoading]);

    //update formData field dynamically as user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    //validation
    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'Name is required!';

        if (!email) newErrors.email = 'Email is required!'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            newErrors.email = "email invalid";

        if (!age) newErrors.age = "age is required";
        else if (isNaN(age) || age < 1 || age > 120)
            newErrors.age = "age must be between 1 and 120";

        return newErrors;
    }

    //form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }
    }

    // if (editMode) {
    // }

    return (
        <div className="formnew">
            <h1>React CRUD-Simple Form</h1>
            <form >
                {/* name */}
                <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="your name" />
                </div>
                {/* email */}
                <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
                </div>
                {/* age */}
                <div>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="age" />
                </div>

                <button type="submit">{editMode ? 'Update User' : 'Add User'}</button>

            </form>
        </div>
    )
};

export default Crud;