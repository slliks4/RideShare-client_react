import React from 'react'
import { AccountIcon, ActivityIcon, HomeIcon } from '../../imports/icons'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav-bar'>
        <NavLink to={''}>
            <HomeIcon className='text-lg' />
            <span>home</span>
        </NavLink>
        <NavLink to={'activity'}>
            <ActivityIcon className='text-lg' />
            <span>activity</span>
        </NavLink>
        <NavLink to={'account'}>
            <AccountIcon className='text-lg' />
            <span>account</span>
        </NavLink>
    </nav>
  )
}
