// React Import
import { useState } from 'react';

// Image Imports
import { map2 } from '../imports/images';

// Icons Import
import { 
  ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, AvatarIcon, CloseIcon, FeedBackIcon, HelpIcon, LostItemsIcon, PendingIcon, ReportProblemIcon 
} from '../imports/icons';
import { useNavigate } from 'react-router-dom';


// Default Function
export default function RideDetailsPage() {
  const [ rideState, setRideState ] = useState('completed');
  const [ profilePic, setProfilePic ] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/activity');
  }

  return (
    <main className='w-screen h-screen relative overflow-y-scroll overflow-x-hidden no-scrollbar bg-accent-emerald text-white'>
      <header className="w-full h-[calc(10vh)] fixed z-10 flex items-center px-4 bg-accent-emerald border-b border-txt-600">
        <button onClick={handleClick}>
          <CloseIcon className='text-3xl text-accent-teal font-pacifico capitalize' />
        </button>
        <h3 className="ml-2 text-3xl text-accent-teal font-pacifico capitalize">Ride details</h3>
      </header>
      <div className="w-full absolute top-[calc(10vh)] p-4">
        <div className="w-full h-[calc(20vh)] relative rounded-lg overflow-hidden">
          <img src={map2} alt="google-map" className='w-full h-full object-cover object-center' />
          <h3 className='absolute bottom-0 p-2 capitalize font-bold text-txt-900'>google</h3>
        </div>
        <div className='mt-6'>
          <div className='flex justify-between items-center'>
            <div className='w-3/4 break-words'>
              <h1 className='text-2xl font-bold'>Sunday service ride</h1>
              <small className='flex items-center text-accent-teal text-sm font-bold capitalize'>
                <PendingIcon />
                <p className="pl-1">{rideState}</p>
              </small>
            </div>
            { profilePic ? (
              <img src={''} alt="profile-pic" className='w-12 h-12 border rounded-full overflow-hidden object-contain object-center' />
            ):(
              <AvatarIcon className='text-5xl' />
            )}
          </div>
          <ul className='mt-8'>
            <TripInfo />
            <DriverInfo rideState={ rideState } />
            <Help rideState={rideState} />
          </ul>
        </div>
      </div>
    </main>
  )
}

const Help = ({ rideState }) => {
  return (
    <li className='my-6 pb-2'>
      <h3 className='capitalize text-xl font-bold'>Help</h3>
      { rideState === 'completed' ? (
        <ul>
          <li className='flex justify-between items-center my-4 pb-2 border-b border-txt-600'>
            <div className='flex items-center justify-between'>
              <LostItemsIcon className='text-xl font-bold' />
              <span className='ml-4 pr-2 break-words'>
                <h3 className='font-bold capitalize'>Find lost item</h3>
                <p>We can help you get in touch with your driver</p>
              </span>
            </div>
            <ArrowRightIcon />
          </li>
          <li className='flex justify-between items-center my-4 pb-2 border-b border-txt-600'>
            <div className='flex items-center justify-between'>
              <ReportProblemIcon className='text-xl font-bold' />
              <span className='ml-4 pr-2 break-words'>
                <h3 className='font-bold capitalize'>Report safety issue</h3>
                <p>let us know if you have a safety related issue</p>
              </span>
            </div>
            <ArrowRightIcon />
          </li>
          <li className='flex justify-between items-center my-4 pb-2 border-b border-txt-600'>
            <div className='flex items-center justify-between'>
              <FeedBackIcon className='text-xl font-bold' />
              <span className='ml-4 pr-2 break-words'>
                <h3 className='font-bold capitalize'>Provide driver feedback</h3>
                <p>For  issues that aren't safety related</p>
              </span>
            </div>
            <ArrowRightIcon />
          </li>
          <li className='flex justify-between items-center my-4 pb-2 border-b border-txt-600'>
            <div className='flex items-center justify-between'>
              <HelpIcon className='text-xl font-bold' />
              <span className='ml-4 pr-2 break-words'>
                <h3 className='font-bold capitalize'>Contact us</h3>
                <p>Need help for something else? Contact us</p>
              </span>
            </div>
            <ArrowRightIcon />
          </li>
        </ul>
      ):(
        <ul className='px-4'>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>Not available:</span> Ride yet to be completed
          </li>
        </ul>
      )}
    </li>
  );
}

const TripInfo = ({ tripInfo=true }) => {
  return (
    <li className='my-6 pb-2 border-b border-txt-600'>
      <h3 className='capitalize text-xl font-bold'>trip info</h3>
      { tripInfo ? (          
        <ul className='px-4'>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>pickup address:</span> 59 Cabot street
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>trip email:</span> skillsnwokolo372@gmail.com
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>trip tel:</span> +17093278169
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>number of occupancy:</span> 2
          </li>
        </ul>
      ):(
        <ul className='px-4'>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>Not available:</span> Failed to load drip data
          </li>
        </ul>
      )}
    </li>
  );
}

const DriverInfo = ({ rideState }) => {
  return (
    <li className='my-6 pb-2 border-b border-txt-600'>
      <h3 className='capitalize text-xl font-bold'>Driver info</h3>
      { rideState && rideState !== 'pending' ? (
        <ul className='px-4'>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>name:</span> Jiro
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>tel:</span> +17093274566
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>vehicle type:</span> Siena
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>vehicle color:</span> Black
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>vehicle plate:</span> DDFADFDD3V
          </li>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>pick up time:</span> 9:00 AM
          </li>
        </ul>
      ):(
        <ul className='px-4'>
          <li className='my-4 list-disc'>
            <span className='font-bold capitalize'>Not available:</span> Driver yet to be assigned
          </li>
        </ul>
      )}
    </li>
  );
}