import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import BooksList from './components/books/views/list'
import BooksCreate from './components/books/views/create'
import BooksShow from './components/books/views/show'
import BooksUpdate from './components/books/views/update'

import AuthorsList from './components/authors/views/list'
import AuthorsCreate from './components/authors/views/create'
import AuthorsShow from './components/authors/views/show'
import AuthorsUpdate from './components/authors/views/update'

function App() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-12">
          <Header/>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <h1>This is home route</h1>
            </Route>

            // Books routes
            <Route path='/books' exact>
              <BooksList/>
            </Route>
            <Route path='/books/create' exact>
              <BooksCreate/>
            </Route>
            <Route path='/books/:id/show' exact>
              <BooksShow/>
            </Route>
            <Route path='/books/:id/update' exact>
              <BooksUpdate/>
            </Route>

            // Authors routes
            <Route path="/authors" components={AuthorsList} exact />
            <Route path="/authors/create" components={AuthorsCreate} exact />
            <Route path="/authors/:id/show" components={AuthorsShow} exact />
            <Route path="/authors/:id/update" components={AuthorsUpdate} exact />

          </Switch>
        </BrowserRouter>

        <div className="col-12">
          <Footer/>
        </div>
      </div>

    </div>
  );
}

export default App;
