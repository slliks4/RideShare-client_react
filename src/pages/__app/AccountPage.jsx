// React Import

import { AvatarIcon } from "../../imports/icons";

// Default Function
export default function AccountPage() {
  return (
    <>
        <header className="w-full h-[calc(15vh)] fixed z-10 flex items-center justify-between px-4 bg-accent-emerald border-b border-txt-600">
            <div>
                <h3 className="text-3xl text-accent-teal font-pacifico capitalize">Skills Anthony</h3>
                <span>
                    <p>5.00 Rating</p>
                </span>
            </div>
            <AvatarIcon className='text-5xl' />
        </header>
        <div className="w-full absolute top-[calc(15vh)] p-4">
            <ul>
                <li className="my-6 pb-2">
                    
                </li>
            </ul>
        </div>
    </>
  )
}
