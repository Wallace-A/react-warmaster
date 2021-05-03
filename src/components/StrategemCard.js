import React from 'react'

export const StrategemCard = ({strategem}) => {
  return (
    <div className="stratgem-container">
      <h3>{strategem.name}</h3>
      <p>{strategem.description}</p>
    </div>
  )
}

