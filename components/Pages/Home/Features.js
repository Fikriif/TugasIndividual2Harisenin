import React from 'react'
import BorderedBottomBox from './Wrapper/BorderedBottom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { blue, grey } from '@mui/material/colors'

const Title = ({ text }) => (
  <Typography
    variant='h3'
    component='h2'
    getterBottom
    sx={{ textAlign: { xs: 'center', md: 'left' } }}
  >
    {text}
  </Typography>
)
const Description = ({ text }) => (
  <Typography
  variant='h5'
  component='h3'
  getterBottom
  sx={{ textAlign: { xs: 'center', md: 'left' } }}
  >
    {text}
  </Typography>
)

const Features = () => {
  return (
    <>
      <Box sx={{ bgcolor: 'common.black', color: 'common.white' }}>

        <BorderedBottomBox>
          <Container maxWidth='lg' sx={{ py: 6 }}>
            <Grid container alignItem='center' columnSpacing={12} >
              <Grid item xs={12} md={6}>
                <Title text='Enjoy on your TV.' />
                <Description text='Watch on Smart TVs, Playstation, Xbox, ChromeCast, Apple TV, Blu-ray players, and more.' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'relative', zIndex:2 }}>
                  <Image 
                  src='/__images/tv.png'
                  width='640px'
                  height='480px'
                  layout='responsive'
                  alt='Tv Netflix'
                  />
                  </Box>
                  <Box
                  sx={
                    {
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      maxWidth: '72%',
                      maxHeight: '54%',
                      top: '48%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                  }
                  }
                  >
                    <video
                    src='/__videos/tv.m4v'
                    style={{ height: '100%', width:'100%' }}
                    autoPlay
                    playsInline
                    muted
                    loop
                    ></video>
                  </Box>
                </Box>
              </Grid>
              
            </Grid>
          </Container>
        </BorderedBottomBox>

        <BorderedBottomBox>
          <Container maxWidth='lg' sx={{ py: 6 }}>
            <Grid container alignItem='center' columnSpacing={12} >
              <Grid item xs={12} md={6} sx={{ order: {xs:2, md:1}}}>
              <Box sx={{ position: 'relative' }}>
              <Box>
                <Image
                    src='/__images/mobile.jpg'
                    width='640px'
                    height='480px'
                    layout='responsive'
                    alt='Mobile Netflix'
                  />
                </Box>
                  <Box sx={{
                    position: 'absolute',
                    zIndex: 1,
                    border: `2px solid ${grey[700]}`,
                    borderRadius: 2,
                    padding: 1,
                    bgcolor: 'common.black',
                    width: {
                      xs: '80%',
                      sm: '70%',
                      md: '60%'
                    },
                    bottom: {
                      xs: '5%',
                      md: '10%'
                    },
                    left:'50%',
                    transform: 'translate(-50%, 0)'
                  }}>
                    <Grid container spacing={2} alignItems='center'>
                      <Grid item xs={2} md={3} >
                      <Image
                    src='/__images/boxshot.png'
                    width='55px'
                    height='80px'
                    layout='intrinsic'
                    alt='Boxshot Netflix'
                  />
                      </Grid>
                      <Grid item xs={8} md={6} >
                        <Typography>Stranger Things</Typography>
                        <Typography variant='body1' color={blue.A400}>Downloading...</Typography>
                      </Grid>
                      <Grid item xs={2} md={3} >
                      <Image
                    src='/__images/download.gif'
                    width='50px'
                    height='50px'
                    layout='intrinsic'
                    alt='Download Netflix'
                  />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                
                
              </Grid>
              <Grid item xs={12} md={6} sx={{ order: {xs:1, md:2}}} >
                <Title text='Download your shows to watch offline.' />
                <Description text='Save your favorites easily and always have something to watch.' />
              </Grid>
            </Grid>
          </Container>
        </BorderedBottomBox>

        <BorderedBottomBox>
          <Container maxWidth='lg' sx={{ py: 6 }}>
            <Grid container alignItem='center' columnSpacing={12} >
            <Grid item xs={12} md={6}>
                <Title text='Watch everywhere.' />
                <Description text='Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'relative', zIndex:2 }}>
                  <Image 
                  src='/__images/devices.png'
                  width='640px'
                  height='480px'
                  layout='responsive'
                  alt='Devices Netflix'
                  />
                  </Box>
                  <Box
                  sx={
                    {
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      maxWidth: '65%',
                      maxHeight: '49%',
                      top: '33%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                  }
                  }
                  >
                    <video
                    src='/__videos/devices.m4v'
                    style={{ height: '100%', width:'100%' }}
                    autoPlay
                    playsInline
                    muted
                    loop
                    ></video>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </BorderedBottomBox>

        <BorderedBottomBox>
          <Container maxWidth='lg' sx={{ py: 6 }}>
            <Grid container alignItem='center' columnSpacing={12} >
              <Grid item xs={12} md={6} sx={{ order: {xs:2, md:1}}}>
                <Box>
                  <Image
                    src='/__images/kids.png'
                    width='640px'
                    height='480px'
                    layout='responsive'
                    alt='Kids Netflix'
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ order: {xs:1, md:2}}}>
                <Title text='Create profiles for kids.' />
                <Description text='Send kids on adventures with their favorite characters in a space made just for them-free with your membership.' />
              </Grid>
            </Grid>
          </Container>
        </BorderedBottomBox>

      </Box>
    </>
  )
}

export default Features