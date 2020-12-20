import React, { useState } from 'react'

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState(true)
  const [passwordError, setPasswordError] = useState(true)

  const [isLogged, setIsLogged] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username, password)

    !username ? setUsernameError(false) : setUsernameError(true)
    !password ? setPasswordError(false) : setPasswordError(true);

    (username && password) && setIsLogged(true)
  }

  return (

    <div>
      <div hidden={isLogged}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={username} onChange={(event) => setUsername(event.target.value)}
          />
          <span hidden={usernameError} style={{ color: 'red' }}>please enter username</span> <br />
          <input
            type='password'
            placeholder='password'
            value={password} onChange={(event) => setPassword(event.target.value)}
          />
          <span hidden={passwordError} style={{ color: 'red' }}>please enter password</span> <br />
          <button type='submit'>Login</button>

        </form>
      </div>
      <div hidden={!isLogged}>
        <h1>Welcom {username}</h1>
        <button onClick={() => setIsLogged(false)}>Log out</button>
      </div>
    </div>
  )
}
