import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import SearchCard from "../components/SearchCard";
function Search({ searchResult }) {
    const router = useRouter();
    const { location, checkin, checkout, numOfGuests } = router.query;
    const formattedStartDated = format(new Date(checkin), 'dd MMM yy') ?? '';
    const formattedEndDated = format(new Date(checkout), 'dd MMM yy') ?? '';
    function getDaysBetween(formattedStartDate, formattedEndDate) {
        const startDate = new Date(formattedStartDate);
        const endDate = new Date(formattedEndDate);
        const timeDiff = endDate.getTime() - startDate.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    const daysBetween = getDaysBetween(formattedStartDated, formattedEndDated);
    console.log(daysBetween);
    // const formattedStartDated = checkin && format(new Date(checkin), 'dd MMM yy');
    // const formattedEndDated = checkout && format(new Date(checkout), 'dd MMM yy');
    const range = `${formattedStartDated} - ${formattedEndDated}`
    const capitalizedLocation = location.charAt(0).toUpperCase() + location.slice(1);
    return (
        <div>
        <Head>
            <title>Stays in {capitalizedLocation}</title>
        </Head>
            <Header placeholder={`${capitalizedLocation} | ${range} | ${numOfGuests} guests`} />

            <main>
                <section className="flex-grow pt-14 pr-8 pl-8">
                    <p className="text-xs">300+ stays available between {range}, for {numOfGuests} number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {capitalizedLocation}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap">
                        <p className="button">Cancelation Flexablity</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="py-2">
                        {searchResult.map(({ img, location, title, description, star, price, total, long, lat }) => (
                            <SearchCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={price * daysBetween}
                                long={long}
                                lat={lat}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

import fsPromises from 'fs/promises'
import path from 'path'

export async function getServerSideProps() {
    // const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res.json());
    try{
        const res = await fetch("https://www.jsonkeeper.com/b/5NPS")
        const searchResult = await res.json();
        // console.log(searchResult);
        return {
            props: {
                searchResult,
            },
        };
    } catch (error) {
        
        console.error('Error fetching data from API:', error);
        // const localRes = await fetch("pages/MockData3.json");
        // const searchResult = await localRes.json();
        const filePath = path.join(process.cwd(), 'pages/MockData3.json')
        const localRes = await fsPromises.readFile(filePath)
        const searchResult = JSON.parse(localRes)
    
        return {
            props: {
                searchResult,
            },
        };
    }
}
        export default Search