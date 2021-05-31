
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SignIn from './components/SignIn';
import FeederReading from './components/FeederReading';
import Table from './components/util/Table';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <FeederReading />

          <Table />

          <Switch >
            <Route exact path='/api/v1/auth/signin' render={() => <SignIn setHead={this.setHead} /> }  />
          </Switch>
          <Footer />
        </div>



      </Router>
    );
  }
}

export default App;
