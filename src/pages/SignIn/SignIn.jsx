import { use, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { useLocation } from "react-router-dom";


function SignIn() {
    const location = useLocation();
    const user = location.state?.user;

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
        const checkMatchEmail = input.email === user?.email;
        const checkMatchPassword = input.password === user?.password;
 
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
            !passwordValid ||
            !checkMatchPassword ||
            !checkMatchEmail
          ) {
            return;
          }


  }

  console.log(checkMatchEmail);
  console.log(checkMatchPassword);

   function handleBlur(e) {
                setTouched({ ...touched,[e.target.name]: true});
            }
    


  return (
    <section className="auth-section" onSubmit={()=> setSubmitted(true)}>
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-sub">Sign in to your NovaTech account.</p>


        {/* TODO 5: Conditionally display this error message when 'error' has text */}

       
         
         
          {(touched.email || touched.password || submitted) && (!input.email || !input.password || !emailValid) ?  
              
              <div className="form-error">Please enter a valid email and a password with 6+ characters.</div> :
                 
              ((submitted || (input.password && input.email && emailValid) ) ? ( checkMatchPassword && checkMatchEmail ?  
                                                                                <div className="form-match">Email and Password Match.</div> : 
                                                                                <div className="form-error">Email or Password doesn't match.</div>) : null
              )}
                
        

        
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              // TODO 6: Bind value and onChange handler
              value={input.value}
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
              value={input.value}
              onBlur={handleBlur}
            />
          </label>
          <button onClick={handleChange} type="submit" className="btn-primary">
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
