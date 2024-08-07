import { useState } from "react";
import '../../css/landing.css';
import LandingNav from "./landingNav";
const SignupFormPage=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data ={ name, email, phoneNumber, password};
      if (data) {
        console.log(data);
      } 
    } else {
      console.log('Confirm Password field must be the same as the Password field');
    }
  };

  return (
    <div>
        <LandingNav/>
        <div className="signup-form-container">
        
        <form className="signup-form" onSubmit={handleSubmit}>
            <label>Hi there! My name is</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>Here's my email address:</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label>Here's my phone number:</label>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label>And here's my password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <label>Confirm password:</label>
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button className="btn btn-outline-success" type="submit">Sign me up!</button>
        </form>
        </div>
    </div>
  );
}

export default SignupFormPage;
