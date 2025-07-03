import { Link } from "react-router-dom";
import { FilterIcon, CarIcon } from "../../imports/icons";

// Default Function
export default function ActivityPage(){
    return (
        <>
            <header className="w-full h-[calc(10dvh)] fixed z-10 flex items-center px-4 bg-accent-emerald border-b border-txt-600">
                <h3 className="text-3xl text-accent-teal font-pacifico capitalize">Activity</h3>
            </header>
            <div className="w-full absolute top-[calc(10dvh)] p-4">
                <div className="flex py-4 items-center justify-between">
                    <h3 className="capitalize font-bold text-2xl">history</h3>
                    <FilterIcon className="text-xl" />
                </div>
                <ul className="mt-6">
                    <li>
                        <Link to={'/ride-details/:TTkladkfSD123k33'} className="flex items-center my-6 pb-2 border-b border-txt-600">
                            <CarIcon className="text-4xl" />
                            <span className="ml-4">
                                <h3 className='font-bold capitalize'>sunday service</h3>
                                <p>25 sept - 8:00 AM</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/ride-detail'} className="flex items-center my-6 pb-2 border-b border-txt-600">
                            <CarIcon className="text-4xl" />
                            <span className="ml-4">
                                <h3 className='font-bold capitalize'>Night with the kings</h3>
                                <p>25 sept - 8:00 AM</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/ride-detail'} className="flex items-center my-6 pb-2 border-b border-txt-600">
                            <CarIcon className="text-4xl" />
                            <span className="ml-4">
                                <h3 className='font-bold capitalize'>Healing service</h3>
                                <p>25 sept - 8:00 AM</p>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}