import React from 'react'
import './login.css'
import { FaEnvelope,FaLock,FaEye,FaArrowRight } from 'react-icons/fa'

export default function Login() {
  return (
    <>
<div className="login_container">
<div className="head_sec">
<h3>Welcome Back!</h3>
<p>Login to continue to your account</p>
</div>
<form>
<div className="input_sec">
<label>Email Id</label>
<div className="input_box">
  <FaEnvelope className="icon" />
<input type="text" placeholder="Enter Your email"/>
</div></div>
 <div className="input_sec">
<label>Password</label>
<div className="input_box">
   <FaLock className="icon" />
<input type="password" placeholder="Enter your password"/>
<FaEye className="eye-icon" />
</div></div>
 <div className="input_sec">
<label>Login Types</label>
<div className="input_box">
<select>
<option>Select Login Type</option>
<option>🎓Student</option>
<option>👨‍🏫Mentor</option>
<option>🛡️Admin</option>
<option>👑SuperAdmin</option>
</select>
</div></div>
<div className="options">
<label> <input type="checkbox"/>Remember Me</label>
<a href="/">Forgot Password?</a>
</div>
<button className="btn_sec">Login <FaArrowRight /></button>
</form>
<div className="last_sec">
<p> Don't have an account?<a href="/"> Contact Administrator</a></p>
</div>
</div>
    </>
  )
}
