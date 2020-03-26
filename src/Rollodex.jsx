import React from 'react';
import Person from './Person';

class Rollodex extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      people: [],
    }
  }
  
  componentDidMount = () => {
    fetch('https://randomuser.me/api?results=25')
          .then((resp) => {
            return resp.json();
          })
          .then((responseJson) => {
            this.setState({
              people: responseJson.results
            });
          });
  }

  createUserComponents = () => {
    return this.state.people.map((person, idx) =>
      <Person person={person} key={idx}/>
    );
  }

  render () {
    console.log(this.state.people)
    return (
      <div>
        {this.createUserComponents()}
      </div>
    );
  }
}

export default Rollodex;
