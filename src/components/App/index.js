import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './../Header';
import Footer from './../Footer';
import Menu from './../Menu';
import Home from './../Home';
import About from './../About';
import Contact from './../Contact';
import Gallery from './../Gallery';
import Photography from './../Photography';
import Videography from './../Videography';
import './index.css';


class App extends Component {



  render() {
  return (
    <React.Fragment>
      <Header/>
      <Menu/>
        <div className="App">
          <Switch>
            <Route path='/'component={Home}  exact />
            <Route path='/about'component={About}/>
            <Route path='/contact'component={Contact}/>
            <Route path='/gallery'component={Gallery}/>
            <Route path='/photography'component={Photography}/>
            <Route path='/videography'component={Videography}/>
          </Switch>
        </div>
      <Footer/>
    </React.Fragment>
  );
}
}
export default withRouter(App);
