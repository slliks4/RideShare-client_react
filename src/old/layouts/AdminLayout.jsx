// React Router Dom Imports
import { Outlet } from "react-router-dom";
// Components Import
import AdminHeader from "../components/__admin/AdminHeader";
import AdminNav from "../components/__admin/AdminNav";

// Default Function
export default function AdminLayout() {
  console.log('Admin Layout Mounted');

  return (
    <main className='w-screen h-[calc(100dvh)] relative flex overflow-y-scroll overflow-x-hidden no-scrollbar'>
      <AdminNav />
      <div  className="absolute w-[calc(80vw)] h-[calc(100dvh)] left-[calc(20vw)] overflow-y-scroll overflow-x-hidden no-scrollbar bg-body text-txt-800">
        <AdminHeader />
        <section className="relative mt-16 p-4 border-2 border-purple-950">
          <Outlet />
        </section>
      </div>
    </main>
  )
}