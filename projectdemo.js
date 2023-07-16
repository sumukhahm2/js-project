
//let obj;
var element="";
var todos="";
var todoObj=[]
const addExpList=(object)=>
{
   
    axios.post("https://crudcrud.com/api/b79051d20a1b4eba8f71749e5b8aa7d6/demo",object)
    .then((response)=> {
        let item=response.data;
        //console.log(item._id)
        showFunction(item)
    })
    
    
}

const showFunction=(item)=>
{
    
    
    //console.log(item._id)
  let ul=document.getElementById('item-list')
  //let a=item._id;
  
  
  element+=`<li id=${item._id}> ${item.x} ${item.y} <button class="btn btn-success btn-sm" onclick={edit('${item._id}')}>✓</button> <button class="btn btn-danger btn-sm" onclick={delet('${item._id}')}>X</button></li>`
        

  
    ul.innerHTML=element
   
    document.getElementById('expense').value='';
   document.getElementById('description').value='';
   
}

const show=()=>{
    //let ul=document.getElementById('item-list')
    
    axios.get("https://crudcrud.com/api/b79051d20a1b4eba8f71749e5b8aa7d6/demo")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            
            showFunction(res.data[i])
           
        }
        
    })
   
   

}   
    
function addObject(x,y)
{
    let obj={
        x,
        y
 }
 addExpList(obj)
}



var form=document.getElementById('form')
form.addEventListener('submit',createExp)
function createExp(e)
{
    e.preventDefault();
    var x=document.getElementById('expense').value
    var y=document.getElementById('description').value
   addObject(x,y)
   
  
}

function delet(id)
{
   axios.delete(`https://crudcrud.com/api/b79051d20a1b4eba8f71749e5b8aa7d6/demo/${id}`)
   .then((res)=>{
     let parentList=document.getElementById('item-list')
     let itemToBeDeleted=document.getElementById(id)
     if(itemToBeDeleted)
     {
        parentList.removeChild(itemToBeDeleted)
     }
   })
    
    
}
function edit(item)
{
    //console.log(item)
    todoObj.push(item)
    showTodo(item);
    axios.delete(`https://crudcrud.com/api/b79051d20a1b4eba8f71749e5b8aa7d6/demo/${item}`)
    .then((res)=>{
      let parentList=document.getElementById('item-list')
      let itemToBeDeleted=document.getElementById(item)
      //console.log(res)
     
      
    })
    
    
   

}
const showTodo=(item)=>{
   
    axios.get(`https://crudcrud.com/api/b79051d20a1b4eba8f71749e5b8aa7d6/demo/${item}`)
    .then((res)=>{
       let childList=document.getElementById('done-list')
       todos+=`<li id=${res.data._id}> ${res.data.x} ${res.data.y}</li>`
       childList.innerHTML=todos;

    })
}



