import React from 'react';

export default class AddOption extends React.Component {
  render() {
    return (
      <div className='row' {...this.props}>
        <div className='input-field col s6  offset-s3'>
          <input id='choices' className='validate' type='text' name='choices'/>
          <label htmlFor="choices">Option</label>
        </div>
      </div>
    )
  }
}
