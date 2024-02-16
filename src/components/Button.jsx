import React from 'react'

function Button({children, bgColor, onClick, className, type}) {
    const finalClass = `btn btn-${bgColor || "primary"} text-xl font-semibold ${className}`

  return (
    <button className={finalClass} onClick={onClick} type={type}>
            {children}
    </button>
  )
}

export default Button