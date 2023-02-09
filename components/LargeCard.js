import Image from 'next/image'

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className="relative h-96 min-w-[300px]">
                <Image 
                    className="rounded-2xl" 
                    src={img} 
                    fill 
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className=' left-12  absolute top-32'>
                <h1 className=' w-64 break-normal text-4xl font-bold'>{title}</h1>
                <p className=' text-lg font-medium'>{description}</p>
                <button className=' bg-gray-900 text-white px-5 py-2 md:px-10 md:py-4 shadow-md rounded-xl  my-4 hover:shadow-xl active:scale-90 transition duration-150'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
