import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log('submit')
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            value={input.email}
            // type="email"
            placeholder="email"
            className="input input-bordered"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            value={input.password}
            type="password"
            placeholder="password"
            className="input input-bordered"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mt-6 gap-4">
          <button className="btn btn-secondary text-xl font-semibold">
            Login
          </button>
            <hr />
          <div
          className="btn btn-secondary text-xl font-semibold "
          onClick={() => document.getElementById("my_modal_3").showModal()}
          type="button"
        >
          Create new account
        </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
