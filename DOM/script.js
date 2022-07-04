window.onload=function(){
    let num=document.getElementById('num')
    let list= document.getElementById('list')
    let print=document.getElementById('print')
      
    print.onclick=function(){
        let Start =new Date().getTime()
        let N=parseInt(num.value)
        // slow 
        // for (let i=1;i<=N;i++){
        //     list.innerHTML += '<li>' + i + '</li>'
        // }

        // actually this is happening above
        // too expensive
        for (let i=1;i<=N;i++){
            let newstr = list.innerHTML + '<li>' + i + '</li>'

            list.innerHTML=null
            list.innerHTML=newstr
        }

        //  fast
        let listHTML=''; 
        for (let i=1;i<=N;i++){
            listHTML += '<li>' + i + '</li>'
        }
        list.innerHTML=listHTML
        
        // some times we have to do this, this is also fast
        for (let i=1;i<=N;i++){
            let item = document.createElement('li')
            item.innerText = i
            list.appendChild(item)
        }
        console.log(new Date().getTime()-Start)
    }
}