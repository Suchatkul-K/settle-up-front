import { useState } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import { toast } from "react-toastify";
import { updateCircle } from "../../../api/circle";
import useCircle from "../../../hooks/use-circle";

function EditCircleModal({ circle }) {
  const editModalId = `edit_circle_${circle.id}`;
  const [input, setInput] = useState({ circleName: circle.circleName });
  // console.log(circle);
  const { circles, setCircles } = useCircle();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("edit circle: ", input.circleName);
      if( circle.circleName == input.circleName ) {
        document.getElementById(editModalId).close()
        return toast.error("Invalid: No change detected")
      }

      await updateCircle({ id: circle.id, data: input });
      setCircles(
        [...circles].map((el) =>
          el.id == circle.id ? { ...el, circleName: input.circleName } : el
        )
      );
      toast.success("Circle name edited");
      document.getElementById(editModalId).close()
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <button
        className="w-14 h-9"
        onClick={() => document.getElementById(editModalId).showModal()}
      >
        edit
      </button>
      
      <Modal
        id={editModalId}
        onSubmit={handleSubmit}
        className={"w-full h-80 justify-center"}
      >
        <div className="form-control items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-semibold">Change circle name</div>
          </div>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="circleName"
            value={input.circleName}
            onChange={handleChange}
          />

          {/* include duplicate name */}
          <Button>Update</Button>
        </div>
      </Modal>
    </>
  );
}

export default EditCircleModal;
