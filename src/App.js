import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PostList from './components/PostList';

function App() {
  return (
    <Router>

      <section className="sanity">
        <Header />
        <Navigation />


        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
        </Switch>


      </section>
    </Router>
  );
}
export default App;
