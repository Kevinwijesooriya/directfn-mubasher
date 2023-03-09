import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import dfnLogo from './assets/images/dfnLogo.png'

function App() {
  return (
    <>
      <Container>
        <Stack spacing={3}>
          <img alt="dfnLogo" src={dfnLogo} width={250} />
          <Grid display="flex"
            flexDirection="column"
            alignItems="center" ><Typography color={"primary"} fontWeight={700} variant="h4">DEMO</Typography></Grid>
          <Button component={Link} to="auth/login">Login</Button>
          <Button component={Link} to="auth/registration">Registration</Button>
          <Button component={Link} to="auth/forgot-password">Forgot Password</Button>
          <Button component={Link} to="auth/forgot-username">Forgot Username</Button>
          <Button component={Link} to="main/landing">Landing</Button>
          <Button component={Link} to="subscription/market">Subscription</Button>
        </Stack>
      </Container>
    </>
  )
}

export default App
