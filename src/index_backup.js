import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  return {
  headers: {
       ...headers, 'x-hasura-admin-secret': '5FAWmUc0k8FkEBPV04GZyxIuwHceHezENiXXVKnOPFF5PG9XvCyTgHXxGfepUZx5'
     }
   }
 });

 const httpLink = createHttpLink({
  uri: 'https://striking-yeti-35.hasura.app/v1/graphql',
 });



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
 });





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>,);


