import countryservice from '../services/countryservice'

const countryReducer = (state:any[] = [], action: any) => {
    switch (action.type) {
        case 'INIT':
            state = state.concat(action.data)
            return state
        default:
            return state
    }
}
export const initializer=()=>{
return async(dispatch:any)=>{
    const countries=await countryservice.getAllcountries()
    dispatch({
        type:'INIT',
        data:countries
    })
}
}

export default countryReducer
