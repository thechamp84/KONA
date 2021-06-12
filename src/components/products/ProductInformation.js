import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Card,
    Typography,
    MenuItem
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margingTop: '15%',
        marginBottom:"4%",
        width: "500px",
        padding: "2%",
    }
}));


const ProductInformation = () => {

    const classes = useStyles();

return(

<Card className={classes.root} variant="outlined">
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        General Information
                    </Typography>
                    <div className='form-group'>
                        <TextField required fullWidth size="small" id="outlined-size-small" label="Product type" variant="outlined"
                            select
                        >
                            <MenuItem value="TopWear">TopWear</MenuItem>
                            <MenuItem value="BottomWear">BottomWear</MenuItem>
                            <MenuItem value="FootWear">FootWear</MenuItem>
                        </TextField>
                    </div>
                    <div className='form-group'>
                        <TextField required fullWidth size="small" id="outlined-size-small" label="Product Category" variant="outlined"
                            select
                        >
                            <MenuItem value="Shirts">Shirts</MenuItem>
                            <MenuItem value="Jeans">Jeans</MenuItem>
                            <MenuItem value="Shoes">Shoes</MenuItem>
                        </TextField>
                    </div>
                    <div className='form-group'>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Product Details"
                            multiline
                            rows={3}
                            placeholder="Description"
                            //   defaultValue="Default Value"
                            variant="outlined"
                        />
                    </div>
                </Card>

);
}
export default ProductInformation;