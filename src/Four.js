import React from 'react'

export default function Four() {
    const items = ['Items1','Items2','Items3','Items4']
  return (
    <div>
        <ul>
            {items.map((items,index)=>{
                return <li key = {index}>{items}</li>
            })}
        </ul>
      
    </div>
  )
}
