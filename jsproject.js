const form=document.getElementById('form')
form.addEventListener('submit',addToTable)
let table1=''
let table2=''
let table3=''
function addToTable(e){
    e.preventDefault()
    const price=document.getElementById('chooseprice').value
    const dish=document.getElementById('choosedish').value
    const table=document.getElementById('table-list').value
    const obj={
        price,
        dish,
        table
    }
    //console.log(obj)
    moveToAxios(obj)
}
const moveToAxios=(obj)=>{
    axios.post("https://crudcrud.com/api/9f5a3b7333a94e90a8c99709072c8814/restorant",obj)
    .then((res)=>{
        displayOnTables(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const displayOnTables=(obj)=>{
    console.log(obj.table)
    if(obj.table==='table1')
    {
        table1+=`<li id=${obj._id}> ${obj.price} ${obj.dish} ${obj.table} <button onclick={deletOrder('${obj._id}','${obj.table}')}>Delete</button>`
        const tableDisplay1=document.getElementById('table1')
        tableDisplay1.innerHTML=table1
    }
    if(obj.table==="table2")
    {
        table2+=`<li id=${obj._id}> ${obj.price} ${obj.dish} ${obj.table} <button  onclick={deletOrder('${obj._id}','${obj.table}')}>Delete</button>`
        const tableDisplay2=document.getElementById('table2')
        tableDisplay2.innerHTML=table2
    }
    if(obj.table==="table3")
    {
        table3+=`<li id=${obj._id}> ${obj.price} ${obj.dish} ${obj.table} <button  onclick={deletOrder('${obj._id}','${obj.table}')}>Delete</button>`
        const tableDisplay3=document.getElementById('table3')
        tableDisplay3.innerHTML=table3
    }
   
}

const showTables=()=>{
    axios.get("https://crudcrud.com/api/9f5a3b7333a94e90a8c99709072c8814/restorant")
     .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            displayOnTables(res.data[i])
        }
     })
}
const deletOrder=(id,table)=>{
   // console.log(table)
    axios.delete(`https://crudcrud.com/api/9f5a3b7333a94e90a8c99709072c8814/restorant/${id}`)
     .then((res)=>{
        if(table==='table1')
        {
            const tbl1=document.getElementById('table1')
            const childElement1=document.getElementById(id)
            if(childElement1)
              tbl1.removeChild(childElement1)
        }
        else if(table==='table2')
        {
            const tbl2=document.getElementById('table2')
            const childElement2=document.getElementById(id)
            if(childElement2)
            tbl2.removeChild(childElement2)
        }
        else{
            const tbl3=document.getElementById('table3')
            const childElement3=document.getElementById(id)
            if(childElement3)
            tbl3.removeChild(childElement3)
        }
     })
     .catch((error)=>{
        console.log(error)
     })
}