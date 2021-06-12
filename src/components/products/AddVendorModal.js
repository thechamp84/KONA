import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Dialog
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    margingTop: '15%',
    width: "500px",
    padding: "2%",
  },
  modal:{
    padding: "5%",
  }
}));

const AddVendorModal = (open, props) => {
  
  const classes = useStyles();

  //const [modalStyle] = React.useState(getModalStyle);
  const [close, setClose] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setClose(false);
  };

  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <h2 id="simple-modal-title">Text in a modal</h2>
  //     <p id="simple-modal-description">
  //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //     </p>
  //     <SimpleModal />
  //   </div>
  // );



  return (
    <div>
      <Container>
        {/* <Modal
        open={open}
        onClose={props.closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      > */}
        <Dialog aria-labelledby="customized-dialog-title" open={close ? open : close} onClose={props.closeModal}>
          <div className={classes.modal}>
          {/* <Card className={classes.root} variant="outlined"> */}
            <Grid container >
              <Grid item xs={11}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Vendors Details
                    </Typography>
              </Grid>
              <Grid item xs={1}>
                <div className='form-group'>
                  <Button onClick={handleClose}>
                  <CloseIcon />
                  </Button>
                </div>
              </Grid>
            </Grid>
            {/* <Typography id="simple-modal-title" className={classes.title} color="textSecondary" gutterBottom>
                        Vendors Details
                    </Typography> */}
            <Grid container >
              <Grid item xs={5}>
                <div className='form-group'>
                  <TextField required fullWidth size="small" id="outlined-size-small" label="Vendor Name" variant="outlined" />
                </div>
              </Grid>
              <Grid xs={1}></Grid>
              <Grid xs={6}>
                <div className='form-group'>
                  <TextField required fullWidth size="small" id="outlined-size-small" variant="outlined" label="Contact Name" />
                </div>
              </Grid>
            </Grid>

            <Grid container >
              <Grid item xs={5}>
                <div className='form-group'>
                  <TextField required fullWidth size="small" id="outlined-size-small" label="Phone Number" variant="outlined" />
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
          {/* </Card> */}
          <Button fullWidth variant="contained" color="primary" style={{ float: "right" }}>Save</Button>

          {/* </Modal> */}
          </div>
        </Dialog>
      </Container>
    </div>
  );
}

export default AddVendorModal;