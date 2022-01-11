import React, { useEffect, useMemo, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'auto'
    },
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Navbar
                title="Home Page"
                style={{
                }}
            />
            <div style={{backgroundColor: '#FFF',flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Typography>asdasfs</Typography>
            </div>
        </div>
    );
}
