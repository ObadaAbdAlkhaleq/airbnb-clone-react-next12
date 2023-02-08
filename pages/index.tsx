// import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'

function Home({ exploreData, cardsData }){
  return (
    <div className="">
      <Head>
        <title>Senior Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px16 '>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull data from a server - API endpoints */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {exploreData?.map(({img, location, distance}) => (
              <SmallCard 
                key={img}
                img={img} 
                distance={distance} 
                location={location} 
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className=' flex overflow-scroll scrollbar-hide  mx-2 space-x-3 p-3 -ml-3'>
            {cardsData.map(({img,title}) => (
              <MediumCard
              key={img}
              img={img}
              title={title}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
// importing paths for local fetching from mockdata.json
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  // 
  const filePath = path.join(process.cwd(), 'pages/MockData.json');
  const jsonData = await fsPromises.readFile(filePath);
  const exploreData = JSON.parse(jsonData);
  // const res = await fetch('MockData.json')
  // // const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  // const exploreData = await res.json()
  
  const filePath2 = path.join(process.cwd(), 'pages/MockData2.json');
  const jsonData2 = await fsPromises.readFile(filePath2);
  const cardsData = JSON.parse(jsonData2);



  return{
    props: {
      exploreData,
      cardsData
    },
  }
}

export default Home