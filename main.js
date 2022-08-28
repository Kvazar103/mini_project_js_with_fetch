let theBiggestDiv=document.createElement("div")
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        return response.json()
    })
    .then(users=>users.forEach(user=>{
        let mainDiv=document.createElement("div")  
        let div=document.createElement('div')
        let button=document.createElement("button")
        //// creating elements
        document.body.appendChild(theBiggestDiv)
        theBiggestDiv.appendChild(mainDiv)
        mainDiv.appendChild(div)
        mainDiv.appendChild(button)
       //////// //// appending elements to the mainDiv and mainDiv to body 
        div.innerText=`${user.id} ${user.name}`
        button.innerText=`Information about ${user.name}`
        button.onclick=()=>{
           localStorage.setItem('userId',JSON.stringify({id:user.id}))
            let url="./user-details.html"
            window.open(url,'_blank')
        }
        theBiggestDiv.style.display=`flex`
        theBiggestDiv.style.flexWrap=`wrap`
        theBiggestDiv.style.height=`1000px`
        theBiggestDiv.style.width=`1050px`
        ////////////inner information in div and button
        button.style.color=`silver`
        button.style.fontSize=`20px`
        button.style.width=`400px`
        button.style.height=`60px`
        button.style.background=`red`
        button.style.border=`2px solid black`
        ///styles of button
        div.style.width=`400px`
        div.style.height=`100px`
        div.style.background=`silver`
        div.style.margin=`10px`
        div.style.color=`red`
        div.style.display=`flex`
        div.style.justifyContent=`center`
        div.style.alignItems=`center`
        div.style.border=`2px solid black`
        div.style.fontSize=`30px`
        ///styles of div
        mainDiv.style.display=`flex`
        mainDiv.style.justifyContent=`center`
        mainDiv.style.alignItems=`center`
        mainDiv.style.flexDirection=`column`
        mainDiv.style.border=`2px solid black`
        mainDiv.style.width=`500px`
        mainDiv.style.height=`200px`
        mainDiv.style.margin=`10px`
        mainDiv.style.background=`springgreen`
        ////styles of mainDiv
        document.body.style.display=`flex`
        document.body.style.justifyContent=`center`
        document.body.style.alignItems=`center`
        document.body.style.flexDirection=`column`
        ///styles of body
    }))