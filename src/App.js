import React, { useEffect, useMemo, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { makeStyles, ThemeProvider } from '@mui/styles';
import routes from './routes';
import Basic from './views/Basic';
import { createTheme } from '@mui/material/';


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const theme = createTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

function App() {

  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      {/* <div className="container">
          <Navbar />
          <br />
          <Routes>
            <Route path="/" exact element={ExercisesList} />
            <Route path="/edit/:id" element={EditExercise} />
            <Route path="/create" element={CreateExercise} />
            <Route path="/user" element={CreateUser} />
          </Routes>
        </div> */}

      {/* <Route path="/login">
            <LoginPage />
          </Route> */}
      <ThemeProvider theme={theme}>

        <Router>
          <div className={classes.root}>
              <Routes>
                {routes && routes.map((v, k) => (<Route key={k} {...v.routeProps} element={<v.page {...v.pageProps} />} />
                ))}
                {/* <Route exact path='/' element={<Basic/>}/> */}
              </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>

  );
}
export default App;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    overflow: 'auto',
    flexDirection: 'column',
    flexGrow: 1,
  },
  content: {
    // display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'auto',
    position: 'relative'
  },
}));