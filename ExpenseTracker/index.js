var items = []
const add = ()=>{
    const amount = document.getElementById("amount").value
    const category = document.getElementById("category").value
    const date = document.getElementById("date").value
    const purpose = document.getElementById("purpose").value  
    const item = {
        id: new Date().getTime(),
        amount : amount,
        category:category,
        date:date,
        purpose:purpose
    } 
    items.push(item)
    render()
    console.log(items)
   

}


const deleteItem = (id)=>{
    items = items.filter((i)=>i.id!==id)
    render()
}
const render = ()=>{
    document.getElementById("result").innerHTML=""
    items.map((e)=> 
        document.getElementById("result").innerHTML +=       
        `<tr><td>${e.amount}</td><td>${e.category}</td><td>${e.date}</td><td>${e.purpose}</td><td><button onclick=deleteItem(${e.id})>Delete</button></td><td><button onclick=editItem(${e.id})>Edit</button></td></tr>`
    ) 



} 



