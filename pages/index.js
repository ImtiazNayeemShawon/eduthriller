import Image from 'next/image'
import { Inter } from 'next/font/google'
import Intro from "./Intro";
import Counter from './counter';
import Coursedetails from './coursedetails';
import Footer from "./footer";


export default function Home() {
  return (
   <main>
    <Intro/>
    <Counter/>
    <Coursedetails/>
    <Footer/>
   </main>
  )
}
