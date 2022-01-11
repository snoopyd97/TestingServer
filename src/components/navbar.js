import React, { Component } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material/';
import Dog from '../images/dog.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import colors from './colors';


const useStyles = makeStyles({
  button: {
    border: `1px solid ${colors.signButton}`,
    //padding: '5px 10px'
  }
});

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  let navigate = useNavigate();
  const { style } = props;

  const tabs = [
    { title: 'Technology', url: '/' },
    { title: 'Culture', url: '/' },
    { title: 'Business', url: '/' },
    { title: 'Science', url: '/' },
    { title: 'Health', url: '/' },
    { title: 'Home', url: '/HomePage' },
  ];

  return (

    /*  <div style={{ position: 'relative', display: 'flex', padding: '16px 10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, height: '60px' }}> */
    <AppBar >
      <Toolbar className={`${style}`} style={{ justifyContent: 'space-between', backgroundColor: '#FFF', backdropFilter: 'initial', position: 'relative' }}>
        {/* <IconButton className={`${classes.leftButton} ${leftButtonClassName}`} onClick={onBack}><BackIcon htmlColor='#353439' fontSize='large' /></IconButton> */}
        <img src={Dog} alt="" style={{ height: '30px', width: '30px' }} />
        <div>
          {
            tabs.map((items, index) => (
              <Button
                key={index.toString()}
                onClick={() => {
                  navigate({ pathname: `${items?.url}` })
                }}
              >
                {items?.title}
              </Button>
            ))
          }
        </div>
        <div style={{}}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button style={{ border: `1px solid ${colors.signButton}` }} className={classes.button}>
            <Typography>Sign in</Typography>
          </Button>
          <Button className={classes.button}>
            <Typography>Create Account</Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    /*  </div> */
  )
}

