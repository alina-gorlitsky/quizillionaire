import React, { Component } from 'react';

class Quiz extends Component {
  state = {};

  render() {
    return (
      <div className='QuizContainer'>
        <div className='Question'>Who is your favorite pet?</div>
        <div className='Answers'>
          <div className='Answer active'>Charlie</div>
          <div className='Answer'>Jacob</div>
          <div className='Answer'>Sky</div>
          <div className='Answer'>Elvis</div>
        </div>
      </div>
    );
  }
}

export default Quiz;
