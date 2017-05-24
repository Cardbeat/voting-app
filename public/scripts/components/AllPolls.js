import React from 'react';
import './css/allpolls.css';

export default class AllPolls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polls : [],
      user: []
    };
  }

  componentDidMount() {
    fetch('/poll/api/polls')
      .then(response => response.json())
      .then(result =>
        {
         this.setState({
           polls: result.user.polls,
           user: result.user._id
         })
        })
  }

  onDelete(user, id, item ) {
    fetch(`remove/${user}/${id}`, {method: 'post'})
      .then(response => { response.json() });

     let updatedPolls = this.state.polls.filter( (val, index) => {
       return item !== val;
     })
     this.setState({
      polls: updatedPolls
    })

  }

  render() {
    let polls = this.state.polls;
    polls = polls.map((item, index) => {
      return (
        <div>
          <li key={index} className="col s12 section" >
            <Poll item={item} question={item.question} id={item._id} user={this.state.user} onDelete={this.onDelete.bind(this)} />
          </li>
        </div>
      );
    })
    return (
      <div>
        <ul>
          {polls}
        </ul>
      </div>
    )
  }
}



class Poll extends React.Component {
  render() {
    return (
      <div className="block">
        <div></div>
        <a target='_blank' href={'/poll/' + this.props.user + '/' + this.props.id}>{this.props.question}</a>
        <span onClick={this.handleDelete.bind(this)}><button className="btn">X</button></span>
      </div>
  )
  }

  handleDelete() {
    this.props.onDelete(this.props.user, this.props.id, this.props.item);
  }
}
