// Page Import
import ErrorPage from "../ErrorPage";

// Components Import
import HomeRider from "../../components/__app/__rider/HomeRider";
import HomeDriver from '../../components/__app/__driver/HomeDriver';
import useAuthentication from '../../hooks/auth/useAuthentication';

// Default Function
export default function HomePage() {
  const { logout } = useAuthentication();

  return (
    <>    
      <header className="w-full h-[calc(10dvh)] fixed z-10 flex items-center px-4 bg-accent-emerald border-b border-txt-600">
        <h3 className="text-3xl text-accent-teal font-pacifico capitalize">welcome admin</h3>
        <button onClick={async()=> await logout()}>logout</button>
      </header>
      <div className="w-full absolute top-[calc(10vh)] p-4">
        <HomeRider />
      </div>
    </>
  )
}
