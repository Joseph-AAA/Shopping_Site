import { use, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../components/Context/AuthContext";

function SignIn() {
    const location = useLocation();
    const user = location.state?.user;
    const navigate = useNavigate();
    const {signIn,authError} =useAuth();

  // console.log(user?.name);
  // TODO 1: Initialize state for form inputs (email, password)
   const [input , setInput] = useState({
        email : "",
        password : ""
   })
   const [touched , setTouched] = useState({
       email: false,
      password: false
   })
  //  console.log(touched.email)
  //  console.log(touched.password)
   const [submitted,  setSubmitted] = useState(false);



  // TODO 2: Initialize state for error messages (empty string)


        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim());
        const passwordValid = /^.{6,}$/.test(input.password.trim());
 
 
   // TODO 3: Write the handle change function to update form state dynamically
        function handleChange(e) {
 
          const {name , value} =e.target;
            setInput((prev)=>{
              return {
                  ...prev, [name] : value 
              }
          })
       }


    // TODO 4: Validate email and password, handle error state, and console.log the form data
  function handleSubmit(e) {
    e.preventDefault();
        setSubmitted(true);

          if (
            !input.email.trim() ||
            !input.password.trim() ||
            !emailValid ||
            !passwordValid 
        
          ) {
            return;
          }

          const success = signIn(
            input.email,
            input.password
           );

          if (!success) {
              return;
          }

           navigate("/");

  }


   function handleBlur(e) {
                setTouched({ ...touched,[e.target.name]: true});
            }
    


  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-sub">Sign in to your NovaTech account.</p>

        {authError && (
              <div className="form-error">
                  {authError}
              </div>
          )}

      {(touched.email || touched.password || submitted) &&
       (!input.email || !input.password || !emailValid || !passwordValid) && (
        <div className="form-error">
            Please enter a valid email and a password with 6+ characters.
        </div>
    )}
                
        

        
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              // TODO 6: Bind value and onChange handler
              value={input.email}
              onChange={handleChange}
              placeholder="you@example.com"
              onBlur={handleBlur}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              name="password"
              type="password"
              // TODO 7: Bind value and onChange handler
              placeholder="••••••••"
              onChange={handleChange}
              value={input.password}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn-primary">
              Sign In
          </button>
        </form>


        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </section>
  );
}


export default SignIn;
