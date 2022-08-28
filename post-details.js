let item=localStorage.getItem('userId')
let titleItem=localStorage.getItem('titleId')

let parsedId=JSON.parse(item)
let parsedTitleItem=JSON.parse(titleItem)

let parsedItemId=parsedId.id
let newParsedTitleItem=parsedTitleItem.id

fetch(`https://jsonplaceholder.typicode.com/users/${parsedItemId}/posts`)
.then(response=>{
    return response.json()
})
.then(posts => {
    let arr=[]
    arr=posts
    console.log(arr)
    let array=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].id===newParsedTitleItem){
            console.log(arr[i])
            for (let key in arr[i]){
                let c=`${key}: `+`${arr[i][key]}`
                array.push(c)
            }
        }
    }
    console.log(array)
    let string=''
    for (let i=0;i<array.length;i++){
        array[i]+='H'
        string+=array[i]
    }
    console.log(string)
    let formattedStringWithSpaces=string.split('H').join('\n\n')

    let divAboutPost=document.createElement("div")
    document.body.appendChild(divAboutPost)
    divAboutPost.style.height=`300px`
    divAboutPost.style.width=`300px`
    divAboutPost.style.border=`2px solid red`
    document.body.style.display=`flex`
    document.body.style.flexDirection=`column`
    document.body.style.alignItems=`center`

    divAboutPost.innerText=formattedStringWithSpaces

    fetch(`https://jsonplaceholder.typicode.com/posts/${parsedItemId}/comments`)
        .then(response=>{
            return response.json()
        })
        .then(comments => {
            let emp=''
            let arrOfComments=[]
            arrOfComments=comments
            console.log(comments)
            let MainDivOfComments=document.createElement("div")
            document.body.appendChild(MainDivOfComments)

            let x=document.createElement("div")
            document.body.appendChild(x)

            arrOfComments.forEach(element=>{
                let arrayOfElements=[]
                for(let key in element){
                    let c=`${key}: ${element[key]}`
                    c+='Ю'
                    arrayOfElements.push(c)
                }
                for(let i=0;i<arrayOfElements.length;i++){
                    emp+=arrayOfElements[i]
                }

                console.log(emp)

                let z=document.createElement("div")
                z.style.height=`300px`
                z.style.width=`300px`
                z.style.border=`2px solid black`
                z.style.color=`red`

                x.style.width=`100%`
                // x.style.border=`2px solid black`
                x.style.display=`flex`
                x.style.flexDirection=`row`
                x.style.margin=`10px`
                x.style.gap=`3px`

                x.appendChild(z)
                let formattedEmp=emp.split('Ю').join("\n")
                 formattedEmp=formattedEmp.split('null').join("")
                z.innerText=formattedEmp
                // formattedEmp=null
                console.log(arrayOfElements)
                emp=null
            })
        })
})