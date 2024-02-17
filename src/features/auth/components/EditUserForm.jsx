import React, { useState } from 'react'
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/use-auth';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';

function EditUserForm() {
    const { authUser, setAuthUser, updateUser } = useAuth();

    const editModalId = `edit_user_${authUser.id}`;
    const [input, setInput] = useState({ username: authUser.username });
    // console.log(user);
  
    const handleChange = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        if( authUser.username == input.username ) {
          document.getElementById(editModalId).close()
          return toast.error("Invalid: No change detected")
        }
  
        await updateUser({ id: authUser.id, data: input });
        toast.success("User name edited");
        document.getElementById(editModalId).close()
      } catch (err) {
        toast.error(err.response?.data.message);
      }
    };

  return (
    <>
      <button
        className="btn btn-ghost font-medium justify-start hover:bg-base-200"
        onClick={() => document.getElementById(editModalId).showModal()}
      >
        Edit profile
      </button>
      
      <Modal
        id={editModalId}
        onSubmit={handleSubmit}
        className={"w-full h-80 justify-center"}
      >
        <div className="form-control items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-semibold">Change user name</div>
          </div>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="username"
            value={input.username}
            onChange={handleChange}
          />

          {/* include duplicate name */}
          <Button>Update</Button>
        </div>
      </Modal>
    </>
  )
}

export default EditUserForm