import React from 'react';

export default class NewPoll extends React.Component {



  render() {
    function AddOption() {
      return (
        <div className='row'>
          <div className='input-field col s6  offset-s3'>
            <input id='choices' className='validade' type='text' name='choices'/>
            <label htmlFor="choices">Option</label>
          </div>
          <a onClick=''>Add</a>
        </div>
      )
    }

    return (
      <div className='container'>
        <form className='col s12' action='#' method='post'>
          <div className='row'>
            <div className='input-field col s6  offset-s3'>
              <input id='question' className='validade' type='text' name='question'/>
              <label htmlFor="question">Question</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6  offset-s3'>
              <input id='choices' className='validade' type='text' name='choices'/>
              <label htmlFor="choices">Option</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6  offset-s3'>
              <input id='choices' className='validade' type='text' name='choices'/>
              <label htmlFor="choices">Option</label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
