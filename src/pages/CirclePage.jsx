import React, { useState } from "react";
import Button from "../components/Button";
import { AddIcon } from "../icons";
import Modal from "../components/Modal";
import { createCircle } from "../api/circle";
import { toast } from "react-toastify";
import validateCreateCircle from "../features/circle/validations/validate-create-circle";
import CircleContextProvider from "../features/circle/context/CircleContext";
import CircleList from "../features/circle/components/CircleList";

function CirclePage() {
  const [input, setInput] = useState({ circleName: "" });
  const [error, setError] = useState();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errObj = validateCreateCircle(input);
      if (errObj) {
        return setError(errObj);
      }
      console.log("create circle: ", input.circleName);

      await createCircle(input);
      toast.success("Circle create successfully");
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };
  // <CircleContextProvider>
  return (
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="text-2xl font-semibold">My circles</div>
                <div>which circle are you looking for?</div>
                <CircleList />

                {/* create new circle */}
                <Button
                  className={"flex items-center"}
                  onClick={() =>
                    document.getElementById("create_circle_modal").showModal()
                  }
                >
                  <AddIcon className={"w-6 h-6"} />
                  Create a new circle
                </Button>
                <Modal id={"create_circle_modal"} onSubmit={handleSubmit}>
                  <div className="form-control items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-semibold">
                        Create a new circle
                      </div>
                      <div>What should we call our new circle?</div>
                    </div>

                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                      name="circleName"
                      value={input.circleName}
                      onChange={handleChange}
                    />
                    {error?.circleName && (
                      <span className="flex text-error">
                        {error.circleName}
                      </span>
                    )}
                    <Button>Create now!</Button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
  );
}
    {/* </CircleContextProvider> */}

export default CirclePage;
