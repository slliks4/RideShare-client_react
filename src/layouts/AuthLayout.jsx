// React Router Dom Import
import { NavLink, Outlet } from "react-router-dom";

// Images Import
import { logo } from "../imports/images";

// Default Function
export default function AuthLayout() {
  return (
    <main className="w-full h-screen overflow-y-scroll overflow-x-hidden no-scrollbar bg-white text-white">
      <div className="w-full h-[calc(40vh)] fixed z-10">
        <img 
          src={logo} 
          alt="rccg mount zion logo" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-20 w-full h-[calc(105vh)] overflow-y-scroll mt-[calc(40vh)] pt-[calc(5vh)] rounded-t-3xl custom-box-shadow bg-accent-emerald">
        <nav className="w-full h-fit p-4 flex justify-between items-center">
          <h3 className="text-3xl text-accent-teal font-pacifico">Ride Share</h3>
          <div>
            <NavLink to={'login'} className={'inline-block w-fit bg-secondary py-2 px-4 rounded-btn shadow-lg capitalize opacity-50 mr-2'}>Login</NavLink>
            <NavLink to={'register'} className={'inline-block w-fit bg-secondary py-2 px-4 rounded-btn shadow-lg capitalize opacity-50'}>register</NavLink>
          </div>
        </nav>
        <section className="p-5">
          <Outlet />
        </section>
      </div>
    </main>
  )
}
