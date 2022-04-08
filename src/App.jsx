import React, { Component } from 'react';
import './App.css';
import Quiz from './components/quiz';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  levels = [
    { number: 1, amount: '$ 100' },
    { number: 2, amount: '$ 200' },
    { number: 3, amount: '$ 300' },
    { number: 4, amount: '$ 500' },
    { number: 5, amount: '$ 1000' },
    { number: 6, amount: '$ 2000' },
    { number: 7, amount: '$ 4000' },
    { number: 8, amount: '$ 8000' },
    { number: 9, amount: '$ 16000' },
    { number: 10, amount: '$ 32000' },
    { number: 11, amount: '$ 64000' },
    { number: 12, amount: '$ 125000' },
    { number: 13, amount: '$ 250000' },
    { number: 14, amount: '$ 500000' },
    { number: 15, amount: '$ 1000000' }
  ].reverse();

  render() {
    return (
      <div className='App'>
        <div className='Main'>
          <div className='MainTop'>
            <div className='Timer'>60</div>
          </div>
          <div className='MainBottom'>
            <Quiz />
          </div>
        </div>
        <div className='LevelsContainer'>
          <ul className='Levels'>
            {this.levels.map((level) => (
              <li
                key={level.number}
                className={this.state.count === level.number ? 'LevelsItem active' : 'LevelsItem'}>
                <span className='LevelsItemNumber'>{level.number}</span>
                <span className='LevelsItemAmount'>{level.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
