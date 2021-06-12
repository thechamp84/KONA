import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import item from '../../assets/shirt.png'
import IconButton from '@material-ui/core/IconButton';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { MenuItem, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
  paper: {
    padding: theme.spacing(1),
    margin: 20,
    borderRadius: "10px",
    borderWidth: 1,
    width:'222px'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductDesign = () => {
  const classes = useStyles();

  return (
      <Paper className={classes.paper} elevation={0} variant="outlined">
        <Grid container>
          {/* <Grid item xs={3} sm={3} md={3} lg={3}>  */}
          <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:'center'}}> 
            <ButtonBase className={classes.image} >
              <img className={classes.img} style={{textAlign:'center'}} alt="complex" src={item} />
            </ButtonBase>
          </Grid>  
            <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Typography>
                        Shirt
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography>
                        SR 300
                    </Typography>
                </Grid>
            </Grid>
            {/* <Grid container  > */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography style={{fontSize:'12px'}}>
                        This the product description in which all the details of product is included.
                    </Typography>
            </Grid>
            {/* </Grid>   */}

             {/* <Grid container  > */}
             {/* <Grid item xs={5} sm={5} md={5} lg={5}>
                <TextField select fullWidth size="small" label="Size" variant="outlined" style={{borderRadius:'60px'}}>
                    <MenuItem>XS</MenuItem>
                    <MenuItem>SM</MenuItem>
                    <MenuItem>MD</MenuItem>
                    <MenuItem>LG</MenuItem>
                </TextField>
             </Grid>
             <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
             <Grid item xs={5} sm={5} md={5} lg={5}>
                <TextField select fullWidth size="small" label="Color" variant="outlined" style={{borderRadius:'60px'}}>
                    <MenuItem>Red</MenuItem>
                    <MenuItem>Black</MenuItem>
                    <MenuItem>White</MenuItem>
                    <MenuItem>Blue</MenuItem>
                </TextField>
             </Grid> */}
             {/* </Grid>   */}

             {/* <Grid container  > */}
             <Grid item xs={12} sm={12} md={12} lg={12}>
                 <Button fullWidth variant="contained" color="primary">Add to Bag</Button>
             </Grid>
             {/* </Grid>   */}

          {/* </Grid> */}
        </Grid>
      </Paper>
  );
}
export default ProductDesign;