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
            <Route path='str8jacketphotography/'component={Home}  exact />
            <Route path='str8jacketphotography/about'component={About}/>
            <Route path='str8jacketphotography/contact'component={Contact}/>
            <Route path='str8jacketphotography/gallery'component={Gallery}/>
            <Route path='str8jacketphotography/photography'component={Photography}/>
            <Route path='str8jacketphotography/videography'component={Videography}/>
          </Switch>
        </div>
      <Footer/>
    </React.Fragment>
  );
}
}
export default withRouter(App);
