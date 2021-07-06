import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useStyles from './style.js';
import useTransactions from '../../useTransactions.js';
const Details = ({title}) => {
    const classes = useStyles();
    const {total}= useTransactions(title);
    return (
        <Card className={classes.income}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography varient="h5">RS.{total}</Typography>
            </CardContent>
        </Card>
    );
}

export default Details
