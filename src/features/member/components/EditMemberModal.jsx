import { useState } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import { toast } from "react-toastify";
import { UpdateIcon } from "../../../icons";
import { getCircleMemberByCircleId, updateBot } from "../../../api/main";
import useMain from "../../../hooks/use-main";
import * as constance from "../../../constance";

export default function EditMemberModal({ member }) {
  const editModalId = `edit_member_${member.id}`;
  const [input, setInput] = useState({ botName: member.name });
  const { circleId, setCircleMember } = useMain();
//   console.log(member);
//   console.log(circleId)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("edit member: ", input.botName);
      if (member.name == input.botName.trim()) {
        document.getElementById(editModalId).close();
        return toast.error("Invalid: No change detected");
      }

      if (member.role != constance.MEMBERROLE.GUEST) {
        document.getElementById(editModalId).close();
        return toast.error("Invalid: Cannot edit user member");
      }
      await updateBot(circleId, member.id, input);

      //refresh list
      getCircleMemberByCircleId(circleId)
        // .then(res => console.log(res.data.members))
        .then((res) => setCircleMember(res.data.members))
        .catch((err) => console.log(err));

      toast.success("Member name edited");
      document.getElementById(editModalId).close();
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <div
        className="hidden group-hover:block font-semibold hover:bg-base-300 bg-base-200 rounded-btn px-2 py-1 cursor-pointer"
        onClick={() => document.getElementById(editModalId).showModal()}
      >
        <UpdateIcon className={"w-6 h-6"} />
      </div>

      <Modal
        id={editModalId}
        onSubmit={handleSubmit}
        className={"w-full h-80 justify-center"}
      >
        <div className="form-control items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-semibold">Change member name?</div>
          </div>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="botName"
            value={input.botName}
            onChange={handleChange}
          />

          {/* include duplicate name */}
          <Button>Update</Button>
        </div>
      </Modal>
    </>
  );
}
