import Image from "next/image"
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    Bars3Icon
} from "@heroicons/react/24/solid";

function Header() {
    return (

        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left Logo*/}
            <div className="flex relative items-center h-10 cursor-pointer my-auto " >
                <Image className="object-left"
                    src='https://links.papareact.com/qd3'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* middle Search Bar*/}
            <div className="flex items-center border-2 rounded-full py-1.5 md:shadow-sm">
                <input className="px-2 sm:pl-4 md:pl-3 bg-transparent outline-none flex-grow text-sm text-grey placeholder-grey-400 overflow-hidden " type="text" placeholder="What are you looking for?" />
                <MagnifyingGlassIcon className="hidden md:inline h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mr-2 md:text-sm" />
            </div>

            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline text-sm cursor-pointer">Become a Renter</p>
                <GlobeAltIcon className="h-5 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 rounded-full py-1 px-2">
                    <Bars3Icon className="h-5" />
                    <UserCircleIcon className="h-5" />
                </div>
            </div>
        </header>
    )
}

export default Header