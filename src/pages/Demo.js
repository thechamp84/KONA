import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


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

const Demo = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
       
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    
                        <h5 className={classes.h5}>Sign In to Kona</h5>

                        <form className={classes.root} noValidate autoComplete="off">

                            <div className='form-group'>
                                <TextField id="outlined-size-small" size="small" label="Company ID" variant="outlined" />
                            </div>
                            <div className='form-group'>
                                <TextField size="small" id="outlined-basic" label="Username" variant="outlined" />
                            </div>
                            <div className='form-group'>
                                <FormControl size="small" className={clsx(classes.margin, classes.textField)} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
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
                            <Grid container >
                            <Grid item md>
                            <div className='form-group'>
                                <FormControlLabel
                                justifyContent="flex-start"
                                    control={<Checkbox color="primary" />}
                                    label="Remember me"
                                    labelPlacement="end"
                                />
                            </div>    
                            </Grid>
                            <Grid item md>
                            <div className='form-group'>
                                <Link href="#" onClick={preventDefault}>
                                    Forget Password ?
                                </Link>
                            </div>
                            </Grid>
                            </Grid>            
                            <div className='form-group'>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                            </div>
                          <div className='form-group'>
                          <Link href="#" onClick={preventDefault}>
                                    Don't have an account ?
                                </Link>
                          </div>
                        </form>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
export default Demo;