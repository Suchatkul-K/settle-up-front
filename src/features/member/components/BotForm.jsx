import React from 'react'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal'

function BotForm() {
  return (
    <Modal id={"add_bot_modal"} onSubmit={() => {}}>
      <div className="form-control items-center gap-6 w-full px-6">
        <div className="text-2xl font-semibold text-center">New Member</div>
        <input
          type="text"
          placeholder="What their name should be?"
          className="input input-bordered w-full"
          name="botName"
          //   value={input.botName}
          //   onChange={handleChange}
        />
        {/* {error?.botName && (
                      <span className="flex text-error">
                        {error.botName}
                      </span>
                    )} */}

        <div className="flex justify-between w-full">
          <Button className={"w-full"}>Save</Button>
        </div>
      </div>
    </Modal>
  )
}

export default BotForm