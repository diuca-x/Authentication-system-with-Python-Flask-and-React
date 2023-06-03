import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () =>{
    const navigate = useNavigate()
    const [user,setUser] = useState({})
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submit_handlinator = (event) =>{
        event.preventDefault()
        if (password != confirmPassword){
            alert('Passwords dont match');
        } else{
            setUser({...user, "password": password})

            //agregar aca el post a /signup. hace un alert si devuelve que ya esta en la base de datos 
            navigate('/', { replace: true });
        }
    }

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={e => {submit_handlinator(e)}} >
                    <div className="mb-3">
                        <label htmlFor ="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={e => {setUser({ ...user, "email": e.target.value })}} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password1" onChange={e => {setPassword(e.target.value)}} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Repeat Password</label>
                        <input type="password" className="form-control" id="password2" onChange={e => {setConfirmPassword(e.target.value)}} required/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup