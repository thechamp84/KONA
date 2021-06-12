import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import item from '../../assets/shirt.png'
import IconButton from '@material-ui/core/IconButton';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { MenuItem, TextField, Button, InputAdornment, SvgIcon, Link, ClickAwayListener, Popper, MenuList, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCustomer from '../checkout/AddCustomer'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import shirt from '../../assets/shirt.png'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height:'100%',
        margin:0,
    },
    paper: {
        padding: theme.spacing(1),
        borderRadius: "10px",
        borderWidth: 1,
        height:'100%',
        margin:0,
    },

}));

const productTags = [
    { title: 'Himanshu' },
    { title: 'Vasu' },
    { title: 'sid' },
    { title: 'Shreya' },
    { title: 'pranshu' },
    { title: "kitty" },
    { title: 'pramit' },
];

const AddToBag = () => {

    const [open, setOpen] = React.useState();


    const [options, setOptions] = React.useState(null);

    const [quantity,setQuantity] = React.useState(1);

    const [price,setPrice] = React.useState(300);

    const [vat,setVat] = React.useState(((5/100) * price));
  
  const handleClickOption = event => {
    if (options && options.contains(event.target)) {
        setOptions(null);
    } else {
        setOptions(event.currentTarget);
    }
  };
  const handleCloseOption = () => {
    setOptions(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantityIncrement = () => {
      setQuantity(quantity + 1);
      setPrice(price * 2);
  }

  const handleQuantityDecrement = () => {
    setQuantity(quantity - 1);
    setPrice(price / 2);
}

useEffect(() => {
    const VAT = () => {
        setVat((5/100) * price);
    }
    VAT();
  });


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container direction="column" justify="space-evenly">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid container direction="row" justify="space-between">
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Typography>
                                    Bag
                                </Typography>
                            </Grid>
                            <Grid item >
                                <DeleteIcon />
                            </Grid>
                        </Grid>

                        <Grid container direction="row" justify="space-between">
                            <Grid item xs={10} sm={10} md={10} lg={10}>
                            <Button fullWidth size="small" onClick={handleClickOpen} style={{backgroundColor:'#000',color:'#fff',marginTop:'5%'}}><PersonAddIcon /> &nbsp; &nbsp; Add Customer</Button>
                            </Grid>
                            <Grid item >
                            <Tooltip title="Options">
                            <Button style={{float:'right',marginTop:'20%'}}
                                    color={window.innerWidth > 959 ? "#000" : "white"}
                                    justIcon={window.innerWidth > 959}
                                    simple={!(window.innerWidth > 959)}
                                    aria-owns={options ? "profile-menu-list-grow" : null}
                                    aria-haspopup="true"
                                    onClick={handleClickOption}
                                    >
                                    <MoreVertOutlinedIcon style={{float:'right'}} />
                                    </Button>
                            </Tooltip>        
                                    <Popper
                                    style={{backgroundColor:'whitesmoke'}}
                                    open={Boolean(options)}
                                    anchorEl={options}
                                    transition
                                    disablePortal
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                      }}
                                      transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                      }}
                                    >
                                    <ClickAwayListener onClickAway={handleCloseOption}>
                                    <MenuList role="menu">
                                    <MenuItem>
                                   <AddCircleOutlineOutlinedIcon /> &nbsp; Add Note
                                    </MenuItem>
                                    <MenuItem>
                                    <BorderColorOutlinedIcon /> &nbsp; Edit Customer
                                    </MenuItem>
                                    <MenuItem>
                                    <DeleteIcon /> &nbsp; Delete Customer
                                    </MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                    </Popper>
                                    {open ? <AddCustomer open={true} handleClose={handleClose} /> : null}
                            </Grid>
                        </Grid>
                            
                            {/* <Grid container direction="row" justify="center">   
                            <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:'3%'}}> */}
                            {/* <TextField fullWidth size="small" variant="outlined" /> */}
                            {/* <Grid container direction="row" justify="space-between">
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Grid item xs={10} sm={10} md={10} lg={10} style={{marginTop:'3%'}}>
                                <Button fullWidth onClick={handleClickOpen} style={{backgroundColor:'#000',color:'#fff'}}><PersonAddIcon />Add Customer</Button>
                                
                            </Grid>
                            <Grid item >
                            <Button style={{float:'right',marginTop:'5px'}}
                                    color={window.innerWidth > 959 ? "transparent" : "white"}
                                    justIcon={window.innerWidth > 959}
                                    simple={!(window.innerWidth > 959)}
                                    aria-owns={options ? "profile-menu-list-grow" : null}
                                    aria-haspopup="true"
                                    onClick={handleClickOption}
                                    >
                                    <MoreVertOutlinedIcon style={{float:'right'}} />
                                    </Button>
                                    <Popper
                                    style={{backgroundColor:'whitesmoke'}}
                                    open={Boolean(options)}
                                    anchorEl={options}
                                    transition
                                    disablePortal
                                    >
                                    <ClickAwayListener onClickAway={handleCloseOption}>
                                    <MenuList role="menu">
                                    <MenuItem>
                                   <AddCircleOutlineOutlinedIcon /> Add Note
                                    </MenuItem>
                                    <MenuItem>
                                    <BorderColorOutlinedIcon /> Edit Customer
                                    </MenuItem>
                                    <MenuItem>
                                    <DeleteIcon /> Delete Customer
                                    </MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                    </Popper>
                            </Grid>
                            {open ? <AddCustomer open={true} handleClose={handleClose} /> : null}
                            </Grid>
                            </Grid>     */}

                        <Grid container direction="row" justify="space-between">
                            <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:'3%'}}>
                            <Autocomplete
                                    fullWidth
                                    size="small"
                                    id="combo-box-demo"
                                    options={productTags}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Search Customer" variant="outlined" 
                                    // InputProps={{
                                    //     startAdornment: (
                                    //       <InputAdornment position="start">
                                    //         <PersonAddIcon />
                                    //       </InputAdornment>
                                    //     ),
                                    //   }}
                                    //   InputProps={{
                                    //     startAdornment: <PersonAddIcon />
                                    //   }}
                                    />}
                                />
                            </Grid>
                        </Grid>    

                            <Grid container direction="row" justify="space-between" style={{marginTop:'3%'}}>
                            <Grid item xs={7} sm={7} md={7} lg={7}>
                                <Grid container>
                                <Grid item item xs={4} sm={4} md={4} lg={4}>
                                <div>
                                   <Paper style={{padding:'2%',width:'60px',height:'60px'}} elevation={0}>
                                   <img src={shirt} width="55px" height="55px"/>
                                   </Paper>
                               </div>
                                </Grid>
                                <Grid item item xs={8} sm={8} md={8} lg={8}>
                                <div>
                                   <h5>Casual Shirt</h5>
                               </div>
                               <div>
                                   <p>SAR 300</p>
                               </div>
                                </Grid>
                                </Grid>
                               
                            </Grid>
                            <Grid item >
                                <Grid container direction="row" style={{textAlign:'center',float:'right'}}>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        { quantity >= 2 ? 
                                    <Button onClick={handleQuantityDecrement}><RemoveIcon /></Button>
                                      : <Button disabled ><RemoveIcon /></Button> }
                                    </Grid>
                                    <Grid item >
                                    <p style={{fontSize:'20px'}}> &nbsp; {quantity} &nbsp; </p>
                                    </Grid>
                                    <Grid item > 
                                    <Button onClick={handleQuantityIncrement}><AddIcon /></Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid container direction="row" justify="space-between" style={{marginTop:'100vh'}}>                   
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <h5>Discount %</h5>                
                        </Grid>  
                        <Grid item >
                           <Button>+ Add</Button>         
                        </Grid> 
                        </Grid>

                        <Grid container direction="row" justify="space-between">                   
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <h5>SubTotal</h5>                
                        </Grid>  
                        <Grid item >
                           <h6>SR {price}</h6>      
                        </Grid> 
                        </Grid>

                        <Grid container direction="row" justify="space-between">                   
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <h5>Tax (5%VAT Included)</h5>                
                        </Grid>  
                        <Grid item >
                             <h6>SR {vat}</h6>          
                        </Grid> 
                        </Grid>

                        <Grid container direction="row" justify="space-between">                   
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <h5>Total</h5>                
                        </Grid>  
                        <Grid item >
                        <h6>SR {price + vat}</h6>          
                        </Grid> 
                        </Grid>
                                         


                            
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                               <Button style={{backgroundColor:'#3f51b5',color:'#fff'}} fullWidth >Payment</Button>
                            </Grid>
                       
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
export default AddToBag;