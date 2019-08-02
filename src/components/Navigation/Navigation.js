import React from 'react'

export default function Navigation({onRouteChange}) {
  return (
    <div style={{display:"flex", justifyContent:"flex-end"}}>
      <nav>
        <p onClick={() => onRouteChange("signin")} className="f3 link dim black underline pa3 pointer">Sign out</p>
      </nav>
    </div>
  )
}
