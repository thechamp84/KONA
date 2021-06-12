import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Button,
    Link,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import Tooltip from '@material-ui/core/Tooltip';
import ProductInformation from './ProductInformation';
import ProductDetails from './ProductDetails';
import ProductPrice from './ProductPrice';
import VendorDetails from './VendorDetails';
import ProductImageUpload from './ProductImageUpload';
// import DatePicker from '@material-ui/lab/DatePicker';



const useStyles = makeStyles((theme) => ({
    root: {
        margingTop: '15%',
        marginBottom: "4%",
        width: "500px",
        padding: "2%",
    }
}));

// const productTags = [
//     { title: 'Shirts' },
//     { title: 'Jeans' },
//     { title: 'formals' },
//     { title: 'casuals' },
//     { title: 'sports' },
//     { title: "partywear" },
//     { title: 'denim' },

// ];

// const preventDefault = (event) => event.preventDefault();

const AddProduct = () => {
    const classes = useStyles();

    // const [showModal, setShowModal] = useState(false);

    // const openModal = () => {
    //     setShowModal(true);
    // }

    // const closeModal = () => {
    //     console.log("called method", showModal)
    //     setShowModal(false);
    // }

    return (

        <Paper className={classes.root} elevation={0}>
            <Grid container >
                <Grid item xs={1}>
                    <Link href="/products" >
                        <ArrowBackIcon />
                    </Link>
                </Grid>
                <Grid item xs={8}>
                    <p>Add New Product</p>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip title="BarCode Scanner"><p><SettingsOverscanIcon /> scan code</p></Tooltip>
                </Grid>

                <ProductInformation />

                <ProductDetails />

                <ProductPrice />

                <VendorDetails />

                <ProductImageUpload />

                <Button fullWidth variant="contained" color="primary" style={{ float: "right" }}>Save</Button>



                {/* <Card className={classes.root} variant="outlined">
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Vendors Details
                    </Typography>
                    <Grid container >
                        <Grid item xs={5}>
                            <div className='form-group'>
                                <TextField required fullWidth size="small" id="outlined-size-small" label="Vendor Name" variant="outlined" />
                            </div>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={6}>
                            <div className='form-group'>
                                 <TextField required fullWidth size="small" id="outlined-size-small"  variant="outlined" label="Contact Name" />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container >
                        <Grid item xs={5}>
                            <div className='form-group'>
                                <TextField required fullWidth size="small" id="outlined-size-small" label="Phone Number" variant="outlined"  />
                            </div>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={6}>
                            <div className='form-group'>
                                 <TextField required fullWidth size="small" variant="outlined" label="Email ID" type="email" />
                            </div>
                        </Grid>
                    </Grid>

                    <div className='form-group'>
                        <TextField required fullWidth size="small" id="outlined-size-small" label="Vendor Website" variant="outlined" />
                    </div>

                    <div className='form-group'>
                    <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Vendor Address"
                            multiline
                            rows={3}
                            placeholder="Address Details"
                            variant="outlined"
                        />
                    </div>
                </Card> */}




            </Grid>
        </Paper>
    );

}
export default AddProduct;