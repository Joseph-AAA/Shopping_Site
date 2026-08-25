import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";


function SignUp() {
  // TODO 1: Initialize state for form inputs (name, email, password, confirm)
  // TODO 2: Initialize state for error messages (empty string)


  function handleChange(e) {
    // TODO 3: Write the handle change function to update form state dynamically
  }


  function handleSubmit(e) {
    e.preventDefault();
    // TODO 4: Write validation checks for name, email, password length, and password match.
    // If valid, clear error and console.log(form)
  }


  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-sub">Join NovaTech and shop the future today.</p>


        {/* TODO 5: Conditionally display this error message when 'error' has text */}
        <div className="form-error">Please fill out all fields correctly.</div>


        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            <span>Full name</span>
            <input
              name="name"
              type="text"
              // TODO 6: Bind value and onChange handler
              placeholder="Jane Doe"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              // TODO 7: Bind value and onChange handler
              placeholder="you@example.com"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              name="password"
              type="password"
              // TODO 8: Bind value and onChange handler
              placeholder="••••••••"
            />
          </label>
          <label>
            <span>Confirm password</span>
            <input
              name="confirm"
              type="password"
              // TODO 9: Bind value and onChange handler
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
