import React from 'react'
import useAuthentication from '../../hooks/auth/useAuthentication';

export default function AdminHeader() {
  const { logout } = useAuthentication();
  return (
    <header className='fixed top-0 h-16 w-[calc(80vw)] flex items-center justify-between px-6 bg-white text-txt-800 shadow border-2 border-purple-950'>
      <h1>Welocome Admin</h1>
      <button onClick={async()=> await logout()}>Logout</button>
    </header>
  )
}
