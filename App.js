import React from 'react'
import {Grid} from '@material-ui/core';
import Details from './component/Details/Details.js';
import Main from './component/Main/Main.js';
import useStyles from './style.js';
const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>
                <Grid item xs={12} sm={4}>
                   <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={4}>
                     <Details title="Expense"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                     <Main/>
                </Grid>    
            </Grid> 
        </div>
    );
}

export default App
