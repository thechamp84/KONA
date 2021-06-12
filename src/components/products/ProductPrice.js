import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    TextField,
    Card,
    Typography,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        margingTop: '15%',
        marginBottom:"4%",
        width: "500px",
        padding: "2%",
    }
}));


const ProductPrice = () => {

    const classes = useStyles();

return(

    <Card className={classes.root} variant="outlined">
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Product Price
                    </Typography>
                    <Grid container >
                        <Grid item xs={5}>
                            <div className='form-group'>
                                <TextField required fullWidth size="small" id="outlined-size-small" label="Direct Price" variant="outlined" type="number" />
                            </div>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={6}>
                            <div className='form-group'>
                                <TextField required fullWidth size="small" id="outlined-size-small" label="Sale Price" variant="outlined" type="number" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className='form-group'>
                                <FormControlLabel
                                    control={
                                        <Checkbox

                                            name="tax"
                                            color="primary"
                                        />
                                    }
                                    label="Charges Taxes on this Product"
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Card>

);
}
export default ProductPrice;