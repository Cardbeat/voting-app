import React from 'react';

export default class Choice extends React.Component {
  render() {
    return (
      <li className="row">
        <div className="choice-item">
          <input className="choice-name col s8" value={this.props.item} name="choices"/>
          <div className="col s4">
            <span className="choice-remove" onClick={this.handleRemove.bind(this)}><button className="remove-button btn btn-floating waves-effect red">X</button></span>
          </div>
        </div>
      </li>
    )
  }
  handleRemove(event) {
    event.preventDefault();
    this.props.onRemove(this.props.item);
  }
}
