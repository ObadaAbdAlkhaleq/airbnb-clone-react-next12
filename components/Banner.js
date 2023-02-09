import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h[800px]">
        <Image
        src='https://links.papareact.com/0fm'
        fill
        style={{ objectFit: "cover" }}
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="sm:text-sm md:text-lg">Not sure what you need? <br /> You're at the perfect place</p>
            <button className="text-purple-500 bg-white px-5 py-2 md:px-10 md:py-4 shadow-md rounded-full font-bold my-4 hover:shadow-xl active:scale-90 transition duration-150">Continue</button>
        </div>
    </div>
  )
}

export default Banner