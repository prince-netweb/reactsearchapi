import React from 'react'
import { Link } from 'react-router-dom'
const Linkpage = () => {
  return (
    <div>
        <h1>Open <Link to="/search">search</Link></h1>
    </div>
  )
}

export default Linkpage