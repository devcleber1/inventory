import * as React from 'react'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { Container } from './styles'

export default function CircularIndeterminate() {
  return (
    <Container>
      {' '}
      <Box
        sx={{
          color: '#eb6304',
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    </Container>
  )
}
