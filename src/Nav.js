
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <nav>
      <ul>
        <Link to='/Login'>
          <li>Login</li>
        </Link>
        <Link to='/Home'>
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  )
}
