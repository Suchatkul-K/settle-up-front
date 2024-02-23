import React from 'react'
import * as constance from "../../../constance"
import useBill from '../../../hooks/use-bill'

function DebtorData({name, amount, splitMethod, isSummary=false, setInput, id}) {
  const { billSummary } = useBill()
  // console.log(billSummary)
  // console.log(member)

  const onDelete = () => {
    setInput((prev) => {
      const temp = { ...prev };
      console.log(temp.debtor.filter(el => el.id != id));
      return {...temp,debtor: temp.debtor.filter(el => el.id != id)};
    });
  };

  return (
    <div className='flex justify-between items-center py-1 px-4 group gap-2'>
      <div>
        <div>{name}</div>
      </div>
      <div className='flex flex-col text-end grow'>
        {/* <div>{(isSummary) ? constance.SPLITMETHOD.FIXED : splitMethod}</div> */}
        <div>{splitMethod}</div>
        <div>{(isSummary) ? `${(splitMethod == constance.SPLITMETHOD.FIXED) ? amount : amount * billSummary.valuePerShare} THB` : amount}</div>
      </div>

      {!isSummary && <div onClick={onDelete} className="hidden group-hover:block text-red-400 font-semibold hover:bg-base-200 rounded-btn px-2 py-1 cursor-pointer">
        delete
      </div>}
    </div>
  )
}

export default DebtorData