let item=localStorage.getItem('userId')

let parsedItem=JSON.parse(item)

let parsedItemId=parsedItem.id

fetch(`https://jsonplaceholder.typicode.com/users/${parsedItemId}`)
    .then(response=>{
        return response.json()
    })
.then(user => {
    let divOfUse=document.createElement('div')
    document.body.appendChild(divOfUse)

    divOfUse.style.height=`500px`
    divOfUse.style.width=`350px`
    divOfUse.style.border=`2px solid red`
    divOfUse.style.background=`silver`
    divOfUse.style.padding=`10px`
    divOfUse.style.fontSize=`20px`
    document.body.style.display=`flex`
    document.body.style.alignItems=`center`
    document.body.style.justifyContent=`center`
    document.body.style.margin=`30px`
    
let arr=[]
        for (let key in user) {
                if (typeof user[key] === 'object') {
                    for (let kk in user[key]) {
                        console.log(`${kk}: ` + `${user[key][kk]}`)
                        let c=`${kk}: ` + `${user[key][kk]}`
                      arr.push(c)
                        if(typeof user[key][kk]==='object'){
                           for (let kkk in user[key][kk]){
                               console.log(`${kkk}: `+`${user[key][kk][kkk]}`)
                               let x=`${kkk}: `+`${user[key][kk][kkk]}`
                               arr.push(x)
                           }
                        }
                    }
                }
                console.log(`${key}: ` + `${user[key]}`);
                let d=`${key}: ` + `${user[key]}`
            arr.push(d)
            }
        console.log(arr)
    for (let i=0;i<arr.length;i++){
        arr[i]+=`Н`
    }
    console.log(arr)
    let ssss=`` 
    for (let i=0;i<arr.length;i++){
        ssss+=arr[i]
    }
    console.log(ssss)
    let formattedString=ssss.split("Н").join("\n")
    divOfUse.innerText=`${formattedString}`
   let form=formattedString.replaceAll("[object Object]",'')
    console.log(form)
    divOfUse.innerText=`${form}`
    let newForm=form.replace("company:",'')
    console.log(newForm)
    divOfUse.innerText=`${newForm}`

    let button=document.createElement("button")
    button.innerText='post of current user'

    button.style.marginLeft=`100px`

    divOfUse.appendChild(button)
    button.onclick=()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${parsedItemId}/posts`)
            .then(response=>{
                return response.json()
            })
            .then(title=>{
                divOfUse.style.display=`none`
                let MainDivForTitle=document.createElement("div")
                document.body.appendChild(MainDivForTitle)

                MainDivForTitle.style.border=`2px solid black`
                MainDivForTitle.style.height=`100%`
                MainDivForTitle.style.width=`2000px`
                MainDivForTitle.style.alignItems=`center`
                MainDivForTitle.style.display=`flex`
                MainDivForTitle.style.flexWrap=`wrap`

                for(let i=0;i<title.length;i++){
                    let divForTitle=document.createElement("div")
                    let button=document.createElement("button")
                    
                    MainDivForTitle.appendChild(divForTitle)

                    button.style.height=`35px`
                    button.style.width=`90%`
                    button.style.margin=`10px`
                    button.innerText=`Details of this post`

                    divForTitle.style.height=`135px`
                    divForTitle.style.width=`240px`
                    divForTitle.style.border=`2px solid red`
                    divForTitle.style.display=`flex`
                    divForTitle.style.flexDirection=`column`
                    divForTitle.style.margin=`10px`

                    divForTitle.innerHTML=`Title Number ${i+1} <br> ${title[i].title}`
                    divForTitle.appendChild(button)
                    
                    console.log(title[i].title)
                    
                    button.onclick=()=>{
                        localStorage.setItem('titleId',JSON.stringify({id:title[i].id}))
                        let urlToPostDetail="./post-details.html"
                        window.open(urlToPostDetail,'_blank')
                    }
                }
            })
    }
})

