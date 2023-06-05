import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () =>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [user,setUser] = useState({})

    const user_setinator = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
        
      };

    const submit_handlinator = (event) =>{
        event.preventDefault()

        ////agregar aca el post a /signup. hace un alert si devuelve que no esta en la base de datos 
        console.log(user)
        actions.login_handlinator(user)
        
    }

    return(
        <>
            <div className="container mt-5">
                <form onSubmit={e => {submit_handlinator(e)}} >
                    <div className="mb-3">
                        <label htmlFor ="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={e => {user_setinator(e)}} required/>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={e => {user_setinator(e)}} required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login