import React from 'react';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign Up</h2>

          {/* Username Field */}
          <div className="form-control">
            <label className="label" htmlFor="username">
              <span className="label-text">Username</span>
            </label>
            <input type="text" id="username" placeholder="Username" className="input input-bordered" />
          </div>

          {/* Email Field with Hawk Email Validation */}
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input input-bordered"
              pattern=".+@hawk\.iit\.edu"
              title="You need to input your Hawk email to create an account"
              required
              onInvalid={e => e.target.setCustomValidity('You need to input your hawk email to create an account')}
              onInput={e => e.target.setCustomValidity('')}
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" placeholder="Password" className="input input-bordered" />
          </div>

          {/* Confirm Password Field */}
          <div className="form-control">
            <label className="label" htmlFor="confirm-password">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" id="confirm-password" placeholder="Confirm Password" className="input input-bordered" />
          </div>

          {/* Sign Up Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

