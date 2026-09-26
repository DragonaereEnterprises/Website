import Link from 'next/link'
import { Box } from '@mui/system';

export default function NotFound() {
  return (
    <main>
      <Box className='main'>
        <h1 className='title'>Error <span className='orange'>404</span></h1>
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