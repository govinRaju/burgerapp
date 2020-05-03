import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// import { render } from '@testing-library/react';
import Layout from '../src/Components/Layout/Layout.js';
import FarmBuilder from '../src/Containers/Agriculture/FarmBuilder';
import Checkout from './Containers/Checkout/Checkout';

class App extends Component {
  // state = {
  //   show: true
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }
  render() {
    return (
      <div className="App">
        <Layout >
          {/* {this.state.show ? <FarmBuilder /> : null} */}
          {/* <FarmBuilder /> */}
          {/* <Checkout /> */}
          <Route path="/" exact component={FarmBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }

}
export default App;
