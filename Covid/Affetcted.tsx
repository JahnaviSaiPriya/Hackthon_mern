import { getAffected } from "./Afft"
import { useEffect,useState } from "react"

export const Affected : React.FC = ():JSX.Element=>{
    const [data,setData] = useState({
        cases :0,
        deaths:0,
        recoveries:0

    })
    const [country,setCountry] = useState("germany")
    useEffect(()=>{
        const fetchAffect =async ()=>{
           const affect =  await getAffected(country)
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
                <tr><th>Cases</th><th>Deaths</th><th>Recoveries</th></tr>
            </thead>
            <tfoot>
                <tr><td>{data.cases}</td><td>{data.deaths}</td><td>{data.recoveries}</td></tr>
            </tfoot>
        </table>
     </div>
    </div>
    

    </div>
    
}