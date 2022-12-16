// import logo from './logo.svg';
import './App.css';
// *** start Liz added code from 21-25 App.js
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Game from './pages/Game';
import ListComponent from './components/ListComponent';


// need to import pages and components

const httpLink = createHttpLink({
  uri: '/graphql/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

// *** end Liz added





function App() {
  return (
    // *** start Liz added code from 21-25 App.js
    <ApolloProvider client={client}>
      <Router>

        <Routes>
            <Route
              path='/'
              element={<ListComponent/>}
            />
            
          <Route path='/Profile' element={<Profile />}>
          </Route>
        </Routes>
        </Router>
     

    </ApolloProvider>
  );
}

export default App;
