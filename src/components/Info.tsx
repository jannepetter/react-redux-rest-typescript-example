import React from 'react'
import { connect } from 'react-redux'
import '../css/Info.css'
interface Region{
    name:string
    countries:number
    population:number
}
interface Props {
countries:any[]
}

const Info:React.FC<Props> = (props) => {
    const fetched=props.countries
   
    const world=fetched.reduce((acc,item)=>{
        acc[item.region]=acc[item.region]||{countries:0, population:0,name:item.region}
        acc[item.region].countries++
        acc[item.region].population=acc[item.region].population+item.population
        return acc
    },{})
    if(!world['Asia']){
        return(
            <div></div>
        )
    }
    const regions:Region[]=Object.values(world)
const printStuff=(r:Region)=>{
return(r.name?<div className='regionInfo' key={r.name}>
    <h3>{r.name}</h3>
    <span>countries: {r.countries}</span><br></br>
    <span>population: {r.population}</span>
</div>:null)
}
    
    

return (<div className='page'>
    <h1>CountryApp</h1>
    <ul>
        {regions.map(r=>printStuff(r))}
    </ul>
</div>)
}
const mapDispatchToProps = {
  }
  const mapStateToProps = (state: any) => {
    return {
      countries: state.countries,
    }
  }
export default connect(mapStateToProps, mapDispatchToProps) (Info)