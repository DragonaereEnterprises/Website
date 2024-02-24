import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/system";
import Link from "next/link";

export default function About() {
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
            About Us
          </p>
          <p className='maintext'>
            Dragonaere Enterprises is currently just one person, {<Link className="highlightedLink" href="https://www.andrewdragon.dev">Andrew Still, known as AndrewDragon</Link>}. He is currently working on a Discord bot and a Minecraft network. He is very exited to hopefully be able to share these projects with you soon!
          </p>
        </Box>
        <Box className="footer">
          <p>© 2024 Dragonaere Enterprises</p>
        </Box>
      </Box>
      <Footer />
    </main>
  )
}
