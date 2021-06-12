import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FirstStep from '../components/signupSteps/FirstStep';
import SecondStep from '../components/signupSteps/SecondStep';
import ThirdStep from '../components/signupSteps/ThirdStep';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  left: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: "#466be3",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  verticalStep: {
    color: "white",
    backgroundColor: "#466be3",
  },
  verticalStepLabel: {
    color: "white",
  },
  texts: {
    color: "white",
    marginLeft: "20%"
  },
  h2:{
    marginTop: "22%",
    marginBottom: "10%",
    marginLeft: "10%",
  },
  h3:{
    marginTop: "10%",
    marginLeft: "10%",
  }
  
}));



const Signup = () => {

  const classes = useStyles();
  
  const [state, setState] = React.useState({
    step:1,
    company:'',
    bussiness:'',
    website:'',
    code:'',
    phone:'',
    team:'',
    name:'',
    person:'',
    userCode:'',
    userPhone:'',
    otp:'',
    email:'',
    password: '',
    confirmPassword: '',
    showPassword: false,
  });

  // const handleChange = (input) => e =>{
  //   setState({ [input]: e.target.value });
  // };

  const handleChange = data => e => {
    //const name = event.target.name;
    // setState({
    //     ...state,
    //     [event.target.name]: event.target.value,
    // });
    setState({ ...state, [e.target.name]: e.target.value });
};

  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();

  const { 
    company,
    bussiness,
    website,
    code,
    phone,
    team,
    name,
    person,
    userCode,
    userPhone,
    otp,
    email,
    password,
    confirmPassword } = state;

    const values = { 
      company,
      bussiness,
      website,
      code,
      phone,
      team,
      name,
      person,
      userCode,
      userPhone,
      otp,
      email,
      password,
      confirmPassword 
    };

    function getSteps() {
      return ['Tell us about your company', 'Tell us about yourself', 'Setup your password'];
    }
    
    function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return <FirstStep values={values} handleChange={handleChange}/>
        case 1:
          return <SecondStep values={values} handleChange={handleChange}/>
        case 2:
          return <ThirdStep values={values} handleChange={handleChange}/>
        default:
          return <FirstStep />
      }
    }


  const handleNext = () => {
    console.log("steps",steps);
  console.log("company ",state.company)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.left} >
        <div className={classes.texts}>
        <h2 className={classes.h2}>KONA</h2>
        <h3 className={classes.h3}>Get Started</h3>
        
          <Stepper className={classes.verticalStep} activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step  className={classes.verticalStepLabel} key={label}>
                <StepLabel  className={classes.verticalStepLabel}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          </div>      
              
      </Grid>
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          

              
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>Registration Successfull</Typography>
                <Link href="/login" >
                  Login
                </Link>
              </div>
            ) : (
              <Grid container>
                <Grid xs={2} sm={2} md={2} lg={2}></Grid>
              <Grid xs={8} sm={8} md={8} lg={8}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
                </Grid>
                <Grid xs={2} sm={2} md={2} lg={2}></Grid>
          </Grid>
            )}
          </div>
      </Grid>
    </Grid>
  );
}
export default Signup;