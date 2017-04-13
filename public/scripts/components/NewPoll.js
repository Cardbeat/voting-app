import React from 'react';


class Option extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='input-field col s6  offset-s3'>
          <input id='choices' className='validate' type='text' name='choices'/>
          <label htmlFor="choices">Option</label>
        </div>
      </div>
    )
  }
}

export default class NewPoll extends React.Component {
  constructor() {
    super()
    this.state = {
      numOptions: 2
    }
  }

  addOption () {
    this.setState({
      numOptions: this.state.numOptions +1
    });
  }

  render() {
    const options =[];
     for (var i = 0; i < this.state.numOptions; i += 1) {
            options.push(<Option number={i} />);
        };

    return (
      <div className='container'>
        <form className='col s12' action='#' method='post'>
          <div className='row'>
            <div className='input-field col s6  offset-s3'>
              <input id='question' className='validate' type='text' name='question'/>
              <label htmlFor="question">Question</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6  offset-s3'>
              <input id='choices' className='validate' type='text' name='choices'/>
              <label htmlFor="choices">Option</label>
            </div>
            <a href='#' onClick={this.props.addOption}>Add</a>
            <div>
              {this.props.options}
            </div>
          </div>

        </form>
      </div>
    )
  }
}
