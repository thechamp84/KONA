import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import item from '../../assets/shirt.png'
import IconButton from '@material-ui/core/IconButton';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 20,
    maxWidth: 400,
    borderRadius: "30px",
    borderWidth: 1,
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

export default function ProductComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} variant="outlined">
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  White Shirt
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Price -  SR 500
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  productId : 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Quantity - 200
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <IconButton>
                <BorderColorOutlinedIcon/>
                </IconButton>
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
