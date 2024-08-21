// React Router Dom Import
import { Outlet } from 'react-router-dom'

// Default Function
export default function AppLayout() {
  return (
    <div className='w-screen h-screen overflow-y-hidden'>
      <Outlet />
    </div>
  )
}
