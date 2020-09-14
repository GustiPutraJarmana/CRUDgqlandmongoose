import React from 'react';
import './App.css'; 
import { ApolloProvider } from '@apollo/client';
import client from './apollo'

//pages
import HomePage from './pages/HomePage'

function App() {
  return(
    <ApolloProvider client={client}>
      <div>
      <HomePage/>
      </div>
    </ApolloProvider>
    
  )
}

export default App;
