import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
  Grid,
  TextField,
  Typography,
  Paper,
  MenuItem
} from '@material-ui/core';


const styles = (theme) => ({
  root: {
    color: '#fff'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    color: '#006687',
    padding: '5%',
    marginRight: '15%',
    marginTop: '6%'
  },
  input: {
    color: '#fff',
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    }
  },
}))(MuiDialogContent);



// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

const AddCustomer = (props) => {

  const classes = withStyles();

  return (
    <div >
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open} >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        <Typography style={{color:'#000'}}>
        Customer Details
        </Typography>
        </DialogTitle>
        <DialogContent >
          {/* <Paper className={classes.paper} elevation={0}> */}
          
          {/* <Typography id="simple-modal-title" className={classes.title} color="textSecondary" gutterBottom>
                        Vendors Details
                    </Typography> */}
          <Grid container >
            <Grid item xs={5} sm={5} md={5} lg={5}>
              <div className='form-group'>
                <TextField required fullWidth size="small" id="outlined-size-small" label="Full Name" variant="outlined"
                  InputProps={{
                    className: classes.input
                  }}
                />
              </div>
            </Grid>
            <Grid xs={1} sm={1} md={1} lg={1}></Grid>
            <Grid xs={6} sm={6} md={6} lg={6}>
              <div className='form-group'>
                <TextField required fullWidth size="small" id="outlined-size-small" variant="outlined" label="Email ID"
                type="email"
                  InputProps={{
                    classes: {
                      input: classes.textFieldColor
                    }
                  }}
                />
              </div>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs={5} sm={5} md={5} lg={5}>
              <div className='form-group'>
                <TextField className={classes.textFieldColor} required fullWidth size="small" id="outlined-size-small" label="Phone Number" variant="outlined" />
              </div>
            </Grid>
            <Grid xs={1} sm={1} md={1} lg={1}></Grid>
            <Grid xs={6} sm={6} md={6} lg={6}>
              <div className='form-group'>
                <TextField select required fullWidth size="small" id="outlined-size-small" variant="outlined" label="Gender" >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                </TextField>    
              </div>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className='form-group'>
                <TextField required fullWidth size="small" id="outlined-size-small" label="Address" variant="outlined" 
                 multiline
                 rows={4}
                 placeholder="Address Details"
                />
              </div>
            </Grid>
          </Grid>

          <div className='form-group'>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button fullWidth variant="contained" style={{ float: "right", backgroundColor: "#000", color: '#fff', marginBottom: '10%' }}>Add Customer</Button>
            </Grid>
          </div>

          <div className='form-group'>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: '10%' }}>

            </Grid>
          </div>
          {/* </Paper> */}
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
export default AddCustomer;