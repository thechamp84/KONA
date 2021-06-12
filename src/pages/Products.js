import React, {useState} from 'react';
import {
  Box,
  Grid,
  Toolbar,
  Paper,
  TextField,
  InputAdornment,
  SvgIcon,
  Button,
  MenuItem
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import ProductComponent from '../components/products/ProductComponent';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AddProduct from '../components/products/AddProduct';


const Products = () => {


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    
  }));

  const [show, setShow] = useState(false);
  

  return (

    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >

          <SwipeableDrawer
            anchor={'right'}
            open={show}
            onClose={() => setShow(false)}
          >
            <AddProduct />
            </SwipeableDrawer>

      {/* <Container maxWidth={false} > */}
        {/* <ProductListToolbar /> */}

        <Paper style={{ margin: "5% 0% 2% 0%" }} elevation={0}>
        <Toolbar >
          <Grid container>
          <Grid item xs={3} >
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search product"
                  variant="outlined"
                />

            </Grid>
            <Grid item xs={5} ></Grid>
            <Grid item xs={2} >
            <TextField  
                  fullWidth
                  size="small"
                  select
                  variant="outlined"
                  label="Sort by:"
                  >
                    <MenuItem value=""><em>---Deafult---</em></MenuItem>
                    <MenuItem value="Popularity">Popularity</MenuItem>
                    <MenuItem value="low to High">low to High</MenuItem>
                    <MenuItem value="High to Low">High to Low</MenuItem>
                  </TextField>
            </Grid>
            <Grid item xs={2} >
                  <Button variant="contained" color="primary" style={{float:"right"}} onClick={() => setShow(true)} >Add Product</Button>
            </Grid>
            
          </Grid>
          </Toolbar>
        </Paper>

        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {/* {products.map((product) => ( */}

            {/* <Grid
              item
              key={1}
              lg={4}
              md={6}
              xs={12}
            >
              <p>products</p>
            </Grid> */}

            {/* <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
            </Card> */}


                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                


            {/* ))} */}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          {/* <Pagination
            color="primary"
            count={3}
            size="small"
          /> */}
        </Box>
      {/* </Container> */}
    </Box>

  );
};

export default Products;