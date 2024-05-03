import axios from 'axios';
import './App.css';
import Card from './components/card/card';
import Input from './components/input/input';
import { useEffect, useState } from 'react';
import CircularIndeterminate from './components/Loading/loading';

function App() {

  const [isLoading, setIsLoading] = useState( false)
  const [weather, setWeather] = useState([])
  console.log(weather)
  const [isInput, setIsInput] = useState('')
  const [bishkek, setBishkek] = useState([])
  const [error, setError] = useState('')


  async function GetWeather() {
    try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ff8e32f41f674212a14110750241603&q=${isInput}&aqi=no`)
    setWeather(response.data)
    } catch (error) {
      if(error.response?.status === 400){
        setError('Введите существующий город')
      } else {
        setError('Ошибка выполнения кода')
      }
    }
  }
  
  async function GetBishkek() {
    setIsLoading(true)
    try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ff8e32f41f674212a14110750241603&q=Bishkek&aqi=no`)
    setBishkek(response.data)
    } catch (error) {
      console.log(error)
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(()=> {
    GetBishkek()
  }, [])

  return (
    <div className="App">
      {isLoading? <CircularIndeterminate/> : <div className='incard'>
      <Input
      isinput= {isInput}
      setisinput={setIsInput}
      getweather={GetWeather}
      setweather={setWeather}
      seterror={setError}
      />
      <h2 className='error'>{error? error : ''}</h2>
      <Card
      weather={weather}
      bishkek={bishkek}
      />
        </div>}
    </div>
  );
}

export default App
