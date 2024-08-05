import { useRef } from "react";
import LandingNav from "./landingNav";
import '../../css/landing.css';
const Login = () => {
    let email = useRef()
    let password = useRef()
    let login = async(e) => {
        e.preventDefault();
        let data = {
            email: email.current.value,
            password:password.current.value
        }
        if(data){
            alert("Invalid Credential");
            return;
        }
        console.log(data);
    }
    return (<div className="Login">
        <LandingNav/>
        <div className="login_div">
                <div className="col-lg-5 bg-light p-lg-5">
                    <form action="" onSubmit={login} className="">
                        <h1 className="">Login</h1>
                        <div className="email text-black form-floating m-lg-3">
                            <input type="email" id="floatingEmail" ref={email} name="email" placeholder="Email" className="form-control  pt-4" required />
                            <label for="floatingEmail"> Email </label>
                        </div>
                        <div className="password text-black form-floating m-lg-3">
                            <input type="password" id="floatingPassword" ref={password} name="password" placeholder="Password" className="form-control  pt-4" required />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="text-center m-lg-3">
                            <button className="btn btn-outline-success w-100">LogIn</button>
                        </div>
                    </form>                
            </div>
        </div>
       
    </div>);
}

export default Login;