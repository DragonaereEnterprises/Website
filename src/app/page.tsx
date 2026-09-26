import { Box } from "@mui/system";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Box className='main'>
        <h1 className='title'>Dragonaere <span className="orange">Enterprises</span></h1>
        <Box className='mainbody'>
          <p className='subtitle'>
            Coming Soon™
          </p>
          <Box className='linkgroup'>
            <p className='links'>
              <Link href="/projects">
                Current Projects
              </Link>
            </p>
            <p className='links'>
              <Link href="/about">
                About
              </Link>
            </p>
          </Box>
        </Box>
      </Box>
      <Footer />
    </main>
  )
}
