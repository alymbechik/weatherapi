import React from 'react'
import './input.css'
import logo from '../../assets/icon _search_.png'


const Input = (props) => {

  const {
    isinput,
    setisinput,
    getweather,
    setweather,
    seterror
  } = props

  const handleChange = (event) => {
    setisinput(event.target.value);
  }
  const reset = () => {
    setweather([])
    seterror('')
  }

  return (
    <div>
      <div className='input'>
        <div className="search">
        <img src={logo} alt="" className='logo'/>
        <input type="text" className='txtfield' placeholder='Search location...' onChange={handleChange}  />
        </div>
        <div className='btns'>
        <button className='start' onClick={getweather} >Show weather</button>
        <button className='reset' onClick={reset} >Reset</button>
        </div>
    </div>
    </div>
  )
}

export default Input