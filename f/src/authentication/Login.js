import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login/css/main.css"
import "./login/css/util.css"

export const Login = () => {
	const navigate = useNavigate()

	const [email,setemail]=useState('')

	const [password,setPassword]=useState('')

	const loginuser= async(e)=>{
		e.preventDefault()

		const res= await fetch('/signin',{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({email,password
			})
		})

		const data=res.json()

		if (res.status === 400 || !data) {
			window.alert("invalid credentials")
		} else {
			window.alert("Login successfull")
			navigate('/home')
		}
	}
	// const login=(e)=>{
	// 	e.preventDefault()
	
	// 	console.log(`email: ${email} \nPassword: ${password}`);
		// alert(`email: ${email}  \nPassword: ${password} `)
	// }
  return (
    <div >
        <div class="limiter ">
		<div class="container-login100  p-t-85 " >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-54">
				<form method='POST' class="login100-form validate-form">
					<span class="login100-form-title p-b-20">
						Login
					</span>

					<div class="wrap-input100 validate-input m-b-15" data-validate = "email is reauired">
						<span class="label-input100">Email</span>
						<input class="input100" type="text" name="email" placeholder="Type your email"
						value={email}
							onChange={(e)=> setemail(e.target.value) }
						/>
						<span class="focus-input100" ></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						
						<input class="input100" type="password" name="password" placeholder="Type your password"
						value={password}
						onChange={(e)=>setPassword(e.target.value)}
						/>
						<span class="focus-input100" ></span>
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" name='login' onClick={loginuser}>
								Login
							</button>
						</div>
					</div>

					<div class="txt1 text-center p-t-30 p-b-20">
						<span>
							Or Sign Up Using
						</span>
					</div>

					<div class="flex-c-m">
						<a href="#" class="login100-social-item bg1">
							<i class="fa fa-facebook"></i>
						</a>

						<a href="#" class="login100-social-item bg2">
							<i class="fa fa-twitter"></i>
						</a>

						<a href="#" class="login100-social-item bg3">
							<i class="fa fa-google"></i>
						</a>
					</div>

					<div class="flex-col-c p-t-15">
						<span class="txt1 p-b-17">
							Or Sign Up Using
						</span>

						<Link to="/signup" class="txt2">
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
  </div>
  )
}
export default Login