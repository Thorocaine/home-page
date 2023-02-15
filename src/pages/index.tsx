import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Feeds from "@/Components/feeds/Feeds";
import React from "react";
import GuestWifi from "@/Components/GuestWifi/GuestWifi";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <Head>
        <title>Home Affairs</title>
        <meta name="description" content="Home Affairs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <header className="text-center text-3xl py-8">Home Affairs</header>
               

        <main className="flex">
            <div className="w-1/2 px-8 py-4 border-r border-gray-400">
                <GuestWifi />
            </div>
            <div className="w-1/2 px-8 py-4">
                <h2 className="text-lg mb-4">External Links</h2>
                <ul className="list-none">
                    <li className="mb-2">
                        <a href="https://app.wildearth.tv/" className="text-blue-500 hover:text-blue-800">Wild Earth</a>
                    </li>
                </ul>

                {/*<h2 className="text-lg font-medium mt-6 mb-4">Internal Links</h2>*/}
                {/*<ul className="list-none">*/}
                {/*    <li className="mb-2">*/}
                {/*        <a href="#" className="text-blue-500 hover:text-blue-800">Link 4</a>*/}
                {/*    </li>*/}
                {/*    <li className="mb-2">*/}
                {/*        <a href="#" className="text-blue-500 hover:text-blue-800">Link 5</a>*/}
                {/*    </li>*/}
                {/*    <li className="mb-2">*/}
                {/*        <a href="#" className="text-blue-500 hover:text-blue-800">Link 6</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </main>
        
        
    </div>
  )
}
