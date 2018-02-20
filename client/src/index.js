import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <div>Application running, add your routing</div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  </Router>,
  document.getElementById('root')
);
