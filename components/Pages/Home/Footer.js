import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Select } from "@mui/material"
import { MenuItem } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'common.black', color: 'grey.700' }} >
            <Container maxWidth='lg' sx={{ py: 6 }}>
                <Typography sx={{mb: 4}} >
                    Questions? Call me in 081930522548
                </Typography>
                <Grid container spacing={4} sx={{mb:2}}>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <Typography variant="body1" component="a" href="#">
                                FAQ
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Investor Relations
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Privacy
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Speed Test
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={2}>
                            <Typography variant="body1" component="a" href="#">
                                Help Center
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Jobs
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Cookie Preferences
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Legal Notices
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={2}>
                            <Typography variant="body1" component="a" href="#">
                                Account
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Ways to Watch
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Corporate Information
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Only on Netflix
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={2}>
                            <Typography variant="body1" component="a" href="#">
                                Media Center
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Terms of Use
                            </Typography>
                            <Typography variant="body1" component="a" href="#">
                                Contact Us
                            </Typography>
                        </Stack>
                    </Grid>

                </Grid>
                <Box sx={{mb:2}}>
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
                </Box>

                <Typography variant="caption" >
                    Netflix Indonesia
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer
