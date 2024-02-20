import React from 'react'

function DebtorData({name, amount, splitMethod, member}) {
  console.log(member)
  return (
    <div className='flex justify-between items-center py-1 px-4'>
      <div>
        <div>Name: {name}</div>
      </div>
      <div className='flex flex-col text-end'>
        <div>{splitMethod}</div>
        <div>{amount} THB</div>
      </div>
      {/* <div>memberID: {member.id}</div> */}
    </div>
  )
}

export default DebtorData