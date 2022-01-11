import React, { useEffect, useMemo, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material/';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function Basic() {
    const classes = useStyles();
    let navigate = useNavigate();

    return (
        <div className={classes.container} style={{flexDirection: 'column', display: 'flex'}}>
            <p>Danny Testing</p>
            <Button 
            onClick={() => navigate({ pathname: '/HomePage',})}
            >HomePage</Button>
        </div>
    );
}

export default Basic;
