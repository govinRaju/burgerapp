import React, { Component } from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import Layout from '../src/Components/Layout/Layout.js';
import FarmBuilder from '../src/Containers/Agriculture/FarmBuilder';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout >
          <b>IF YOU EAT TODAY THANK A FARMER</b>
          <FarmBuilder />
        </Layout>
      </div>
    );
  }

}
export default App;
