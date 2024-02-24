import { Box } from "@mui/system";
import Link from "next/link";
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Box className='main'>
        <Box className='head'>
          <h1 className='title'>Dragonaere</h1>
          <h1 className="title">&nbsp;</h1>
          <h1 className='title orange'>Enterprises</h1>
        </Box>
        <Box className='mainbody' display="flex" flexDirection="column">
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
        <Box className="footer">
          <p>© 2024 Dragonaere Enterprises</p>
        </Box>
      </Box>
    </main>
  )
}
