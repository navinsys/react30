import React, { useState } from 'react'

export default function Five() {
    const [isToggled,setisToggled] = useState(false);
    const handleToggle = () => {
        setisToggled(!isToggled);
    }
  return (
    <div>
        <label >
            <input type="checkbox" onChange={handleToggle} />
        </label>
        <p>{ isToggled? "On":"Off"}</p>
      
    </div>
  )
}
