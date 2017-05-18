import React from 'react';
import './css/newpoll.css';
import Choice from './Choice.js';
import AddChoice from './AddChoice.js';

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
          <Choice item={item} key={index} onRemove={this.onRemove.bind(this)} />
      );
    })
    return(
      <div className="card col s12">
        <div id="choice-list">
          <form method="post" className="col s12" action="/poll/newpoll">
            <div className="row">
              <button className="post-button btn btn-primary blue" type="submit">Create Poll</button>
              <div className="input-field col s12">
                <input id="InsertTitle" required type="text" className="validate" name="question" />
                <label htmlFor="InsertTitle">Insert title</label>
              </div>
            </div>
            <ul>{choices}</ul>
          </form>
          <div className="row">
            <AddChoice onAdd={this.onAdd.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

  onRemove(item) {
    let updatedChoices = this.state.choices.filter( (val) => {
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