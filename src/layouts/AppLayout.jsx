// React Router Dom Import
import { Outlet } from 'react-router-dom';

// Components Import
import NavBar from '../components/NavBar';

// Default Function
export default function AppLayout() {
  return (
    <main className='w-screen h-screen relative overflow-y-scroll overflow-x-hidden no-scrollbar bg-accent-emerald text-white'>
      <section className='relative w-full h-[calc(90vh)] overflow-y-scroll overflow-x-hidden no-scrollbar'>
        <Outlet />
      </section>
      <NavBar />
    </main>
  )
}
