import { Inter } from "next/font/google";
import Home2 from '../src/app/Pages/Home'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{background:'white'}}>
       <Home2 />
   
    </div>
  );
}
