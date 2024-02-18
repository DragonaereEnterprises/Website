import Link from 'next/link'
import { Box } from '@mui/system';

export default function NotFound() {
  return (
    <main>
      <Box className='main'>
        <Box className='head'>
          <h1 className='title'>
            Error
          </h1>
          <h1 className='title orange'>
            404
          </h1>
        </Box>
        <Box className='mainbody'>
          <h2 className='subtitle'>
            <Link href="/" >
              Page Not Found
            </Link>
          </h2>
        </Box>
      </Box>
    </main>
  )
}