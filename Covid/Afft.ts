import axios from "axios"

interface Property{
    cases : number,
    deaths : number,
    recoveries : number
} 

export const getAffected = async(country:string):Promise<Property>=>{
    const result = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
    console.log(result)
    return{
        cases : result.data.cases,
        deaths : result.data.deaths,
        recoveries : result.data.recovered
    }

} 