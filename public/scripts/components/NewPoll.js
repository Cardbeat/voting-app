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
        < Choice item={item} key={index} onDelete={this.onDelete.bind(this)} />
    );
  })
    return(
      <div className="card">
        <div id="choice-list">
          <form method="post" action="/newpoll">
            <div className="row">
              <div class="input-field col s6">
                <input placeholder="insert poll" id="first_name" type="text" className="validate" />
              </div>
            </div>
          </form>
          <ul>{choices}</ul>
          <AddChoice onAdd={this.onAdd.bind(this)} />
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
        <input type="text" placeholder="Insert Option" required ref="newChoice" />
        <input type="submit" value="Hit me"/>
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
      <li>
        <div className="choice-item">
          <span className="choice-name">{this.props.item}</span>
          <span className="choice-remove" onClick={this.handleDelete.bind(this)}><button className="remove-button">X</button></span>
        </div>
      </li>
    )
  }
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
}
