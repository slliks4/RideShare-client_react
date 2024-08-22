// Page Import
import ErrorPage from "../ErrorPage";

// Components Import
import HomeDriver from '../../components/__protectedRoute/__driver/HomeDriver';
import HomeRider from "../../components/__protectedRoute/__rider/HomeRider";

const isDriver = false;

// Default Function
export default function HomePage() {

  if (isDriver === undefined || isDriver === null){
    return <ErrorPage message="Driver state not given" />
  }

  return (
    <>    
      <header className="w-full h-[calc(10vh)] fixed z-10 flex items-center px-4 bg-accent-emerald border-b border-txt-600">
        <h3 className="text-3xl text-accent-teal font-pacifico capitalize">welcome skills</h3>
      </header>
      <div className="w-full absolute top-[calc(10vh)] p-4">
        { isDriver ? <HomeDriver /> : <HomeRider /> }
      </div>
    </>
  )
}
