// let td = document.querySelector('.td');
// let input = document.getElementById('input');
// let todo=[]
// let hello= document.getElementById('hello')
// // console.log(val)
// submit.onclick = (e)=>{
//     let getVal=input.value;
//     if(getVal=='' ){
//         alert("enter value")
//     }
//     else{
//         e.preventDefault();
//         td.innerText=getVal;
//     }
//     // getVal="";
// }
// del.onclick= ()=>{
//     td.innerText='';
// }

window.addEventListener('load',()=>{
    let form = document.getElementById('form')
    let input = document.getElementById('input');
    let listElement = document.getElementById('tasks');
    
    submit.onclick=(event)=>{
        event.preventDefault();
        let getVal=input.value ;
        // console.log(getVal)
        if(getVal ==''&& !getVal){
            alert('enter task');
            return
        }
        // create a div with class task;
        let task =document.createElement('div');
        task.classList.add('task');

        //create a div with class content;
        let content= document.createElement('div');
        content.classList.add('content');
        // content.innerText=getVal;

        
        //create a div with class action for buttons
        let action = document.createElement('div');
        action.classList.add('action');
    
        //create input tag to store tasks;
        let text= document.createElement('input');
        text.classList.add('text');
        text.type="text";
        text.setAttribute('readonly' , 'readonly');
        text.value=getVal;

        content.appendChild(text);
        task.appendChild(content);
        // listElement.appendChild(task);

        //create edit button;
        let editBtn= document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerHTML='Edit';
        //create delete button;
        let delBtn= document.createElement('button');
        delBtn.classList.add('del');
        delBtn.innerHTML='Delete'

        action.appendChild(editBtn);
        action.appendChild(delBtn);
        task.appendChild(action);
        listElement.appendChild(task);
        
        input.value= '';
//Edit btn functionality
        editBtn.onclick=(()=>{
            if(editBtn.innerText=='Edit'){
                text.removeAttribute('readonly');
                text.focus();
                editBtn.innerText='Save'
            }
            else{
                text.setAttribute('readonly', 'readonly');
                editBtn.innerText="Edit";
            }
        })
        //delete btn functionality;
        delBtn.onclick=(()=>{
         listElement.removeChild(task);
        })
    }
})
