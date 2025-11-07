import React, { useState } from 'react'

const SimpleForm = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required !')
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError('Email is invalid !')
        } else {
            setError('');
            alert('Form submitted successfully');
            console.log('Form submitted', email);

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    placeholder='Enter your email here...'
                    onChange={(e) => setEmail(e.target.value)}
                /> <br /> <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
