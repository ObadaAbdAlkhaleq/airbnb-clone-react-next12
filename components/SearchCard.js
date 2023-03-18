import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";


function SearchCard({ img, location, title, description, star, price, total, long, lat }) {
    return (
        <div className="flex w-full cursor-pointer px-2 hover:shadow-lg border-b hover:opacity-90 transition duration-200 ease-out first:border-t">
            <div className="relative h-60 w-80 my-6 ">
                <Image
                    className=" rounded-xl"
                    src={img}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="my-2 py-6 ml-5 flex flex-col justify-between w-full">
                <div className=" ">
                    <div className="flex items-center justify-between">
                        <h6 className="text-xs text-gray-500">{location}</h6>
                        <HeartIcon className="h-6" />
                    </div>
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <div className=" border-b-2 w-10 pt-2"></div>
                    <p className="text-sm mt-1">{description}</p>
                </div>
                <div className="flex justify-between">
                    <p className=" text-sm flex flex-end items-center">
                        <StarIcon className="h-5 text-red-400"/>
                        {star}
                    </p>
                    <div className="">
                        <p className=" font-bold text-lg">{`$${price} / night`}</p>
                        <p className=" text-right">{`$${total} total`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCard