import { Box } from "@mui/system";
import Link from "next/link";

export default function About() {
  return (
    <main>
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
        </Box>
        <Box className="footer">
          <p>© 2024 Dragonaere Enterprises</p>
        </Box>
      </Box>
    </main>
  )
}
