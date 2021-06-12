import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    h5: {
        color: 'black',
    }
}));

const ThirdStep = (props) => {
    const classes = useStyles();

    const {values, handleChange } = props;

    const [show, setShow] = React.useState({
        showPassword: false,
        showConfirmPassword: false,
    });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleClickShowPassword = () => {
        setShow({ ...show, showPassword: !show.showPassword });
    };
    const handleClickShowConfirmPassword = () => {
        setShow({ ...show, showConfirmPassword: !show.showConfirmPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12}>

                        <form className={classes.root} noValidate autoComplete="off">

                            <div className='form-group'>
                                {/* <TextField fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined"
                                name="password"
                                type={values.showPassword ? 'text' : 'password'}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                      </InputAdornment>
                                    )
                                  }}
                                /> */}
                            <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    name="password"
                                    type={show.showPassword ? 'text' : 'password'}
                                    value={show.password}
                                    onChange={handleChange('password')}
                                    defaultValue={values.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            </div>
                            <div className='form-group'>
                            <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="confirmpassword"
                                    name="confirmPassword"
                                    type={show.showConfirmPassword ? 'text' : 'password'}
                                    value={show.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={130}
                                />
                            </FormControl>
                            </div>
                        </form>
                </Grid>
            </Grid>
        </div>
    );
}
export default ThirdStep;