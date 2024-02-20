import React from 'react'
import Avatar from "../../../components/Avatar"

function MemberContainer({ name }) {
  return (
    <div className='w-full flex justify-between items-center border border-black p-2'>
        <div className='flex gap-4'>
            <Avatar width={"member"} name={name[0]}/>
            <div>
                <div className='text-xl font-semibold'>
                    {name}
                </div>
                All spending
            </div>
        </div>
        <div>
            999 THB
        </div>
    </div>
  )
}

export default MemberContainer