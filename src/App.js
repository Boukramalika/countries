import React, { useState, useEffect, useCallback } from 'react';
import Button from "./components/Button.jsx"
import Card from "./components/Card.jsx"


function App() {
  const [name, setName] = useState()
  const [capital, setCapital] = useState()
  const [flag, setFlag] = useState('')
  const [population, setPopulation] = useState()
  const [region, setRegion] = useState()


  const getCountry = useCallback(async (country) => {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      const countries= await result.json()
      setName(countries[0].name)
      setCapital(countries[0].capital)
      setFlag(countries[0].flag)
      setPopulation(countries[0].population)
      setRegion(countries[0].region)
    } catch (error) {
      console.error(error)
    }
  }, [setName, setCapital, setFlag, setPopulation, setRegion])


  useEffect(async () => {
    try {
      getCountry('france')
    } catch (error) {
      console.error(error)
    }
  }, [])


  return <div>
    <div className="text-center">
      <h1>Countries</h1>
        <Button onClick={() => getCountry('france')}>France</Button>
        <Button onClick={() => getCountry('brazil')}>Brazil</Button>
        <Button onClick={() => getCountry('croatia')}>Croatia</Button>
        <Button onClick={() => getCountry('algerie')}>Algerie</Button>
        <Button onClick={() => getCountry('usa')}>Washington</Button>
    </div>
    <Card
      name={name}
      capital={capital}
      flag={flag}
      population={population}
      region={region}
    />
  </div>
}
export default App
