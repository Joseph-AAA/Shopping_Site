import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import SignIn from "../SignIn/SignIn";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();
   
  // TODO 1: Initialize state for form inputs (name, email, password, confirm)
  const [input, setInput] = useState({
        name : "",
        email : "",
        password : "",
        confirm : ""
     })

   const [touched , setTouched] = useState({
        name :false,
        email: false,
        password: false,
        confirm:false 
   })

    
  
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim());
  const passwordValid = /^.{6,}$/.test(input.password.trim());   
  const passwordMatch = input.confirm.match(input.password);
  const [submitted, setSubmitted]  = useState(false);

  // TODO 2: Initialize state for error messages (empty string)


  function handleChange(e) {
    // TODO 3: Write the handle change function to update form state dynamically
        const {name,value} = e.target;

          setInput((prev)=>{
              return {...prev, [name] : value}
        })
  }


  function handleSubmit(e) {
    e.preventDefault();
    // TODO 4: Write validation checks for name, email, password length, and password match.
    // If valid, clear error and console.log(form)
    setSubmitted(true);
      if(!input.name.trim() || 
         !input.email.trim()||
         !input.password.trim()||
         !input.confirm.trim() ||
         !emailValid || 
         !passwordValid ||
         !passwordMatch
         ){
          return;
      }else{
        console.log(input)
           navigate("/signin", {
            state: { user: input }
          });
      }

  }

  function handleBlur(e) {
                setTouched(()=>{
                  return { ...touched,[e.target.name]: true}
                });
            }


  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-sub">Join NovaTech and shop the future today.</p>


        {/* TODO 5: Conditionally display this error message when 'error' has text */}


        {/* { validation() ? <div className="form-error">Please fill out all fields correctly.</div> : "" } */}

        <form onSubmit={handleSubmit} className="auth-form">

          <label>
            <div className="error_label-box">
              <span>Full name</span>
              {(touched.name || submitted) && !input.name &&  <span className="error-message">This Field Is Required</span>}
            </div>
            <input
              name="name"
              type="text"
              // TODO 6: Bind value and onChange handler
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Jane Doe"
            />
          </label>


          <label>
            <div className="error_label-box">
              <span>Email</span>
              {(touched.email || submitted) && !input.email ?  <span className="error-message">This Field Is Required</span> :
                input.email && !emailValid  && <span className="error-message">Please Insert Valid Email</span>}
            </div>
            <input
              name="email"
              type="email"
              // TODO 7: Bind value and onChange handler
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
            />
          </label>

          <label>
            <div className="error_label-box">
              <span>Password</span>
              {(touched.password || submitted) && !input.password ?  <span className="error-message">This Field Is Required</span> :
                input.password && !passwordValid  && <span className="error-message">Enter A Valid Password. Example : abC13@</span> }
            </div>
            
            <input
              name="password"
              type="password"
              // TODO 8: Bind value and onChange handler
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
            />
          </label>

          <label>
            <div className="error_label-box">
              <span>Confrim Password</span>
              {(touched.confirm || submitted) && !input.confirm ?  <span className="error-message">This Field Is Required</span>  :
                input.confirm && !passwordMatch  && <span className="error-message">Passwords do not match.</span> 
              }
              {input.confirm && passwordMatch && <span className="match-password">Passwords match. ✅</span> }
            </div>
            
            <input
              name="confirm"
              type="password"
              // TODO 9: Bind value and onChange handler
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
            />
          </label>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>


        <p className="auth-switch">
          Already a member? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </section>
  );
}


export default SignUp;
