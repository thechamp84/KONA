import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Button,
    Card,
    Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) => ({
    root: {
        margingTop: '15%',
        marginBottom: "4%",
        width: "500px",
        padding: "2%",
    },
    dropZone:{
        width:"100%",
        height:'100px',
        minHeight:'none',
    }
}));


const ProductImageUpload = () => {

    const classes = useStyles();

    return (

        <Card className={classes.root} variant="outlined">
            <Grid container >
                <Grid item xs={6}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Product Image
                            </Typography>
                </Grid>
                <Grid item xs={6}>
                    <div className='form-group'>
                        <Button size="small" variant="outlined" color="primary" style={{ float: "right" }} component="label"><AddIcon /> Add Image<input
                            type="file"
                            hidden
                        />
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                <div className='form-group' style={{width:'100%',height:'130px',minHeight:'none',paddingBottom:'30px',marginTop:'2%'}}>
                    <DropzoneArea
                    
                        // dropzoneClass={dropZone}
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={(files) => console.log('Files:', files)}
                    />
                    </div>
                </Grid>
            </Grid>
        </Card>

    );
}
export default ProductImageUpload;