import React from 'react';

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
    console.log(`${user} and ${id}`);
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
        <li key={index} >
          <Poll item={item} question={item.question} id={item._id} user={this.state.user} onDelete={this.onDelete.bind(this)} />
        </li>
      );
    })
    return (
      <div>
        <h2> this will be a list to show all the polls</h2>
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
      <div>
        <a target='_blank' href={'/poll/' + this.props.user + '/' + this.props.id}>{this.props.question}</a>
        <span onClick={this.handleDelete.bind(this)}><button>X</button></span>
      </div>
  )
  }

  handleDelete() {
    this.props.onDelete(this.props.user, this.props.id, this.props.item);
  }
}
