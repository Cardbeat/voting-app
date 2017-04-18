import React from 'react';
import './css/newpoll.css'

export default class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: []
    }
  }

  render() {
    let choices = this.state.choices;
    choices = choices.map((item, index) => {
      return (
        <Choice item={item} key={index} onDelete={this.onDelete.bind(this)} />
    );
  })
    return(
      <div className="card col s12">
        <div id="choice-list">
          <form method="post" className="col s12" action="/poll/newpoll">
            <div className="row">
              <button className="post-button btn btn-primary blue" type="submit">Create Poll</button>
              <div className="input-field col s12">
                <input id="InsertTitle" required type="text" className="validate" />
                <label htmlFor="InsertTitle">Insert title</label>
              </div>
            </div>
          </form>
          <div className="row">
            <ul >{choices}</ul>
            <AddChoice onAdd={this.onAdd.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

  onDelete(item) {
    let updatedChoices = this.state.choices.filter( (val, index) => {
      return item !== val;
    })
    this.setState({
      choices:updatedChoices
    })
  }

  onAdd(item) {
    let updatedChoices = this.state.choices;
    updatedChoices.push(item);
    this.setState({
      choices: updatedChoices
    })
  }
}

class AddChoice extends React.Component {
  render() {
    return (
      <form id="add-choice" onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-field col s6 offset-s1">
          <input className="choice-option" type="text" id="InsertOption" required ref="newChoice" name="choice" />
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


class Choice extends React.Component {
  render() {
    return (
      <li className="row">
        <div className="choice-item">
          <span className="choice-name col s8">{this.props.item}</span>
          <div className="col s4">
            <span className="choice-remove" onClick={this.handleDelete.bind(this)}><button className="remove-button btn btn-floating waves-effect red">X</button></span>
          </div>
        </div>
      </li>
    )
  }
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
}
