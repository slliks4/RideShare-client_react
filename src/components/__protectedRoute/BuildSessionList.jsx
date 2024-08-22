import { Link, Navigate, useNavigate } from "react-router-dom";
import { LocationIcon, RepeatIcon } from "../../imports/icons";
import { PropTypes } from "../../imports/library";
import { useState } from "react";

// Default Function
export default function BuildSessionList({ searchTerm }) {
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleClick = async({ isClosed = false }) =>{
        // Pop-up Modal if session is not available
        if (isClosed){
            console.log('open modal');
            setShowModal(true);
            return;
        }

        // Navigate to booking form if session is available
        console.log('navigate to booking page');
        navigate(`/book-ride`, { state: { fromBuildSession: true } });
    };
    
    return (
        <ul className="my-4">
            <li
                onClick={() => handleClick({ isClosed:false })} 
                className="relative w-full border-b border-txt-600 pb-4 px-2 my-6 cursor-pointer"
            >
                <h2 className="capitalize text-lg font-bold">Sunday Service</h2>
                <small className="absolute top-0 right-0">
                    <p className="text-accent-teal font-bold capitalize">Available</p>
                </small>
                <h3 className="flex items-center text-sm pt-2">
                    <RepeatIcon />
                    <span className="pl-2 capitalize">Repeating: yes</span>
                </h3>
                <h3 className="flex items-center text-sm">
                    <LocationIcon />
                    <span className="pl-2">109 Blackmarsh Rd, St. John's, NL A1E 1S6</span>
                </h3>
                <small className="block pt-4">
                    <p className="font-bold">31/08/2024</p>
                </small>
            </li>
            <li
                onClick={() => handleClick({ isClosed:true })} 
                className="relative w-full border-b border-txt-600 pb-4 px-2 my-6 cursor-pointer"
            >
                <h2 className="capitalize text-lg font-bold">Night with the king</h2>
                <small className="absolute top-0 right-0">
                    <p className="text-error font-bold capitalize">closed</p>
                </small>
                <h3 className="flex items-center text-sm pt-2">
                    <RepeatIcon />
                    <span className="pl-2 capitalize">Repeating: no</span>
                </h3>
                <h3 className="flex items-center text-sm">
                    <LocationIcon />
                    <span className="pl-2">109 Blackmarsh Rd, St. John's, NL A1E 1S6</span>
                </h3>
                <small className="block pt-4">
                    <p className="font-bold">08/09/2024</p>
                </small>
            </li>
            <li
                onClick={() => handleClick({ isClosed:false })} 
                className="relative w-full border-b border-txt-600 pb-4 px-2 my-6 cursor-pointer"
            >
                <h2 className="capitalize text-lg font-bold">Prayer retreat</h2>
                <small className="absolute top-0 right-0">
                    <p className="text-accent-teal font-bold capitalize">Available</p>
                </small>
                <h3 className="flex items-center text-sm pt-2">
                    <RepeatIcon />
                    <span className="pl-2 capitalize">Repeating: no</span>
                </h3>
                <h3 className="flex items-center text-sm">
                    <LocationIcon />
                    <span className="pl-2">109 Blackmarsh Rd, St. John's, NL A1E 1S6</span>
                </h3>
                <small className="block pt-4">
                    <p className="font-bold">31/08/2024</p>
                </small>
            </li>
            <li
                onClick={() => handleClick({ isClosed:true })} 
                className="relative w-full border-b border-txt-600 pb-4 px-2 my-6 cursor-pointer"
            >
                <h2 className="capitalize text-lg font-bold">Thursday Service</h2>
                <small className="absolute top-0 right-0">
                    <p className="text-error font-bold capitalize">closed</p>
                </small>
                <h3 className="flex items-center text-sm pt-2">
                    <RepeatIcon />
                    <span className="pl-2 capitalize">Repeating: yes</span>
                </h3>
                <h3 className="flex items-center text-sm">
                    <LocationIcon />
                    <span className="pl-2">109 Blackmarsh Rd, St. John's, NL A1E 1S6</span>
                </h3>
                <small className="block pt-4">
                    <p className="font-bold">08/09/2024</p>
                </small>
            </li>
            { showModal && (
                <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-black/55'>
                    <div className="w-[calc(80vw)] h-[calc(30vh)] flex flex-col items-center justify-center bg-accent-emerald shadow-lg rounded-box">
                        <p>modal content lol :)</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
                )
            }
        </ul>
    )
}

// Type Checking
BuildSessionList.propTypes = {
    searchTerm: PropTypes.string,
}