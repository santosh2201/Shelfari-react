import * as React from 'react';
import './App.css';
import { Button } from 'react-bootstrap/lib';

class App extends React.Component {
  render() {
      return (
          <div className="App">
              <div className="App-header">
                  <h2>Shelfari</h2>
              </div>
              <div className="App-content">
                  <div className="add-book-container">
                      <Button bsStyle="primary" bsSize="large" block>Add</Button>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
