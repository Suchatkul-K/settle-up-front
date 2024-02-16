import React from 'react'
import Button from '../../../components/Button'
import { AddIcon } from '../../../icons'
import BotForm from './BotForm'

export default function MemberList() {
  return (
    <div className="card shrink-0 w-full max-w-5xl drop-shadow-md bg-base-100">
      <div className="card-body min-w-full">
        MemberList
        <div>Member container</div>
        <div>Member container</div>
        <div>Member container</div>
        <div>Member container</div>
        <div>Member container</div>
        <Button
          className={"flex items-center"}
            onClick={() =>
              document.getElementById("add_bot_modal").showModal()
            }
        >
          <AddIcon className={"w-6 h-6"} />
          Add new member
        </Button>
        <BotForm />
      </div>
    </div>
  )
}