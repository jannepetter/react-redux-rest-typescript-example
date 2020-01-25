import React from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import '../css/region.css'
import CountryThumb from './CountryThumb'

interface Props {
    countries: any[]
    filter:string
    search:string
}
const Region:React.FC<Props> = (props) => {
    const region=props.filter==='All'? props.countries.filter(c=>c.name.toLowerCase().includes(props.search.toLowerCase())):
    props.countries.filter(c=>c.region===props.filter && c.name.toLowerCase().includes(props.search.toLowerCase()))
return (<div>
  <h2>{props.filter}</h2>
{region.map(c =><CountryThumb key={shortid.generate()} country={c}></CountryThumb>)}
</div>)
}
const mapDispatchToProps = {
  }
  const mapStateToProps = (state: any) => {
    return {
      countries: state.countries,
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Region)