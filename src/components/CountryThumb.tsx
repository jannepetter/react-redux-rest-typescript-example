import React, { useState } from 'react'
import '../css/countryThumb.css'
import {
    Redirect
  } from 'react-router-dom'

interface Props {
country:any
}

const CountryThumb:React.FC<Props> = (props) => {
    const[redirect,setRedirect]=useState(false)
    const countryInfo=()=>{
       setRedirect(true)
    }
return (<div className='item' onClick={countryInfo}>
    {redirect?<Redirect to={`/country/${props.country.name}`}></Redirect>:null}
    <img className='countryThumbImg' src={props.country.flag} alt='notfound'></img>
    <span className='caption'>{props.country.name}</span>
</div>)
}
export default CountryThumb