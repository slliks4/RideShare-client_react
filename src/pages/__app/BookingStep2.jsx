// Hooks Import
import useGoBack from "../../hooks/app/useGoBack";

// Page Import
import ErrorPage from "../ErrorPage";

// Components Import
import BookingForm from "../../components/__app/BookingForm";

// Icons Import
import { BackIcon } from "../../imports/icons";

// Images Import
import { map2 } from "../../imports/images";

// Dummy data
const isDriver = false;

// Default Function
export default function BookingStep2() {
    const { goBack } = useGoBack();
    if (isDriver === undefined || isDriver === null){
        return <ErrorPage message="Driver state not given" />
    };

    return (
        <main className='w-full h-[calc(100dvh)] overflow-y-scroll overflow-x-hidden no-scrollbar bg-white text-white'>
            <div name="" className="w-full h-[calc(65vh)] fixed z-10 border">
                <div className="w-full h-full relative flex justify-center">
                    <button className="absolute top-2 left-2 w-12 h-12 flex items-center justify-center rounded-full shadow text-xl bg-accent-emerald"
                    onClick={goBack}>
                        <BackIcon />
                    </button>
                    <img src={map2} alt="map" className="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div className="relative z-20 w-full min-h-[calc(105vh)] max-h-fit overflow-y-scroll mt-[calc(60vh)] pt-[calc(5vh)] px-4 rounded-t-3xl custom-box-shadow bg-accent-emerald">
                <BookingForm />
            </div>
        </main>
    )
}
