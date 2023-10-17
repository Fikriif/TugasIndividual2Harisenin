import { Box } from "@mui/material"
import { Button } from "@mui/material"
import { Typography } from "@mui/material"
import { Modal } from "@mui/material"
import { useState } from "react"
import { TextField } from "@mui/material"
import { FormControl } from "@mui/material"
import { InputAdornment } from "@mui/material"
import { Grid } from "@mui/material"
import { Checkbox } from "@mui/material"
import { useForm } from "react-hook-form"
import FormError from "../../Forms/Error"
import { SignIn, GetSignInErrorMessage } from "../../../services/firebase"
import { CircularProgress } from "@mui/material"
import { Snackbar } from "@mui/material"
import { Alert } from "@mui/material"
import Link from "next/link"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'common.white',
  boxshadow: 24,
  p: 4,
}

const LoginModal = ({ open, CloseModal }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (values) => {
    setIsLoading(true)
    const { email, password } = values
    try {
      await SignIn(email, password)
    } catch (error) {
      const message = GetSignInErrorMessage(error.code)
      setSnackbar({ open: true, message})
      setIsLoading(false)
    }
  }

  const onSnackbarClose = (event, reason) => {
    console.log({ reason })
    if (reason === "clickaway") {
      return
    }
    setSnackbar({ open: false, message:''})
  }

  return (
    <>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={snackbar.open} autoHideDuration={3000} onClose={onSnackbarClose}>
        <Alert onClose={onSnackbarClose} variant="filled" severity="error" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <Modal
        open={open}
        onClose={CloseModal}
      >
        <Box sx={style}>
          <Typography variant="h4" component="h1" sx={{ mb: 4 }} >
            Sign In
          </Typography>
          <Grid sx={{ mb: 1 }} >
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl sx={{ mb: 2 }} fullWidth>
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email atau nomor telepon"
                  variant="filled"
                  {...register("email", { required: true })}
                />
                <FormError error={errors.email} />
              </FormControl>

              <FormControl sx={{ mb: 4 }} fullWidth>
                <TextField
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
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
              <Button disabled={isLoading} type="submit" variant="contained" size="large" fullWidth>
                {isLoading && (
                  <CircularProgress size={24} sx={{ mr: 1 }} />
                )}
                Sign In</Button>
            </form>
          </Grid>

          <Grid container alignItems="center" justifyContent="space-between">
            <Box>
              <Checkbox />
              <Typography variant="caption" component="a" href="#">Remember me</Typography>
            </Box>
            <Typography variant="caption" component="a" href="#">Need help?</Typography>
          </Grid>
          <Grid>
            <Typography variant="body1" component="span">New to Netflix?</Typography>
            <Link href="/Signup" passHref>
            <Typography variant="body1" color="primary" component="a" href="#">&nbsp;Sign Up now</Typography>
            </Link>
          </Grid>
          <Grid>
            <Typography variant="caption" component="span">This page is protected by Google reCAPTCHA to ensure you are not a bot.</Typography>
            <Typography variant="caption" color="primary" component="span" href="#">&nbsp;Learn now.</Typography>
          </Grid>
        </Box>
      </Modal>
      </>
      
    )
}

export default LoginModal;