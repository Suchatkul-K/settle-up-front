import React from 'react'

function CreditorData({name, amount}) {
  return (
    <div className='flex justify-between items-center py-4 px-4'>
      <div>
        <div>Name: {name}</div>
      </div>
      <div className='flex flex-col text-end'>
        <div>{amount} THB</div>
      </div>
      {/* <div>memberID: {member.id}</div> */}
    </div>
  )
}

export default CreditorData