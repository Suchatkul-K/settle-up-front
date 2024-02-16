import React from 'react'

function Modal({ onSubmit,children,id, className }) {
    const finalClass = `card-body ${className}`
  return (
    <dialog id={id} className="modal">
      <div className="modal-box p-1">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
            ✕
          </button>
        </form>

        <div className="card shrink-0 w-full bg-base-100">
          <form className={finalClass} onSubmit={onSubmit}>
             {children}
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal