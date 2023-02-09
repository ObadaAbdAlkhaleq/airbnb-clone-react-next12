import Image from "next/image"

function MediumCard({ img, title }) {
    return (
        <div className="flex flex-row">
            <div className=" cursor-pointer hover:scale-105 transform transtion duration-300 ease-out sm:my-4 ">
                <div className="relative h-80 w-80">
                    <Image
                        src={img}
                        fill
                        className="rounded-xl"
                    />
                </div>
                <div className="">
                    <h3 className=" text-2xl mt-3
                    ">{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default MediumCard