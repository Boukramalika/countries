import React from 'react'
import Button from './components/Button'
import Card from './components/Card'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }

  async componentDidMount() {
this.getCountry('france') //factorisé

    // fetch('https://restcountries.eu/rest/v2/name/france')
    //  .then(result => result.json())
    // .then(country => console.log('METHODE THEN', country))
    //  .catch(error => console.error(error))
  }
  getCountry = async (country) => {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      // const result = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      const countries = await result.json()
      this.setState({
        name: countries[0].name,
        capital: countries[0].capital,
        flag: countries[0].flag,
        population: countries[0].population,
        region: countries[0].region,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return <div>
      <div className="text-center">
        <Button onClick={() => this.getCountry('france')}>France</Button>
        <Button onClick={() => this.getCountry('brazil')}>Brazil</Button>
        <Button onClick={() => this.getCountry('croatia')}>Croatia</Button>
        <Button onClick={() => this.getCountry('algerie')}>Algerie</Button>
        <Button onClick={() => this.getCountry('usa')}>Washington</Button>
      </div>
      <Card {...this.state}/> {/* équivalent à <Card name={this.state.name} ... />*/}

    </div>
  }
}

      export default App