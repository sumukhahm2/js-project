const form=document.getElementById('form')
form.addEventListener('submit',addToTable)
let element=''
let sum
let word="Total cost of product is:-"+sum
document.getElementById('text').innerHTML=word

function addToTable(e){
    e.preventDefault()
    const price=document.getElementById('chooseprice').value
    const name=document.getElementById('choosename').value
    
      
    const obj={
        price,
        name
    
        
    }
    //console.log(obj)
    moveToAxios(obj)
}
const moveToAxios=(obj)=>{
    axios.post("https://crudcrud.com/api/c95cca20ddd746d288970e2c3ac174a3/restorant",obj)
    .then((res)=>{
        sum+=Math.floor(res.data.price)
        displayOnTables(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const displayOnTables=(obj)=>{
   // console.log(obj.table)
    
        element+=`<li id=${obj._id} style="font-weight: bolder;font-size: x-large;color: rgb(206, 209, 186);"> ${obj.price} ${obj.name}  <button onclick={deletOrder('${obj._id}',${obj.price})}>Delete</button>`
        const tableDisplay=document.getElementById('product-list')
        tableDisplay.innerHTML=element
       
   
        showSum()
}

const showSum=()=>{
    word="Total cost of product is:-"+sum
    document.getElementById('text').innerHTML=word
}

const showTables=()=>{
    sum=0;
    axios.get("https://crudcrud.com/api/c95cca20ddd746d288970e2c3ac174a3/restorant")
     .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            sum+=Math.floor(res.data[i].price)
            displayOnTables(res.data[i])
        }
        
     })
}
const deletOrder=(id,price)=>{
    
    axios.delete(`https://crudcrud.com/api/c95cca20ddd746d288970e2c3ac174a3/restorant/${id}`)
     .then((res)=>{
            sum=sum-Math.floor(price);
            const tbl1=document.getElementById('product-list')
            const childElement1=document.getElementById(id)
            if(childElement1)
              tbl1.removeChild(childElement1)
              showSum()
     })
     .catch((error)=>{
        console.log(error)
     })
}
