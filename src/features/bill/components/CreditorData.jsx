import React from "react";

function CreditorData({ name, amount, setInput, id }) {
  // console.log(id);

  const onDelete = () => {
    setInput((prev) => {
      const temp = { ...prev };
      // console.log(temp.creditor.filter(el => el.id != id));
      return {...temp,creditor: temp.creditor.filter(el => el.id != id)};
    });
  };

  return (
    <div className="flex justify-between items-center py-4 px-4 group gap-2 max-h-14">
      <div>
        <div>{name}</div>
      </div>
      <div className="flex flex-col text-end grow">
        <div>{amount} THB</div>
      </div>

      <div 
      className="hidden group-hover:block text-red-400 font-semibold hover:bg-base-200 rounded-btn px-2 py-1 cursor-pointer"
      onClick={onDelete}
      >
        delete
      </div>
    </div>
  );
}

export default CreditorData;
