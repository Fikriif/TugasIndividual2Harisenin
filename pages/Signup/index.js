import Image from "next/image"
import Link from "next/link"
import { Box } from "@mui/material"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import { FormControl } from "@mui/material"
import { TextField } from "@mui/material"
import { Checkbox } from "@mui/material"
import { FormControlLabel } from "@mui/material"
import { Button } from "@mui/material"
import { useRef, useState } from "react"
import { InputAdornment } from "@mui/material"
import { useForm } from "react-hook-form"
import { CircularProgress } from "@mui/material"
import { SignUp as SignUpFirebase, GetSignUpErrorMessage } from "../../services/firebase"
import FormError from "../../components/Forms/Error"
import withUnProtected from "../../hoc/withUnProtected"

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const password = useRef({})
    password.current = watch('password')

    const onSubmit = async (values) => {
        setIsLoading(true)
        const { email, password } = values
        try {
            await SignUpFirebase(email, password)
        } catch (error) {
            const message = GetSignUpErrorMessage(error.code)
            console.log(message)
            setIsLoading(false)
        }
    }

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100vw',
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
            <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 2, p: 6 }}>
                <Box sx={{ bgcolor: 'common.white', p: 4, borderRadius: 2 }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 4 }}>Sign Up</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField
                                id="email"
                                type="email"
                                name="email"
                                label="Email"
                                variant="filled"
                                {...register("email", { required: true })}
                            />
                            <FormError error={errors.email} />
                        </FormControl>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                label="Password"
                                variant="filled"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputAdornment>
                                    )
                                }}
                                {...register("password", { required: true, minLength: 8 })}
                            />
                            <FormError error={errors.password} />
                        </FormControl>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                label="Confirm Password"
                                variant="filled"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {showConfirmPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputAdornment>
                                    )
                                }}
                                {...register("confirmPassword", {
                                    required: true,
                                    minLength: 8,
                                    validate: (value) => value === password.current
                                })}
                            />
                            <FormError error={errors.confirmPassword} />
                        </FormControl>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <FormControlLabel
                                label="Agree to the terms and conditions"
                                control={<Checkbox {...register("agreement", { required: true })} />}
                            />
                            <FormError error={errors.agreement} />
                        </FormControl>
                        <Button disabled={isLoading} type="submit" variant="contained" size="large" fullWidth>
                            {isLoading && (
                                <CircularProgress size={24} sx={{ mr: 1 }} />
                            )}
                            Sign Up
                        </Button>
                    </form>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Link href="/" passHref>
                            <Button variant="text" color="primary" component="a" href="#">&nbsp;Sign In</Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default withUnProtected(SignUp)