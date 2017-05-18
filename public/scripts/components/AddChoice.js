import React from 'react';

export default class AddChoice extends React.Component {
  render() {
    return (
      <form id="add-choice" onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-field col s6 offset-s1">
          <input className="choice-option" type="text" id="InsertOption" required ref="newChoice" />
          <label htmlFor="InsertOption">Insert Option</label>
        </div>
        <input className="hit-button col offset-s1 s3 offset-s1 btn btn-primary" type="submit" value="Add Option"/>
      </form>
    )
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.refs.newChoice.value);
    this.refs.newChoice.value = '';
  }
}
