import React, { Component } from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import Layout from '../src/Components/Layout/Layout.js';
import FarmBuilder from '../src/Containers/Agriculture/FarmBuilder';
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
          <FarmBuilder />
        </Layout>
      </div>
    );
  }

}
export default App;
