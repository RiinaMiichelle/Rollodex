import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayingDetails: false,
    }
  }

  createPersonsDetails = () => {
    const { gender } = this.props.person;
    const { phone } = this.props.person;
    const { email } = this.props.person;
    return (
      <div className="person-details">
        <div>{`Gender: ${gender}`}</div>
        <div>{`Phone: ${phone}`}</div>
        <div>{`Email: ${email}`}</div>
      </div>
    )
  }

  togglePersonDetails = () => {
    this.setState({
      isDisplayingDetails: !this.state.isDisplayingDetails
    })
  }

  render() {
    console.log(this.props.person)
    const { name, picture } = this.props.person;
    const personDisplayName = `${name.title} ${name.first} ${name.last}`
    return (
      // this.props.person exists and has all of the person's information
      <div className="person">
        <div className="person-top-level-info">
          <div className="person-thumbnail">
            <img src={picture.thumbnail} />
          </div>
          <div className="person-name">
            {personDisplayName}
          </div>
          <button onClick={this.togglePersonDetails}>
            {
              this.state.isDisplayingDetails
                ? "Hide Details"
                : "Show Details"
            }
          </button>
        </div>
        {
          this.state.isDisplayingDetails
            ? this.createPersonsDetails()
            : null
        }
      </div>
    )
  }
}

export default Person;