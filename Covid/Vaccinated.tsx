import { getVaccinated } from "./Vacc"
import { useEffect,useState } from "react"
export const Vaccinated : React.FC = ():JSX.Element=>{
    const [data,setData] = useState({
        total:0

    })
    const [country,setCountry] = useState("india")
    useEffect(()=>{
        const fetchAffect =async ()=>{
           const affect =  await getVaccinated(country)
           console.log(affect)
           setData(affect)
           console.log(data)
        }
        fetchAffect()
    },[country])
    return <div className="container">
    
    <div className="parent">
    <h2>Select the Country</h2><select value={country} onChange={(event)=>{setCountry(event.target.value)}}>
        <option value="us">US</option>
        <option value="india">India</option>
        <option value="brazil">Brazil</option>
        <option value="china">China</option>
        <option value="finland">Finland</option>
        <option value="germany">Germany</option>
    </select>
       
     <div className="box">
        <table>
            <thead>
                <tr><th>Vaccinated</th></tr>
            </thead>
            <tfoot>
                <tr><td>{data.total}</td></tr>
            </tfoot>
        </table>
     </div>
    </div>
    

    </div>
    
}