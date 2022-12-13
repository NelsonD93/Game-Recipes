import logo from './logo.svg';
import './App.css';
// *** start Liz added code from 21-25 App.js
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

// need to import pages and components

const httpLink = createHttpLink({
  uri: '/graphql',
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
              element={<Navbar />}
            />
       </Routes>     
        {/* end Liz added */}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        {/* start Liz added */}
      </Router>
    </ApolloProvider>
    // end Liz added
  );
}

export default App;
