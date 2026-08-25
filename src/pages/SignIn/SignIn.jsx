import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";


function SignIn() {
  // TODO 1: Initialize state for form inputs (email, password)
  // TODO 2: Initialize state for error messages (empty string)


  function handleChange(e) {
    // TODO 3: Write the handle change function to update form state dynamically
  }


  function handleSubmit(e) {
    e.preventDefault();
    // TODO 4: Validate email and password, handle error state, and console.log the form data
  }


  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-sub">Sign in to your NovaTech account.</p>


        {/* TODO 5: Conditionally display this error message when 'error' has text */}
        <div className="form-error">Please enter a valid email and a password with 6+ characters.</div>


        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              // TODO 6: Bind value and onChange handler
              placeholder="you@example.com"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              name="password"
              type="password"
              // TODO 7: Bind value and onChange handler
              placeholder="••••••••"
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
