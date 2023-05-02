import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div><footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-5">
    <div >
      <Link to="/" className="mb-3 mb-md-0 text-muted text-decoration-none lh-1">
        
      </Link>
      <span className="text-muted">© 2023 FoodieMania, Mukul Ramdev  Inc</span>
    </div>

  </footer></div>
  )
}

export default Footer