window.onload = function() {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick = function() {
        let li = document.createElement('li')
        // li.innerText=newtask.value
        
        // add delete btn
        let xbtn = document.createElement('button')
        xbtn.innerText='delete'
        xbtn.onclick = function(event) {
            console.log(event.target.parentElement.innerText)
            event.target.parentElement.remove()
        }

        // up button
        let upbtn = document.createElement('button')
        upbtn.innerText = 'up'  
        upbtn.onclick = function(event){
            // event.target=the up button
            // event.target.parentElemnt = the <li> item
            // event.target.parentElement.parentElement is the todolist
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,  // insert this element
                event.target.parentElement.previousElementSibling  // before it's previous element 
            )
        }

        let downbtn = document.createElement('button')
        downbtn.innerText = 'down'  
        downbtn.onclick = function(event){

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,  // after it's next element 
                event.target.parentElement  // insert this element
            )
        }

        //  add the tast text
        let taskspan=document.createElement('span')
        taskspan.innerText = newtask.value

        li.appendChild(xbtn)
        li.appendChild(upbtn)
        li.appendChild(downbtn)
        li.appendChild(taskspan )
        todolist.appendChild(li)
        newtask.value=''
    } 

}