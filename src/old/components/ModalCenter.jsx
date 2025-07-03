// Icons Import
import {
    CloseIcon
} from '../imports/icons';

// Default Function
export default function ModalCenter({ setShowModal, Children }) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-black/55'>
        <div className="w-[calc(80vw)] h-[calc(30vh)] p-4 flex flex-col justify-center bg-accent-emerald shadow-lg rounded-box">
            { Children }
        </div>
        <button 
            className="w-10 h-10 absolute top-[calc(33vh)] right-[calc(7vw)] flex items-center justify-center rounded-full shadow bg-error"
            onClick={()=>setShowModal(false)}
        >
            <CloseIcon />
        </button>
    </div>
  )
}
