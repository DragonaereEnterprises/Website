import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/system";
import Link from "next/link";

export default function Projects() {
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
              <Link href="https://bot.dragonaere.com/">
                Discord Bot
              </Link>
            </p>
            <p className='links'>
              <Link href="https://www.dragonaere.net/">
                Minecraft Network
              </Link>
            </p>
          </Box>
        </Box>
      </Box>
      <Footer />
    </main>
  )
}
