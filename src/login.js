
import { Link } from "react-router-dom";
import Validation from "./loginValidation";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Login() {
    //to store the values of login
    const[values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const[errors,setErrors] = useState({});//to store the errors
    const handleInput= (event) => {
        setValues(prev=>({...prev,[event.target.name]:event.target.value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        //console.log(values)
        if( errors.email === "" && errors.password === ""){
            axios.post('http://localhost:9000/api/users/loginn',values)
            .then((res)=>{
               // console.log(res)
                if(res.data === "Success")
                navigate('/home');
            else{
                alert("no record found")
            }
            })
            .catch((err)=>{
                console.log(err)
            });
            
    }
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
      <h2>Sign-in</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="enter email" name="email"
              onChange={handleInput}//to update the values
              className="form-control rounded-0"
              
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="enter password" name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
             {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type='submit' className="btn btn-success w-100 rounded-0">Login</button>
          <p> You are agree to our terms and conditons</p>
          <Link to ="/signup"className="btn btn-defaultnborder w-100 bg-light rounded-0 text-decoration-none">
            Register
            </Link> 
        </form>
      </div>
    </div>
  );
}

export default Login;
