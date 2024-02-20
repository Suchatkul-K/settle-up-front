import React from 'react'
import Button from '../../../components/Button'
import { AddIcon } from '../../../icons'
import BotForm from './BotForm'
import useMain from "../../../hooks/use-main"
import MemberContainer from './MemberContainer'

export default function MemberList() {
  const { circleId, circleMember } = useMain()
  // console.log(circleData?.members)
  console.log(circleMember)
  
  return (
    <div className="card shrink-0 w-full max-w-5xl drop-shadow-md bg-base-100">
      <div className="card-body min-w-full">
        {/* MemberList  */}
        {circleMember?.map(member=> (<MemberContainer key={member.id} name={member.name}/>))}
        
        {/* Add member option */}
        <Button
          className={"flex items-center"}
            onClick={() =>
              document.getElementById("add_bot_modal").showModal()
            }
        >
          <AddIcon className={"w-6 h-6"} />
          Add new member
        </Button>
        <BotForm circleId={circleId} />
      </div>
    </div>
  )
}