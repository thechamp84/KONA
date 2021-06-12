import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const FirstStep = (props) => {
    const classes = useStyles();

    const { values, handleChange } = props;

    // const [state, setState] = React.useState({
    //     company: ' ',
    //     bussiness: '',
    //     website: '',
    //     code:'',
    //     phone: '',
    //     team: ''
    // });

    // const handleChange = (event) => {
    //     console.log("chips clicked")
    //     const name = event.target.name;
    //     setState({
    //         ...state,
    //         [name]: event.target.value,
    //     });
    //     console.log("state",state);
    // };

    return (

        <form className={classes.root} noValidate autoComplete="off">

            <div className='form-group'>
                <TextField fullWidth id="outlined-size-small" label="Company's Name" variant="outlined" onChange={handleChange('company')} name="company" defaultValue={values.company}/>
            </div>
            <div className='form-group'>
                <TextField fullWidth id="outlined-size-small" label="Bussiness" variant="outlined"  name="bussiness" onChange={handleChange('bussiness')} defaultValue={values.bussiness}
                select
                >
                    <MenuItem value="IT">IT</MenuItem>
                    <MenuItem value="Medical">Medical</MenuItem>
                    <MenuItem value="Restaurant">Restaurant</MenuItem>
                    </TextField>
            </div>
            {/* <div className='form-group'>
                <FormControl fullWidth variant="outlined" margin="normal" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Bussiness Direction</InputLabel>
                    <Select
                        native
                        value={state.bussiness}
                        onChange={handleChange}
                        label="Bussiness Direction"
                        inputProps={{
                            name: 'bussiness',
                            id: 'bussiness',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value="IT" >IT</option>
                        <option value="Medical">Medical</option>
                        <option value="Arts">Arts</option>
                    </Select>
                </FormControl>
            </div> */}
            <div className='form-group'>
                <TextField id="full-width-text-field" fullWidth label="Business Website" variant="outlined" name="website" onChange={handleChange('website')} defaultValue={values.website}/>
            </div>

            <div className='form-group'>
                <Grid container >
                    <Grid item xs={3}>
                    <div className='form-group'>
                <TextField fullWidth id="outlined-size-small" label="Code" variant="outlined" onChange={handleChange('code')} defaultValue={values.code}
                name="code" select
                >
                    <MenuItem value="966">+966</MenuItem>
                    <MenuItem value="91">+91</MenuItem>
                    <MenuItem value="01">+01</MenuItem>
                </TextField>
            </div>
                        {/* <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                size="small"
                                label="Code"
                                name="code"
                                onChange={handleChange}
                            >
                                <MenuItem value="+966">
                                    <em>+966</em>
                                </MenuItem>
                                <MenuItem value={10}>+61</MenuItem>
                                <MenuItem value={20}>+91</MenuItem>
                                <MenuItem value={30}>+01</MenuItem>
                            </Select>
                        </FormControl> */}
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
                            name='phone'
                            onChange={handleChange('phone')}
                            defaultValue={values.phone}
                        />
                    </Grid>
                </Grid>
            </div>

            <div className='form-group'>
                <p>How many people are in your team ?</p>
                <Grid container >
                    <Grid item xs={12}>
                            
                    <Chip name="team" style={{width: "130px",marginRight:"25px",padding:"4%"}} label="Only me" onClick={handleChange('team')} clickable value="Only me" defaultValue={values.team}/>
                    <Chip onClick={handleChange('team')} name="team" style={{width: "120px",marginRight:"25px",padding:"4%"}} label="2-5" clickable />
                    <Chip onClick={handleChange('team')} name="team" style={{width: "120px",marginRight:"25px",padding:"4%"}} label="6-10" clickable />
                    <Chip onClick={handleChange('team')} name="team" style={{width: "120px",padding:"4%"}} label="11-20" clickable />
                   <br/>
                   <br/>
                    <Chip onClick={handleChange('team')} name="team" style={{width: "130px",marginRight:"25px",padding:"4%"}} label="21-40"  clickable />
                    <Chip onClick={handleChange('team')} name="team" style={{width: "120px",marginRight:"25px",padding:"4%"}} label="41-50" clickable />
                    <Chip onClick={handleChange('team')} name="team" style={{width: "120px",marginRight:"25px",padding:"4%"}} label="51-100" clickable />
                    <Chip onClick={handleChange('team')} name="team" style={{width: "125px",padding:"4%"}} label="101-500" value="101-500" clickable />

                    </Grid>
                    <Grid item xs={12}>        

                        {/* <Button variant="contained" >
                            Only me
            </Button>

                        <Button variant="contained" >
                            2-5
            </Button>

                        <Button variant="contained" >
                            6-10
            </Button>

                        <Button variant="contained" >
                            11-20
            </Button>
            
                    </Grid>

                    <Grid xs={12}>
                        <Button variant="contained" >
                            21-40
            </Button>

                        <Button variant="contained" >
                            41-50
            </Button>

                        <Button variant="contained" >
                            51-100
            </Button>

                        <Button variant="contained" >
                            101-500
            </Button> */}
                    </Grid>
                </Grid>
            </div>
        </form>
    );

}
export default FirstStep;