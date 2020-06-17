/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/home/Content';
import WalkDetails from './components/walk/WalkDetails'
import WalkCreator from './components/creating/WalkCreator'
import Resources from './components/resources/Resources'
import Contact from './components/about/About';
import MyWalks from "./components/list/MyWalks";

class App extends Component{
    render(){
        return(
            <HashRouter>
              <div>
                <Header/>
                <Container>
                  <Switch>
                    <Route exact path='/' component={Content}/>
                    <Route path='/walk/create' component={WalkCreator}/>
                    <Route path='/walks/all' component={MyWalks}/>
                    <Route path='/walk/details' component={WalkDetails}/>
                    <Route path='/resources' component={Resources}/>
                    <Route path='/contact' component={Contact}/>
                  </Switch>
                </Container>
                <Footer/>
              </div>
            </HashRouter>
        )
    }
}

export default App;
