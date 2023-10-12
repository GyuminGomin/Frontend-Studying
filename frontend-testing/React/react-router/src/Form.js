import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('이름: ', name);
        console.log('이메일: ', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 :
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <br />
            <label>
                이메일 :
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <button type="submit">제출</button>
        </form>
    );
};

export default Form;
