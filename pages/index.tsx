import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Senior Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="border-4 rounded-lg border-black w-28 flex justify-center h-28 items-center text-2xl">
        <p>clear</p>
        </div>
      </main>
    </div>
  )
}

export default Home
