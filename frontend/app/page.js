"use client";
import Image from 'next/image'
import Mainpage from './components/Mainpage'
import { useEffect, useState} from "react";



export default function Home() {
  
  console.log()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
     <Mainpage> </Mainpage>    
    </main>
  )
}
