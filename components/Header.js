import Image from "next/image"
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    Bars3Icon
} from "@heroicons/react/24/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [numOfGuests, setNumOfGuests] = useState(1)
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    // console.log(selectionRange)
    // console.log("start date..",startDate)
    // console.log("enddate...",endDate)

    const resetInput = () => {
        setSearchInput("");
    }

    const search =() =>{
        router.push({
            pathname : "search",
            query: {
                location : searchInput,
                checkin : startDate.toISOString(),
                checkout: endDate.toISOString(),
                numOfGuests: numOfGuests
            }
        })
    }
    return (

        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left Logo*/}
            <div className="flex relative items-center h-10 cursor-pointer my-auto " >
                <Image 
                    onClick={() => router.push("/") }
                    className="object-left"
                    src='https://links.papareact.com/qd3'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* middle Search Bar*/}
            <div className="flex items-center border-2 rounded-full py-1.5 md:shadow-sm">
                <input 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)}
                className="px-2 sm:pl-4 md:pl-3 bg-transparent outline-none flex-grow text-sm text-grey placeholder-grey-400 overflow-hidden " type="text" placeholder={placeholder || "What are you looking for?" } />
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
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto pt-1">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex item-center border-b mb-4">
                        <h2 className=" text-2xl flex-grow font-semibold">
                            Number of Guests:
                        </h2>
                        <UsersIcon className="h-7"/>
                        <input 
                            type="number" className="w-12 pl-2 text-lg outline-none text-red-400" 
                            value={numOfGuests}
                            onChange={(e) => setNumOfGuests(e.target.value)}
                            min={1}
                        />
                    </div>
                    <div className="flex ">
                        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header