import React, { useState } from "react";
import validateRegister from "../validations/validate-register";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/use-auth";

const initUserObj = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm() {
  const [input, setInput] = useState(initUserObj);
  const [error, setError] = useState();

  const { register } = useAuth()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errObj = validateRegister(input);
      if (errObj) {
        return setError(errObj);
      }

      await register(input);
      // setInput(initUserObj);
      toast.success("user register successfully")
      
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message)
    }
  };

  const handleCancel = () => {
    setInput(initUserObj);
    document.getElementById("my_modal_3").close();
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box p-1">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
            ✕
          </button>
        </form>

        <div className="card shrink-0 w-full bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                name="username"
                value={input.username}
                placeholder="username"
                className="input input-bordered"
                onChange={handleChange}
              />
              {error?.username && (
                <span className="flex text-error">{error.username}</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                value={input.email}
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                name="confirmPassword"
                value={input.confirmPassword}
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={handleChange}
              />
              {error?.confirmPassword && (
                <span className="flex text-error">{error.confirmPassword}</span>
              )}
            </div>

            <div className="form-control mt-6 gap-4">
              <button className="btn btn-primary text-xl font-semibold">
                Register
              </button>
              <hr />
              <span
                className="btn btn-secondary text-xl font-semibold"
                onClick={handleCancel}
              >
                Cancel
              </span>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default RegisterForm;
