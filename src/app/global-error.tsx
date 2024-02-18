'use client'

import React from 'react';
import Link from 'next/link'
import { Box } from '@mui/system';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error(error)
  return (
    <html>
      <body>
        <main>
          <Box className='main'>
            <Box className='head'>
              <h1 className='title'>
                Error
              </h1>
              <h1 className='title'>
                {error.name}
              </h1>
            </Box>
            <Box className='mainbody'>
              <h2 className='subtitle'>
                <Link href="/" >
                  {error.message}
                </Link>
              </h2>
              <p>
                Please reload and try again. If this continues, please contact me.
              </p>
            </Box>
          </Box>
        </main>
      </body>
    </html>
  )
}