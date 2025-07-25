// React Imports
import { useState } from "react";

// Next Imports
// import Link from 'react-router-dom/Link'
// import { useParams, useRouter, useSearchParams } from 'next/navigation'

// MUI Imports
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Third-party Imports
import { valibotResolver } from "@hookform/resolvers/valibot";
import classnames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { email, minLength, nonEmpty, object, pipe, string } from "valibot";

// Component Imports
import Illustrations from "@components/Illustrations";
import Logo from "@components/layout/shared/Logo";

// Config Imports
import themeConfig from "@configs/themeConfig";

// Hook Imports
import { useImageVariant } from "@core/hooks/useImageVariant";
import { useSettings } from "@core/hooks/useSettings";
import { getServerMode } from "@/core/utils/serverHelpers";

// Util Imports
// import { getLocalizedUrl } from '@/utils/i18n'
// import { useParams, useSearchParams } from 'react-router-dom'

const schema = object({
  email: pipe(
    string(),
    minLength(1, "This field is required"),
    email("Please enter a valid email address")
  ),
  password: pipe(
    string(),
    nonEmpty("This field is required"),
    minLength(5, "Password must be at least 5 characters long")
  ),
});

const Login = ( ) => {
  // State Variables
  let mode = getServerMode();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [errorState, setErrorState] = useState(null);

  // Vars
  const darkImg = "/images/pages/auth-v2-mask-dark.png";
  const lightImg = "/images/pages/auth-v2-mask-light.png";
  const darkIllustration = "/images/illustrations/auth/v2-login-dark.png";
  const lightIllustration = "/images/illustrations/auth/v2-login-light.svg";
  const borderedDarkIllustration =
    "/images/illustrations/auth/v2-login-dark-border.png";
  const borderedLightIllustration =
    "/images/illustrations/auth/v2-login-light-border.png";

  // Hooks
  // const router = useRouter()
  // const searchParams = useSearchParams()
  // const { lang: locale } = useParams()
  const { settings } = useSettings();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const authBackground = useImageVariant(mode, lightImg, darkImg);

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  );

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const onSubmit = async (data) => {
    try {
      // TODO: Replace with your authentication API call
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // TODO: Handle successful login (e.g., store token, redirect)
        console.log("Login successful:", result);
      } else {
        const error = await response.json();
        setErrorState(error);
      }
    } catch (error) {
      setErrorState({ message: ["Login failed. Please try again."] });
    }
  };

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

          <form
            noValidate
            action={() => {}}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  autoFocus
                  type="email"
                  label="Email"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    errorState !== null && setErrorState(null);
                  }}
                  {...((errors.email || errorState !== null) && {
                    error: true,
                    helperText:
                      errors?.email?.message || errorState?.message[0],
                  })}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Password"
                  id="login-password"
                  type={isPasswordShown ? "text" : "password"}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    errorState !== null && setErrorState(null);
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            size="small"
                            edge="end"
                            onClick={handleClickShowPassword}
                            onMouseDown={(e) => e.preventDefault()}
                            aria-label="toggle password visibility"
                          >
                            <i
                              className={
                                isPasswordShown
                                  ? "ri-eye-off-line"
                                  : "ri-eye-line"
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  {...(errors.password && {
                    error: true,
                    helperText: errors.password.message,
                  })}
                />
              )}
            />
            <div className="flex justify-between items-center flex-wrap gap-x-3 gap-y-1">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              {/* <Typography className='text-end' color='primary.main' component={Link} href='/forgot-password'> */}
              <Typography className="text-end" color="primary.main">
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant="contained" type="submit">
              Log In
            </Button>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <Typography>New on our platform?</Typography>
              {/* <Typography component={Link} href='/register' color='primary.main'> */}
              <Typography color="primary.main">Create an account</Typography>
            </div>
          </form>
          <Divider className="gap-3">or</Divider>
          <Button
            color="secondary"
            className="self-center text-textPrimary"
            startIcon={
              <img src="/images/logos/google.png" alt="Google" width={22} />
            }
            sx={{ "& .MuiButton-startIcon": { marginInlineEnd: 3 } }}
            onClick={() => {
              // TODO: Implement your own Google sign-in logic
              console.log("Google sign-in clicked");
            }}
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
