import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// {
//     id: 'NEW_DELHI',
//     capitalDisplayText: 'New Delhi',
//     country: 'India',
//   }

class Capitals extends Component {
  state = {
    displayedCountry: countryAndCapitalsList[0].country,
  }

  onCapitalChangeHandler = event => {
    const capitalChosen = event.target.value
    const countryChosen = countryAndCapitalsList.find(
      eachData => eachData.id === capitalChosen,
    ).country
    this.setState({
      displayedCountry: countryChosen,
    })
  }

  render() {
    const {displayedCountry} = this.state

    return (
      <div className="bg-container1">
        <h1>Countries And Capitals</h1>
        <select onChange={this.onCapitalChangeHandler}>
          {countryAndCapitalsList.map(eachCapital => (
            <option key={eachCapital.id} value={eachCapital.id}>
              {eachCapital.capitalDisplayText}
            </option>
          ))}
        </select>
        <p>is capital of which country?</p>
        <h1>{displayedCountry}</h1>
      </div>
    )
  }
}

export default Capitals
