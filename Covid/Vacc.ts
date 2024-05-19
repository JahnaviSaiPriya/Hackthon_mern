import axios from "axios"

interface Vproperty{
    total : number
} 

export const getVaccinated = async(country:string):Promise<Vproperty>=>{
    const result = await axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=1`)
    console.log(result.data.timeline["5/17/24"])
    return{
        total : result.data.timeline["5/17/24"]    
    }

} 