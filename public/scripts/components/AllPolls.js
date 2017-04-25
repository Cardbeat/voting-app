import React from 'react';

export default class AllPolls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polls : []
    };
  }

  componentDidMount() {
    fetch('/poll/api/polls')
      .then(response => response.json())
      .then(result =>
        {
         this.setState({ polls: result.polls})
        })
  }

  render() {
    return (
      <div>
        <h2> this will be a list to show all the polls</h2>
      </div>
    )
  }
}
// habilidade de deletar enquetes
// criar caixa pra cada enquete com referencia ao link deles
