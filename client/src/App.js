// import logo from './logo.svg';
import './App.css';
import '../src/assets/css/Game.css';
// *** start Liz added code from 21-25 App.js
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Game from './pages/Game';
import GameTest from './pages/GameTest';
import Gather from './pages/Gather';
import Craft from './pages/Craft';
import Navbar from './components/Navbar';
// import ListComponent from './components/ListComponent';


// need to import pages and components

const httpLink = createHttpLink({
  // uri: 'http://localhost:3001/graphql/',
  uri: '/graphql'
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
        <div>
        <Navbar />
          <Routes>
            {/* Home page for app will contain the images of the 4 games that are links to the 4 games */}
            <Route
              path='/'
              element={<Home />}
            />
            {/* Login page will contain login and signup components */}
            <Route
              path='/Login'
              element={<Login />}
            />
            {/* Signup page will contain login and signup components */}
            <Route
              path='/Signup'
              element={<Signup />}
            />
            {/* Profile page will contain the username, email and any open lists, maybe add completed builds? */}
            <Route
              path='/Profile'
              element={<Profile />}
            />
            {/* Game page will contain list of all recipes for that game */}
            <Route
              path='/Game'
              element={<Game />}
            />
             {/* Game test page will contain list of all recipes for that game */}
             <Route
              path='/GameTest'
              element={<GameTest />}
            />
            {/* Gather page will be where user gathers items for recipe */}
            <Route
              path='/Gather'
              element={<Gather />}
            />
            {/* Craft page will be where user gathers items for recipe */}
            <Route
              path='/Craft'
              element={<Craft />}
            />


          </Routes>
        </div>
      </Router>


    </ApolloProvider>
  );
}

export default App;
