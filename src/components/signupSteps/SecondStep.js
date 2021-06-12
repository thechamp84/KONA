import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
//import OTPInput, { ResendOTP } from "otp-input-react";
import OtpInput from 'react-otp-input';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paper: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    otp: {
        width: "1px",
        height: "50px",
        textalign: "center",
        // borderInline: "none",
        // borderTop: 0,
    },
    inputStyle:{
        width: '5rem',  
        height: '3rem',  
        marginRight: '1rem',
        marginLeft: '1rem',  
        fontSize: '2rem',  
        borderRadius: 4,  
        border: '2px solid rgba(0,0,0,0.3)',  
      }
}));



const SecondStep = (props) => {
    const classes = useStyles();

    const { values, handleChange } = props;

    // const [state, setState] = React.useState({
    //     bussiness: '',
    // });
    // const [OTP, setOTP] = useState("");

    // const handleOtp = (value) => {
    //     setOTP(value);
    // }

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     setState({
    //         ...state,
    //         [name]: event.target.value,
    //     });
    // };

    return (

        <Grid container >
            <Grid xs={false} sm={12} md={12}>

                <form className={classes.root} noValidate autoComplete="off">

                    <div className='form-group'>
                        <TextField fullWidth id="outlined-size-small" label="Name" variant="outlined" name="name" onChange={handleChange('name')} defaultValue={values.name}/>
                    </div>
                    {/* <div className='form-group'>
                <TextField select fullWidth id="outlined-size-small" label="What describes you best" variant="outlined" />
            </div> */}
                    {/* <div className='form-group'>
                        <FormControl fullWidth variant="outlined" margin="normal" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">What describes you best ?</InputLabel>
                            <Select
                                native
                                value={state.bussiness}
                                onChange={handleChange}
                                label="What describes you best ?"
                                inputProps={{
                                    name: 'role',
                                    id: 'role',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option >IT</option>
                                <option >Medical</option>
                                <option >Arts</option>
                            </Select>
                        </FormControl>
                    </div> */}

                    <div className='form-group'>
                        <TextField fullWidth id="outlined-size-small" label="What describes you best" variant="outlined" 
                        select name="person"
                        onChange={handleChange('person')} defaultValue={values.person}
                        >
                            <MenuItem value="Owner">Owner</MenuItem>
                            <MenuItem value="Employee">Employee</MenuItem>
                            <MenuItem value="HR">HR</MenuItem>
                        </TextField>
                    </div>

                    <div className='form-group'>
                        <Grid container >
                            <Grid item xs={3}>
                                {/* <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        +966
                            </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        size="small"
                                        label="+966"
                                    >
                                        <MenuItem value="+966">
                                            <em>+966</em>
                                        </MenuItem>
                                        <MenuItem value={10}>+6</MenuItem>
                                        <MenuItem value={20}>+91</MenuItem>
                                        <MenuItem value={30}>+01</MenuItem>
                                    </Select>
                                </FormControl> */}
                                <TextField fullWidth id="outlined-size-small" label="Code" variant="outlined"  name="userCode"
                                    select onChange={handleChange('userCode')} defaultValue={values.userCode}
                                >
                                    <MenuItem value="966">+966</MenuItem>
                                    <MenuItem value="91">+91</MenuItem>
                                    <MenuItem value="01">+01</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid xs={1}></Grid>
                            <Grid xs={8}>
                                <TextField
                                    fullWidth
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    label='Phone Number'
                                    variant='outlined'
                                    name='userPhone'
                                    onChange={handleChange('userPhone')}
                                    defaultValue={values.userPhone}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div className='form-group'>
                        <p>Enter OTP here</p>
                        <Grid container >
                            <Grid item xs={12}>
                                <div className='form-group' >
                                    <OtpInput
                                        onChange={handleChange('otp')}
                                        defaultValue={values.otp}
                                        inputStyle={classes.inputStyle}
                                        name="otp"
                                        numInputs={4}
                                        separator={<span>-</span>}
                                        isInputNum
                                        shouldAutoFocus
                                    />
                                </div>
                                {/* <OTPInput
                                    value={OTP}
                                    onChange={setOTP}
                                    autoFocus
                                    OTPLength={4}
                                    otpType="number"
                                    disabled={false}
                                    secure
                                />
                                <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}

                                {/* <TextField className={classes.otp} />
                                <TextField className={classes.otp} />
                                <TextField className={classes.otp} />
                                <TextField className={classes.otp} /> */}

                            </Grid>
                        </Grid>
                    </div>
                    <div className='form-group'>
                        <TextField fullWidth id="outlined-size-small" label="Email" variant="outlined" placeholder="youremail@emaple.com" 
                        name="email" onChange={handleChange('email')} defaultValue={values.email} 
                        />
                    </div>
                </form>
            </Grid>
        </Grid>
    );

}
export default SecondStep;