import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import BorderedBottomBox from './Wrapper/BorderedBottom'

const Header = ({OpenModal}) => {
    return (
        <BorderedBottomBox>
            <AppBar
            sx={{
                backgroundColor: 'transparent',
                padding: '25px 20px'
            }}
            >
                <Toolbar>
                    <Grid container alignItems='center' spacing={3}>
                        <Grid item xs>
                            <Image 
                            src='/__images/netflix.svg'
                            height='45px'
                            width='176px'
                            layout='intrinsic'
                            alt='Netflix Logo'
                            />
                        </Grid>
                        <Grid item xs='auto'>
                            <Select name='lang' variant='outlined' size='small' defaultValue='EN'
                            sx={{
                                border:'3px',
                                borderStyle: 'solid',
                                borderColor: 'common.white',
                                color:'common.white',
                                '& .MuiSelect-icon': {
                                    color:'common.white',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                }
                            }}
                            >
                            <MenuItem value='ID'>Bahasa Indonesia</MenuItem>
                            <MenuItem value='EN'>English</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs='auto'>
                            <Button color='primary' variant='contained' onClick={OpenModal}>
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    position: 'relative',
                    height: '745px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::after': {
                        position: 'absolute',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        background: 'rgba(0,0,0,0.4)',
                        backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(0,0,0,0.8) 0,
                    rgba(0,0,0,0.1) 60%,
                    rgba(0,0,0,0.8) 100%,
                )`
                    }
                }}
            >
                <Image
                    priority
                    src="/__images/backdrop.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Backdrop Netflix"
                />
                <Container maxWidth="md" sx={{
                    position: 'relative',
                    zIndex: 1000
                }}>
                    <Typography
                        variant='h2'
                        color='common.white'
                        component='h1'
                        fontWeight='600'
                        textAlign='center'
                    >
                        Unlimited movies, TV Shows, and more.
                    </Typography>
                    <Typography
                        variant='h5'
                        color='common.white'
                        component='p'
                        textAlign='center'
                        gutterBottom
                    >
                        Watch anywhere. Cancel anytime.
                    </Typography>
                    <Typography
                        variant='h6'
                        color='common.white'
                        component='p'
                        textAlign='center'
                        sx={{
                            my: 2
                        }}
                    >
                        Ready to watch? Enter your email to create or restart your membership.
                    </Typography>
                    <Grid container>
                        <Grid item xs>
                            <TextField variant='filled' 
                            label='Email Address' 
                            fullWidth
                            sx={{
                                bgcolor: 'common.white',
                            }} />
                        </Grid>
                        <Grid item xs='auto'>
                            <Button variant='contained' size='large' color='primary' sx={{height:'100%', borderRadius: '2px'}}>
                                Get started</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </BorderedBottomBox>
    )
}

export default Header;