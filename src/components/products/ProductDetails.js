import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    TextField,
    Card,
    Typography,
    MenuItem
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        margingTop: '15%',
        marginBottom:"4%",
        width: "500px",
        padding: "2%",
    }
}));

const productTags = [
    { title: 'Shirts' },
    { title: 'Jeans' },
    { title: 'formals' },
    { title: 'casuals' },
    { title: 'sports' },
    { title: "partywear" },
    { title: 'denim' },

];

const ProductDetails = () => {

    const classes = useStyles();

return(

<Card className={classes.root} variant="outlined">
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Product Details
                    </Typography>
                    <Grid container >
                        <Grid item xs={5}>
                            <div className='form-group'>
                                <TextField required fullWidth size="small" id="outlined-size-small" label="Quantity" variant="outlined" type="number" />
                            </div>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={6}>
                            <div className='form-group'>
                                {/* <TextField type="date" required fullWidth size="small" id="outlined-size-small"  variant="outlined" placeholder="Expiry Date" /> */}
                                <TextField
                                    required fullWidth size="small"
                                    name="expiry"
                                    label="Expiry Date"
                                    InputLabelProps={{ shrink: true, required: true }}
                                    type="date"
                                    variant="outlined"
                                />
                                {/* <DatePicker
                                    label="Basic example"
                                    
                                    renderInput={(params) => <TextField {...params} />}
                                /> */}
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container >
                        <Grid item xs={5}>
                            <div className='form-group'>
                                <TextField required fullWidth size="small" id="outlined-size-small" label="SKU" variant="outlined" type="number" helperText="Stock Keeping Unit" />
                            </div>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={6}>
                            <div className='form-group'>
                                {/* <TextField required fullWidth size="small" variant="outlined" /> */}
                                <Autocomplete
                                    size="small"
                                    multiple
                                    id="tags-outlined"
                                    options={productTags}
                                    getOptionLabel={(option) => option.title}
                                    defaultValue={[productTags[3]]}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Products Tags"
                                        />
                                    )}
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <div className='form-group'>
                        <TextField required fullWidth size="small" id="outlined-size-small" label="Product Measurement" variant="outlined"
                            select
                        >
                            <MenuItem value="Small">Small</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Large">Large</MenuItem>
                        </TextField>
                    </div>

                    <div className='form-group'>
                        <TextField required fullWidth size="small" id="outlined-size-small" label="Product Variance" variant="outlined"
                            select
                        >
                            <MenuItem value="TopWear">TopWear</MenuItem>
                            <MenuItem value="BottomWear">BottomWear</MenuItem>
                            <MenuItem value="FootWear">FootWear</MenuItem>
                        </TextField>
                    </div>
                </Card>

);
}
export default ProductDetails;