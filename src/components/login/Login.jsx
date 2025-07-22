// MUI Imports
import themeConfig from "@/configs/themeConfig";
import { useImageVariant } from "@/core/hooks/useImageVariant";
import { useSettings } from "@/core/hooks/useSettings";
import Logo from "@/layout/shared/Logo";
import { Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import classnames from "classnames";

// Component Imports
import Illustrations from "@components/Illustrations";

// Vars
const darkImg = "/images/pages/auth-v2-mask-dark.png";
const lightImg = "/images/pages/auth-v2-mask-light.png";
const darkIllustration = "/images/illustrations/auth/v2-login-dark.png";
const lightIllustration = "/images/illustrations/auth/v2-login-light.svg";
const borderedDarkIllustration =
  "/images/illustrations/auth/v2-login-dark-border.png";
const borderedLightIllustration =
  "/images/illustrations/auth/v2-login-light-border.png";

const Login = ({ mode }) => {
  const { settings } = useSettings();
  const authBackground = useImageVariant(mode, lightImg, darkImg);

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  );

  // const handleClickShowPassword = () => setIsPasswordShown(show => !show)
  return (
    <div className="flex bs-full justify-center">
      <div className="flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]">
        <div className="absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]">
          <Logo />
        </div>
        <div className="mt-5 flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]">
          <div>
            <Typography variant="h4">{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography>
            <Typography>Please sign in to continue</Typography>
          </div>
          {/* <Alert icon={false} className='bg-primaryLight'>
            <Typography variant='body2' color='primary.main'>
              Email: <span className='font-medium'>admin@materio.com</span> / Pass:{' '}
              <span className='font-medium'>admin</span>
            </Typography>
          </Alert> */}

          {/* <form
            noValidate
            action={() => {}}
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-5'
          >
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  autoFocus
                  type='email'
                  label='Email'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.email || errorState !== null) && {
                    error: true,
                    helperText: errors?.email?.message || errorState?.message[0]
                  })}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Password'
                  id='login-password'
                  type={isPasswordShown ? 'text' : 'password'}
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            size='small'
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                  {...(errors.password && { error: true, helperText: errors.password.message })}
                />
              )}
            />
            <div className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
              <FormControlLabel control={<Checkbox defaultChecked />} label='Remember me' />
              <Typography className='text-end' color='primary.main' component={Link} href='/forgot-password'>
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Log In
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>New on our platform?</Typography>
              <Typography component={Link} href='/register' color='primary.main'>
                Create an account
              </Typography>
            </div>
          </form> */}
          <Divider className="gap-3">or</Divider>
          <Button
            color="secondary"
            className="self-center text-textPrimary"
            // startIcon={<img src='/images/logos/google.png' alt='Google' width={22} />}
            // sx={{ '& .MuiButton-startIcon': { marginInlineEnd: 3 } }}
            // onClick={() => signIn('google')}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
      <div
        className={classnames(
          "flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden",
          {
            "border-ie": settings.skin === "bordered",
          }
        )}
      >
        <div className="plb-12 pis-12">
          <img
            src={characterIllustration}
            alt="character-illustration"
            className="max-bs-[500px] max-is-full bs-auto"
          />
        </div>
        <Illustrations
          image1={{ src: "/images/illustrations/objects/tree-2.png" }}
          image2={null}
          maskImg={{ src: authBackground }}
        />
      </div>
    </div>
  );
};

export default Login;
