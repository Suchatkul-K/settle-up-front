import React, { useState } from 'react'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal'
import validateAddBot from "../validations/validate-add-bot.js"
import { toast } from 'react-toastify'
import * as mainApi from "../../../api/main.js"
import useMain from '../../../hooks/use-main.js'

function BotForm({circleId}) {
  const [input, setInput] = useState({ botName: '' })
  const [error, setError] = useState();
  const { loading, setLoading } = useMain()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errObj = validateAddBot(input);
      if (errObj) {
        return setError(errObj);
      }
      await mainApi.addBot(circleId,input);

      setLoading(!loading)

      toast.success("Add new member successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message)
    }
  };

  return (
    <Modal id={"add_bot_modal"} onSubmit={handleSubmit}>
      <div className="form-control items-center gap-6 w-full px-6">
        <div className="text-2xl font-semibold text-center">New Member</div>
        <input
          type="text"
          placeholder="What their name should be?"
          className="input input-bordered w-full"
          name="botName"
          value={input.botName}
          onChange={handleChange}
        />
        {error?.botName && (
                      <span className="flex text-error">
                        {error.botName}
                      </span>
                    )}

        <div className="flex justify-between w-full">
          <Button className={"w-full"}>Save</Button>
        </div>
      </div>
    </Modal>
  )
}

export default BotForm