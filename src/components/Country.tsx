import React from 'react'
import { connect } from 'react-redux'
import '../css/country.css'

interface Props {
    countries: any[]
    match: { params: any }
}

const Country: React.FC<Props> = (props) => {
    const result = props.countries.find(c=>c.name===props.match.params.name)
    let currency
    let symbol
    const faker={
        name:'not found'
    }
    const country=result?result:faker
    
    if(result){
        currency=country.currencies[0].name
        symbol=country.currencies[0].symbol
    }
    return (<div>
        <div className='container'>
        <h2>{country.name}</h2>
        <img className='flag' src={country.flag} alt='not found'></img><br></br>
        <span className='element'>{'Capital:\t\t'+country.capital}</span><br></br>
        <span className='element'>{'Population:  \t '+country.population}</span><br></br>
        <span className='element'>{'Currency:  \t '+currency+' '+symbol}</span><br></br>

        </div>
    </div>)
}
const mapDispatchToProps = {
}
const mapStateToProps = (state: any) => {
    return {
        countries: state.countries,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Country)