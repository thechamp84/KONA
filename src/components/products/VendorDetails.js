import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    TextField,
    Button,
    Card,
    Typography,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddVendorModal from './AddVendorModal';

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

const VendorDetails = () => {

    const classes = useStyles();

    const[showModal,setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        console.log("called method",showModal)
        setShowModal(false);
    }

return(

    <Card className={classes.root} variant="outlined">
                    <Grid container >
                        <Grid item xs={6}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Vendors Details
                    </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <div className='form-group'>
                                <Button size="small" variant="outlined" color="primary" style={{ float: "right", marginBottom: "5px" }} onClick={() => openModal()} >Add Vendor</Button>
                                {
                                    showModal ? <AddVendorModal open={showModal} closeModal={closeModal} /> : null
                                }
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12}>
                            <div className='form-group'>
                                <Autocomplete
                                    fullWidth
                                    size="small"
                                    id="combo-box-demo"
                                    options={productTags}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Vendor Name" variant="outlined" />}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Card>

);
}
export default VendorDetails;