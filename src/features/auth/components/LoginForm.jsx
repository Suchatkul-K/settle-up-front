import React, { useState } from "react";
import { toast } from "react-toastify";
import { storeToken } from "../../../utils/local-storage";
import validateLogin from "../validations/validate-login";
import useAuth from "../../../hooks/use-auth";

const initial = {
  email: "",
  password: "",
};

function LoginForm() {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState();

  const { login, loading, setLoading } = useAuth()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errObj = validateLogin(input);
      if (errObj) {
        return setError(errObj);
      }
      await login(input);
      // setInput(initial);
      setLoading(!loading)

      toast.success("Log in successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message)
    }
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
          />
          {error?.email && (
                <span className="flex text-error">{error.email}</span>
            )}
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
          />
          {error?.password && (
                <span className="flex text-error">{error.password}</span>
            )}
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
