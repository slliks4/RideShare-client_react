// React Router Dom Import
import { Outlet } from 'react-router-dom';
// Components Import
import NavBar from '../components/NavBar';

// Default Function
export default function AppLayout() {
  return (
    <main className='w-[calc(100dvw)] h-[calc(100dvh)] relative overflow-y-scroll overflow-x-hidden no-scrollbar bg-accent-emerald text-white'>
      <section className='relative w-full h-[calc(90dvh)] overflow-y-scroll overflow-x-hidden no-scrollbar'>
        <Outlet />
      </section>
      <NavBar />
    </main>
  )
}
