import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    Search,
  } from '@material-ui/core';
  
  const ProductListToolbar = (props) => (
    <Box {...props}>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>
          Import
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add product
        </Button>
      </Box> */}
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
  
  export default ProductListToolbar;
  