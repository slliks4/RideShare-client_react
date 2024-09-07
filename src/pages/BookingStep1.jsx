// Page Import
import ErrorPage from "./ErrorPage";

// Components Import
import BookingForm from "../components/BookingForm";
import { BackIcon, MenuIcon, RepeatIcon } from "../imports/icons";
import SearchAddress from '../components/__map/SearchAddress';
import { map } from "../imports/images";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const isDriver = false;

// Default Function
export default function BookingStep1() {
    const navigate = useNavigate();

    if (isDriver === undefined || isDriver === null){
        return <ErrorPage message="Driver state not given" />
    };

    const handleClick = () => {

        navigate('/booking-step2/adffadfasf')
    }

    return (
        <main className='w-full h-screen overflow-y-scroll overflow-x-hidden no-scrollbar bg-white text-white'>
            <div name="" className="w-full h-[calc(65vh)] fixed z-10 border">
                <div className="w-full h-full relative flex justify-center">
                    <button className="absolute top-2 left-2 w-12 h-12 flex items-center justify-center rounded-full shadow text-xl bg-accent-emerald">
                        <BackIcon />
                    </button>
                    <img src={map} alt="map" className="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div className="relative z-20 w-full min-h-[calc(105vh)] max-h-fit overflow-y-scroll mt-[calc(60vh)] pt-[calc(5vh)] px-4 rounded-t-3xl custom-box-shadow bg-accent-emerald">
                <SearchAddress />
                <div className="flex overflow-x-scroll my-4 no-scrollbar rounded-box capitalize">
                    <div 
                        className="min-w-[calc(35vw)] px-4 border-r border-txt-600 cursor-pointer"
                        onClick={()=>handleClick()}
                    >
                        <h3 className="font-bold">home</h3>
                        <p className="text-sm">59 Cabot S..</p>
                    </div>
                    <div className="min-w-[calc(35vw)] px-4 border-r border-txt-600">
                        <h3 className="font-bold">work</h3>
                        <p className="text-sm">59 Cabot S..</p>
                    </div>
                    <div className="min-w-[calc(35vw)] px-4 flex items-center">
                        <MenuIcon className="text-3xl mr-2" />
                        <h3 className="font-bold">More</h3>
                    </div>
                </div>
                <div className="w-full h-1 bg-primary" />
                <div className="py-4">
                    <h2 className="font-bold text-xl">Recent</h2>
                    <ul>
                        <li className="relative py-4 border-b border-txt-600">
                            <h3 className="font-bold">Village mall</h3>
                            <p className="text-sm pt-1">St. john's, NL</p>
                            <small className="block absolute bottom-0 right-0 mb-2">
                                <p className="font-bold text-accent-teal">31/08/2024</p>
                            </small>
                        </li>
                        <li className="relative py-4 border-b border-txt-600">
                            <h3 className="font-bold">Avalon mall</h3>
                            <p className="text-sm pt-1">St. john's, NL</p>
                            <small className="block absolute bottom-0 right-0 mb-2">
                                <p className="font-bold text-accent-teal">31/08/2024</p>
                            </small>
                        </li>
                    </ul>
                    <div className="my-4 w-full flex justify-center items-center text-accent-teal">
                        More from recent history
                    </div>
                </div>
            </div>
        </main>
    )
}
