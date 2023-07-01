import React,{ Component }  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header.js';
import Bio from './components/bio.js';
import Work from './components/work.js';
import Contact from './components/contact.js';
import NotFound from './components/notFound.js';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux'; 

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path='/' element={<Bio/>} exact={true} />
              <Route path='/work' element={<Work/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
