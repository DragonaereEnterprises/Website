import { Box } from "@mui/system";

export default function Home() {
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
            Coming Soon™
          </p>
          {/* <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridTemplateRows="1fr" justifyContent="center" alignItems="center">
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/links">
                My Socials
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/about">
                About Me
              </Link>
            </p>
          </Box> */}
        </Box>
        <Box className="footer">
          <p>© 2024 Dragonaere Enterprises</p>
        </Box>
      </Box>
    </main>
  )
}
