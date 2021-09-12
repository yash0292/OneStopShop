import React, { useState } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

// core components
import componentStyles from "assets/theme/views/auth/login.js";

// Social Login
import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const responseGoogle = (response) => {
  console.log(response);
};

const responseFacebook = (response) => {
  console.log(response);
};

const useStyles = makeStyles(componentStyles);

const Login = ({ history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChangehandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { username, password } = formData;
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const user = { username, password };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(user);

      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        body,
        config
      );
      console.log(res.data);
      localStorage.setItem("token", res.data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item xs={12} lg={5} md={7}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Box
                fontSize="80%"
                fontWeight="400"
                component="small"
                color={theme.palette.gray[600]}
              >
                Sign in with
              </Box>
            }
            titleTypographyProps={{
              component: Box,
              textAlign: "center",
              marginBottom: "1rem!important",
              marginTop: ".5rem!important",
              fontSize: "1rem!important",
            }}
            subheader={
              <Box textAlign="center">
                <FacebookLogin
                  appId="441897337116410"
                  isProcessing={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <Box
                      component={Button}
                      variant="contained"
                      marginRight=".5rem!important"
                      classes={{ root: classes.buttonRoot }}
                      onClick={renderProps.onClick}
                    >
                      <Box component="span" marginRight="4px">
                        <Box
                          alt="..."
                          component="img"
                          width="20px"
                          className={classes.buttonImg}
                          src={
                            require("assets/img/icons/common/facebook.svg")
                              .default
                          }
                        ></Box>
                      </Box>
                      <Box component="span" marginLeft=".75rem">
                        Facebook
                      </Box>
                    </Box>
                  )}
                />
                <GoogleLogin
                  clientId="342197514291-gg1mdgadpuggksh1oeg2ubnq4sha9ph6.apps.googleusercontent.com"
                  autoLoad={false}
                  render={(renderProps) => (
                    <Button
                      variant="contained"
                      classes={{ root: classes.buttonRoot }}
                      onClick={renderProps.onClick}
                    >
                      <Box component="span" marginRight="4px">
                        <Box
                          alt="..."
                          component="img"
                          width="20px"
                          className={classes.buttonImg}
                          src={
                            require("assets/img/icons/common/google.svg")
                              .default
                          }
                        ></Box>
                      </Box>
                      <Box component="span" marginLeft=".75rem">
                        Google
                      </Box>
                    </Button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </Box>
            }
          ></CardHeader>
          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color={theme.palette.gray[600]}
              textAlign="center"
              marginBottom="1rem"
              marginTop=".5rem"
              fontSize="1rem"
            >
              <Box fontSize="80%" fontWeight="400" component="small">
                Or sign in with credentials
              </Box>
            </Box>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Email"
                name="username"
                value={username}
                onChange={(e) => onChangehandle(e)}
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => onChangehandle(e)}
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Remeber me"
              labelPlacement="end"
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,
              }}
            />
            {/* <Button type="submit" onClick={(e) => onSubmitHandle(e)}>
              Sign in
            </Button> */}
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                onClick={(e) => {
                  onSubmitHandle(e);
                }}
              >
                Sign in
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid container component={Box} marginTop="1rem">
          <Grid item xs={6} component={Box} textAlign="left">
            <a
              href="#admui"
              onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              Forgot password
            </a>
          </Grid>
          <Grid item xs={6} component={Box} textAlign="right">
            <a
              href="#admui"
              onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              Create new account
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
